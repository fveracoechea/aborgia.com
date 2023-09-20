import React from 'react';

import { fetchCoverages } from 'shared/api';
import { Dict } from 'shared/locales/en';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';
import { Container } from 'shared/ui/Container';
import { Input } from 'shared/ui/Input';
import { Label } from 'shared/ui/Label';
import { Select } from 'shared/ui/Select';
import { Text } from 'shared/ui/Text';
import { Textarea } from 'shared/ui/Textarea';

type Props = {
  dict: Dict;
  lang: string;
};

export async function RequestQuote(props: Props) {
  const { dict, lang } = props;
  const coverages = await fetchCoverages(lang);
  const a = [
    { key: 'quote', value: 'quote', label: 'quote' },
    { key: 'quote2', value: 'quote2', label: 'quote2' },
  ];
  return (
    <Container component="section">
      <Text variant="h3" component="h4" className="text-primary capitalize text-center">
        Quote Request
      </Text>

      <form
        className="grid grid-cols-2 gap-x-6 gap-y-4 pt-8 max-w-screen-lg my-0 mx-auto pb-8"
        noValidate
      >
        <Input id="name" required label={dict.quote.name.label} placeholder="John Doe" />
        <Input
          id="email"
          type="email"
          label={dict.quote.email.label}
          required
          placeholder="johndoe@gmail.com"
        />
        <Input
          id="phone"
          required
          type="tel"
          label={dict.quote.phone.label}
          placeholder="(xxx) xxx-xxxx"
        />
        <Select
          required
          variant="outlined"
          buttonProps={{ size: 'md' }}
          label={dict.quote.additionalInfo.label}
          placeholder={dict.quote.additionalInfo.placeholder}
          options={coverages.data.map(({ id, attributes }) => ({
            key: String(id),
            label: attributes.title,
            value: attributes.title,
          }))}
        />
        <Textarea containerClassname="col-span-2" id="add" label="Additional Information" />
        <div className="col-span-2 flex flex-col gap-4">
          <Checkbox
            name="acknowledgement"
            label="I acknowledge that by clicking submit,
            I am agreeing with the Terms and Privacy Notice."
          />

          <div className="flex justify-between">
            <div
              className="g-recaptcha"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
            <Button color="primary" variant="outlined" type="submit">
              Submit Request
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
