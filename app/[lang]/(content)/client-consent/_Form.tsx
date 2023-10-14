'use client';

import { ReactNode, startTransition, useEffect, useRef, useState } from 'react';
import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from 'react-dom';
import generatePDF, { usePDF } from 'react-to-pdf';

import { faCheck, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { ConsentRequestResponse, sendClientConsent } from 'shared/actions/sentClientConsent';
import { uploadFile } from 'shared/actions/uploadFile';
import { Dict } from 'shared/dictionaries';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';
import { Input } from 'shared/ui/Input';
import { PhoneInput } from 'shared/ui/PhoneInput';
import { Text } from 'shared/ui/Text';

type Props = {
  dict: Dict;
  lang: string;
  disclosure: ReactNode;
};

const intialState: Awaited<ConsentRequestResponse> = {
  message: null,
  status: 'initial',
};

const getConsent = () => document.getElementById('client-consent');

function SubmitBtn() {
  const { pending } = useFormStatus();
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

export function Form(props: Props) {
  const { dict, lang, disclosure } = props;
  const consentWithLang = sendClientConsent.bind(null, lang);
  const [{ message, errors, status, values, clientId }, formAction] = useFormState(
    consentWithLang,
    intialState,
  );
  const [fullname, setFullname] = useState('');
  const pdfSent = useRef(false);

  const [showMessage, setShowMessage] = useState(false);
  const isPrinting = !showMessage && status === 'success' && values?.fullname;

  useEffect(() => {
    if (!isPrinting || pdfSent.current) return;
    const normalizedName = values.fullname.replace(/[^a-z0-9]/gi, '-').toLowerCase();

    generatePDF(getConsent, {
      method: 'save',
      filename: `${normalizedName}__aborgia__Client-Consent.pdf`,
    }).then(pdf => {
      const formData = new FormData();
      formData.set('ref', 'api::client.client');
      formData.set('field', 'documents');
      formData.set('refId', String(clientId));
      formData.append('files', pdf.output('blob'));

      startTransition(() => {
        void uploadFile(formData);
        pdfSent.current = true;
      });

      setShowMessage(true);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 250);
    });
  }, [isPrinting, clientId, values?.fullname]);

  if (showMessage && status === 'success' && message) {
    return (
      <div className="p-8 max-w-screen-lg my-0 mx-auto">
        <div
          className={clsx(
            'col-span-2 flex gap-4 px-4 py-2 rounded',
            'items-center bg-transparentPrimary border-primary border-2 text-primaryDark',
          )}
        >
          <FontAwesomeIcon icon={faCheck} fontSize="1.6rem" color="currentColor" />
          <Text variant="subtitle1">{message}</Text>
        </div>
      </div>
    );
  }

  return (
    <div
      id="client-consent"
      className={clsx('flex flex-col gap-8 text-transparentDark8', isPrinting && 'p-6')}
    >
      <div>
        <Text component="h2" variant="h3">
          Arelys Borgia - Client Consent Form
        </Text>
        <Text variant="h5">CMS Marketplace Agents and Brokers</Text>
      </div>
      <form className="flex flex-col gap-4 text-lg" noValidate action={formAction}>
        <Text variant="subtitle1" component="p">
          I, <b>{fullname || values?.fullname}</b> give my permission to&nbsp;
          <b className="text-primary">Arelys Borgia</b> to serve as the health insurance agent or
          broker for myself and my entire household if applicable, for purposes of enrollment in a
          Qualified Health Plan offered on the Federally Facilitated Marketplace. By consenting to
          this agreement, I authorize the above-mentioned Agent to view and use the confidential
          information provided by me in writing, electronically, or by telephone only for the
          purposes of one or more of the following:
        </Text>

        <ol className="list-decimal ml-8">
          <Text variant="subtitle1" component="li">
            Searching for an existing Marketplace application;
          </Text>
          <Text variant="subtitle1" component="li">
            Completing an application for eligibility and enrollment in a Marketplace Qualified
            Health Plan or other government insurance affordability programs, such as Medicaid and
            CHIP or advance tax credits to help pay for Marketplace premiums;
          </Text>
          <Text variant="subtitle1" component="li">
            Providing ongoing account maintenance and enrollment assistance, as necessary;
          </Text>
          <Text variant="subtitle1" component="li">
            Responding to inquiries from the Marketplace regarding my Marketplace application.
          </Text>
        </ol>

        <Text variant="subtitle1" component="p">
          I understand that the Agent will not use or share my personally identifiable information
          (PII) for any purposes other than those listed above. The Agent will ensure that my PII is
          kept private and safe when collecting, storing, and using my PII for the stated purposes
          above.
        </Text>

        <Text variant="subtitle1" component="p">
          I confirm that the information I provide for entry on my Marketplace eligibility and
          enrollment application will be true to the best of my knowledge. I understand that I do
          not have to share additional personal information about myself or my health with my Agent
          beyond what is required on the application for eligibility and enrollment purposes. I
          understand that my consent remains in effect until I revoke it, and I may revoke or modify
          my consent at any time by sending an email to
          <b> aborgiainsurance@gmail.com</b> specifying my request.
        </Text>

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
              {dict.quote.email.label}: <b>{values.email}</b>
            </Text>
            <Text variant="h5" component="p">
              {dict.quote.phone.label}: <b>{values.phone}</b>
            </Text>
            <Text variant="h5" component="p">
              {dict.quote.fullname.signature}: <b>{values.fullname}</b>
            </Text>
            <Text variant="h5" component="p">
              {new Date().toLocaleDateString()}
            </Text>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            <Input
              id="email"
              type="email"
              name="email"
              label={dict.quote.email.label}
              required
              placeholder="johndoe@gmail.com"
              containerClassname="col-span-2 md:col-span-1"
              error={errors?.email}
            />
            <PhoneInput
              id="phone"
              name="phone"
              containerClassname="col-span-2 md:col-span-1"
              required
              label={dict.quote.phone.label}
              placeholder="(xxx) xxx-xxxx"
              error={errors?.phone}
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
              error={errors?.fullname}
            />
            <Checkbox
              name="acknowledgement"
              required
              containerClassname="col-span-2"
              label={dict.quote.acknowledgement.label}
              error={errors?.acknowledgement}
            />
            {!isPrinting && (
              <div className="col-span-2 flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-1">
                  <div
                    className="g-recaptcha"
                    data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  />
                  {errors?.['g-recaptcha-response'] && (
                    <Text className="!text-error text-sm">{errors?.['g-recaptcha-response']}</Text>
                  )}
                </div>
              </div>
            )}
            {status === 'failed' && message && (
              <div
                className={clsx(
                  'col-span-2 flex gap-4 px-4 py-2 rounded',
                  'items-center bg-transparentError border-errorLight border-2 text-errorDark',
                )}
              >
                <FontAwesomeIcon icon={faWarning} fontSize="1.6rem" color="currentColor" />
                <Text variant="subtitle1">{message}</Text>
              </div>
            )}
            <SubmitBtn />
          </div>
        )}
      </form>
      {disclosure}
    </div>
  );
}
