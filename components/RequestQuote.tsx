'use client';

import { useState } from 'react';

import { QuoteRequestResponse, createQuoteRequest } from 'shared/actions/createQuoteRequest';
import { Dict } from 'shared/locales/en';
import { CoverageList } from 'shared/schema';
import { Alert } from 'shared/ui/Alert';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';
import { Container } from 'shared/ui/Container';
import { Input } from 'shared/ui/Input';
import { PhoneInput } from 'shared/ui/PhoneInput';
import { Select } from 'shared/ui/Select';
import { Text } from 'shared/ui/Text';
import { Textarea } from 'shared/ui/Textarea';

const intialState: Awaited<QuoteRequestResponse> = {
  message: null,
  status: 'initial',
};

type Props = {
  dict: Dict;
  lang: string;
  coverages: CoverageList;
};

function SubmitButton({ dict, pending }: { dict: Dict; pending: boolean }) {
  return (
    <Button
      size="lg"
      color="primary"
      variant="contained"
      type="submit"
      loading={pending}
      disabled={pending}
      className="min-w-[200px] w-full justify-center uppercase md:w-auto md:self-start"
    >
      {dict.quote.submit}
    </Button>
  );
}

export function RequestQuote(props: Props) {
  const { dict, coverages, lang } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState<Awaited<QuoteRequestResponse>>(intialState);

  return (
    <Container component="section" id="quote-request" className="scroll-mt-20 md:scroll-mt-8">
      <div className="text-center flex flex-col justify-center items-center pb-4">
        <Text variant="h3" component="h4" className="text-primary capitalize">
          {dict.header.quote}
        </Text>
        <Text>{dict.footer}</Text>
      </div>

      {formState.status === 'failed' && formState?.message && (
        <Alert variant="error" className="max-w-screen-lg my-0 mx-auto">
          <Text variant="subtitle1">{formState?.message}</Text>
        </Alert>
      )}

      {formState.status === 'success' ? (
        <div className="flex justify-center p-6 items-center min-h-[60vh]">
          <Alert variant="success" className="max-w-screen-lg my-0 mx-auto">
            <Text variant="subtitle1">{formState?.message}</Text>
          </Alert>
        </div>
      ) : (
        <form
          noValidate
          className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 max-w-screen-lg my-0 mx-auto pb-8"
          onSubmit={e => {
            e.preventDefault();
            const target = e.currentTarget;
            if (target instanceof HTMLFormElement) {
              setIsLoading(true);
              fetch('/api/quote', {
                method: 'post',
                headers: { ContentType: 'multipart/form-data' },
                body: new FormData(target),
              })
                .then(r => r.json())
                .then(setFormState)
                .catch(e => {
                  console.error(e);
                  setFormState({
                    status: 'failed',
                    message: dict.quote.error,
                  });
                })
                .finally(() => setIsLoading(false));
            }
          }}
        >
          <input type="hidden" name="lang" value={lang} />
          <Input
            id="name"
            name="name"
            required
            label={dict.quote.name.label}
            placeholder="John Doe"
            error={formState?.errors?.name}
            containerClassname="col-span-2 md:col-span-1"
          />
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
          <Select
            name="insurance"
            required
            containerClassname="col-span-2 md:col-span-1"
            variant="outlined"
            buttonProps={{ size: 'md' }}
            label={dict.quote.insurance.label}
            placeholder={dict.quote.insurance.placeholder}
            error={formState?.errors?.insurance}
            options={coverages.data.map(({ id, attributes }) => ({
              key: String(id),
              label: attributes.title,
              value: String(id),
            }))}
          />
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            containerClassname="col-span-2"
            label={dict.quote.additionalInfo.label}
            error={formState?.errors?.additionalInfo}
          />
          <Checkbox
            name="acknowledgement"
            required
            containerClassname="col-span-2"
            label={dict.quote.acknowledgement.label}
            error={formState?.errors?.acknowledgement}
          />
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
            <SubmitButton dict={dict} pending={isLoading} />
          </div>
        </form>
      )}
    </Container>
  );
}
