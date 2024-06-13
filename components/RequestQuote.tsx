'use client';

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from 'react-dom';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { QuoteRequestResponse, createQuoteRequest } from 'shared/actions';
import { Dict } from 'shared/locales/en';
import { CoverageList } from 'shared/schema';
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

function SubmitButton({ dict }: { dict: Dict }) {
  const { pending } = useFormStatus();
  return (
    <Button
      size="lg"
      color="primary"
      variant="outlined"
      type={pending ? 'button' : 'submit'}
      className="min-w-[200px] w-full justify-center md:w-auto md:self-start"
    >
      {pending ? (
        <>
          <FontAwesomeIcon className="animate-spin" fontSize="1.2rem" icon={faSpinner} />
          Loading
        </>
      ) : (
        dict.quote.submit
      )}
    </Button>
  );
}

export function RequestQuote(props: Props) {
  const { dict, coverages, lang } = props;

  const requestQuoteWithLang = createQuoteRequest.bind(null, lang);
  const [{ message, errors, status }, formAction] = useFormState(requestQuoteWithLang, intialState);

  return (
    <Container component="section">
      <div className="text-center flex flex-col justify-center items-center">
        <Text variant="h3" component="h4" className="text-primary capitalize">
          {dict.header.quote}
        </Text>
        <Text>{dict.footer}</Text>

        {status === 'failed' && (
          <Text variant="subtitle1" className="!text-error max-w-3xl">
            {message}
          </Text>
        )}
      </div>

      {status === 'success' ? (
        <div className="flex justify-center p-6 items-center min-h-[60vh]">
          <Text variant="h4" className="text-success text-center max-w-3xl">
            {message}
          </Text>
        </div>
      ) : (
        <form
          noValidate
          action={formAction}
          className="grid grid-cols-2 gap-x-6 gap-y-4 pt-8 max-w-screen-lg my-0 mx-auto pb-8"
        >
          <Input
            id="name"
            name="name"
            required
            label={dict.quote.name.label}
            placeholder="John Doe"
            error={errors?.name}
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
          <Select
            name="insurance"
            required
            containerClassname="col-span-2 md:col-span-1"
            variant="outlined"
            buttonProps={{ size: 'md' }}
            label={dict.quote.insurance.label}
            placeholder={dict.quote.insurance.placeholder}
            error={errors?.insurance}
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
            error={errors?.additionalInfo}
          />
          <Checkbox
            name="acknowledgement"
            required
            containerClassname="col-span-2"
            label={dict.quote.acknowledgement.label}
            error={errors?.acknowledgement}
          />
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

            <SubmitButton dict={dict} />
          </div>
        </form>
      )}
    </Container>
  );
}
