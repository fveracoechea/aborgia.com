'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import generatePDF from 'react-to-pdf';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import type { ConsentRequestResponse } from 'shared/actions/sentClientConsent';
import { Dict } from 'shared/dictionaries';
import { Alert } from 'shared/ui/Alert';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';
import { Input } from 'shared/ui/Input';
import { PhoneInput } from 'shared/ui/PhoneInput';
import { Text } from 'shared/ui/Text';

type Props = {
  dict: Dict;
  lang: string;
  heading: ReactNode;
  content: ReactNode;
  disclosure: ReactNode;
};

const intialState: Awaited<ConsentRequestResponse> = {
  message: null,
  status: 'initial',
};

const getConsent = () => document.getElementById('client-consent');

const scrollUp = () =>
  new Promise<void>(resolve =>
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      resolve();
    }),
  );

function SubmitBtn({ pending }: { pending: boolean }) {
  return (
    <Button
      className="col-span-2 justify-center uppercase"
      color="primary"
      variant="contained"
      type="submit"
      size="lg"
      loading={pending}
      disabled={pending}
    >
      Submit Consent
    </Button>
  );
}

type FormState = Awaited<ConsentRequestResponse>;

type Status = 'form' | 'uploading' | 'printing';

export function Form(props: Props) {
  const { dict, lang, disclosure, heading, content } = props;

  const [formState, setFormState] = useState<FormState>(intialState);

  const [status, setStatus] = useState<Status>('form');

  const [fullname, setFullname] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isPrinting = status === 'printing' && formState.status === 'success';

  useEffect(() => {
    if (!isPrinting || !formState.values?.fullname) return;

    const normalizedName = formState.values.fullname.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const filename = `${normalizedName}__aborgia__Client-Consent.pdf`;

    generatePDF(getConsent, { method: 'build' })
      .then(pdf => {
        setStatus('uploading');
        return Promise.all([Promise.resolve(pdf), scrollUp()]);
      })
      .then(([pdf]) => {
        const body = new FormData();
        body.set('ref', 'api::client.client');
        body.set('field', 'documents');
        body.set('refId', String(formState?.clientId));
        body.append('files', pdf.output('blob'));

        return Promise.all([
          Promise.resolve(pdf),
          scrollUp(),
          fetch('/api/strapi-upload', {
            method: 'post',
            headers: { ContentType: 'multipart/form-data' },
            body,
          }),
        ]);
      })
      .then(([pdf]) => pdf.save())
      .catch(console.error)
      .finally(() => setStatus('form'));
  }, [isPrinting, formState]);

  if (status === 'uploading') {
    return (
      <div className="p-8 max-w-screen-lg my-0 mx-auto text-center mh-[4000px]">
        <FontAwesomeIcon className="animate-spin text-primary" fontSize="3rem" icon={faSpinner} />
        <Text className="text-primary">Loading...</Text>
      </div>
    );
  }

  if (status === 'form' && formState.status === 'success' && formState?.message) {
    return (
      <div className="p-8 max-w-screen-lg my-0 mx-auto">
        <Alert variant="success">
          <Text variant="subtitle1">{formState.message}</Text>
        </Alert>
      </div>
    );
  }

  return (
    <div
      id="client-consent"
      className={clsx(
        'flex flex-col gap-8 text-transparentDark8',
        isPrinting && 'p-6 min-w-[1200px]',
      )}
    >
      {heading}
      <form
        className="flex flex-col gap-4 text-lg"
        noValidate
        onSubmit={e => {
          e.preventDefault();
          const target = e.currentTarget;
          if (target instanceof HTMLFormElement) {
            setIsLoading(true);

            fetch('/api/client-consent', {
              method: 'post',
              headers: { ContentType: 'multipart/form-data' },
              body: new FormData(target),
            })
              .then(r => r.json())
              .then((result: FormState) => {
                setFormState(result);
                if (result.status === 'success') setStatus('printing');
              })
              .catch(e => {
                console.error(e);
                setFormState({
                  status: 'failed',
                  message: dict.quote.error,
                });
                setIsLoading(false);
              })
              .finally(() => setIsLoading(false));
          }
        }}
      >
        <Text variant="subtitle1" component="p">
          I, <b>{fullname || formState?.values?.fullname}</b> give my permission to&nbsp;
          <b className="text-primary">Arelys Borgia</b> to serve as the health insurance agent or
          broker for myself and my entire household if applicable, for purposes of enrollment in a
          Qualified Health Plan offered on the Federally Facilitated Marketplace. By consenting to
          this agreement, I authorize the above-mentioned Agent to view and use the confidential
          information provided by me in writing, electronically, or by telephone only for the
          purposes of one or more of the following:
        </Text>

        {content}

        <ul className="flex flex-col gap-0 text-base">
          <li>
            <span className="text-primary font-semibold text-lg">Arelys Borgia de Perez</span>
          </li>
          <li>
            <span>Agent National Producer Number:</span> <span>19802325</span>
          </li>
          <li>
            <span>Phone Number:</span> <span>(404) 513-1683</span>
          </li>
          <li>
            <span>Email:</span> <span>aborgiainsurance@gmail.com</span>
          </li>
        </ul>

        <div className="col-span-2 border border-solid border-grey w-full" />

        {isPrinting ? (
          <div>
            <Text variant="h5" component="p">
              {dict.quote.email.label}: <b>{formState?.values?.email}</b>
            </Text>
            <Text variant="h5" component="p">
              {dict.quote.phone.label}: <b>{formState?.values?.phone}</b>
            </Text>
            <Text variant="h5" component="p">
              {dict.quote.fullname.signature}: <b>{formState?.values?.fullname}</b>
            </Text>
            <Text variant="h5" component="p">
              {new Date().toLocaleDateString()}
            </Text>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <input type="hidden" name="lang" value={lang} />
            <Input
              id="email"
              type="email"
              name="email"
              label={dict.quote.email.label}
              required
              placeholder="johndoe@gmail.com"
              containerClassname="col-span-2 md:col-span-1"
              error={formState?.errors?.email}
            />
            <PhoneInput
              id="phone"
              name="phone"
              containerClassname="col-span-2 md:col-span-1"
              required
              label={dict.quote.phone.label}
              placeholder="(xxx) xxx-xxxx"
              error={formState?.errors?.phone}
            />
            <Input
              id="fullname"
              name="fullname"
              label={dict.quote.fullname.signature}
              required
              value={fullname}
              maxLength={65}
              onChange={e => setFullname(e.target.value)}
              placeholder={dict.quote.fullname.label}
              containerClassname="col-span-2"
              error={formState?.errors?.fullname}
            />
            <Checkbox
              name="acknowledgement"
              required
              containerClassname="col-span-2"
              label={dict.quote.acknowledgement.label}
              error={formState?.errors?.acknowledgement}
            />
            {!isPrinting && (
              <div className="col-span-2 flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-1">
                  <div
                    className="g-recaptcha"
                    data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  />
                  {formState?.errors?.['g-recaptcha-response'] && (
                    <Text className="!text-error text-sm">
                      {formState?.errors?.['g-recaptcha-response']}
                    </Text>
                  )}
                </div>
              </div>
            )}
            {formState.status === 'failed' && formState.message && (
              <Alert variant="error">
                <Text variant="subtitle1">{formState.message}</Text>
              </Alert>
            )}
            <SubmitBtn pending={isLoading} />
          </div>
        )}
      </form>
      {disclosure}
    </div>
  );
}
