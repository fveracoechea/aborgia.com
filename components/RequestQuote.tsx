'use client';

import { useMemo } from 'react';

import { z } from 'zod';

import { createQuoteRequest } from 'shared/actions';
import { useFormValidation } from 'shared/hooks/useFormValidation';
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

type Props = {
  dict: Dict;
  lang: string;
  coverages: CoverageList;
};

export function RequestQuote(props: Props) {
  const { dict, coverages } = props;

  const RequestFormSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, dict.quote.name.required),
        email: z.string().email(dict.quote.email.invalid),
        phone: z.string().regex(/^\(\d{3}\)\s\d{3}-\d{4}/, dict.quote.phone.invalid),
        insurance: z.string().refine(val => coverages.data.some(c => c.attributes.title === val), {
          message: dict.quote.insurance.required,
        }),
        acknowledgement: z.coerce.boolean().refine(val => val, {
          message: dict.quote.acknowledgement.required,
        }),
        ['g-recaptcha-response']: z.coerce.boolean().refine(val => val, {
          message: dict.quote.recaptcha.required,
        }),
      }),
    [dict, coverages],
  );

  const { formProps, errors } = useFormValidation(RequestFormSchema, (values, event) => {
    event.preventDefault();
    createQuoteRequest(values);
  });

  return (
    <Container component="section">
      <Text variant="h3" component="h4" className="text-primary capitalize text-center">
        Quote Request
      </Text>

      <form
        className="grid grid-cols-2 gap-x-6 gap-y-4 pt-8 max-w-screen-lg my-0 mx-auto pb-8"
        {...formProps}
      >
        <Input
          id="name"
          name="name"
          required
          label={dict.quote.name.label}
          placeholder="John Doe"
          error={errors.name}
        />
        <Input
          id="email"
          type="email"
          name="email"
          label={dict.quote.email.label}
          required
          placeholder="johndoe@gmail.com"
          error={errors.email}
        />
        <PhoneInput
          id="phone"
          name="phone"
          required
          label={dict.quote.phone.label}
          placeholder="(xxx) xxx-xxxx"
          error={errors.phone}
        />
        <Select
          name="insurance"
          required
          variant="outlined"
          buttonProps={{ size: 'md' }}
          label={dict.quote.insurance.label}
          placeholder={dict.quote.insurance.placeholder}
          error={errors.insurance}
          options={coverages.data.map(({ id, attributes }) => ({
            key: String(id),
            label: attributes.title,
            value: attributes.title,
          }))}
        />
        <Textarea
          id="additionalInfo"
          name="additionalInfo"
          containerClassname="col-span-2"
          label={dict.quote.additionalInfo.label}
        />
        <div className="col-span-2 flex flex-col gap-4">
          <Checkbox
            name="acknowledgement"
            label={dict.quote.acknowledgement.label}
            error={errors.acknowledgement}
          />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <div
                className="g-recaptcha"
                data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />
              {errors['g-recaptcha-response'] && (
                <Text className="!text-error text-sm">{errors['g-recaptcha-response']}</Text>
              )}
            </div>
            <Button
              size="lg"
              color="primary"
              variant="outlined"
              type="submit"
              className="self-start"
            >
              Submit Request
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
