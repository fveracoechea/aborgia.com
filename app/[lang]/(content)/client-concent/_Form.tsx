'use client';

import {
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from 'react-dom';

import { ConcentRequestResponse, sendClientConcent } from 'shared/actions/sentClientConcent';
import { Dict } from 'shared/dictionaries';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';
import { Input } from 'shared/ui/Input';
import { PhoneInput } from 'shared/ui/PhoneInput';
import { Text } from 'shared/ui/Text';

type Props = {
  dict: Dict;
  lang: string;
};

const intialState: Awaited<ConcentRequestResponse> = {
  message: null,
  status: 'initial',
};

export function Form(props: Props) {
  const { dict, lang } = props;
  const requestQuoteWithLang = sendClientConcent.bind(null, lang);
  const [{ message, errors, status }, formAction] = useFormState(requestQuoteWithLang, intialState);
  return (
    <form className="flex flex-col gap-4 text-lg" noValidate action={formAction}>
      <Text variant="subtitle1" component="p">
        {errors?.fullName && <Text className="!text-error text-base mr-2">{errors.fullName}</Text>}
        <label htmlFor="fullname">I, </label>
        &nbsp;
        <Input
          name="fullname"
          id="fullname"
          placeholder={dict.quote.fullname.label}
          className="text-sm !py-1 !px-2 w-56"
          error={errors?.fullName}
        />
        &nbsp; give my permission to <b className="text-primary">Arelys Borgia</b> to serve as the
        health insurance agent or broker for myself and my entire household if applicable, for
        purposes of enrollment in a Qualified Health Plan offered on the Federally Facilitated
        Marketplace. By consenting to this agreement, I authorize the above-mentioned Agent to view
        and use the confidential information provided by me in writing, electronically, or by
        telephone only for the purposes of one or more of the following:
      </Text>

      <ol className="list-decimal ml-8">
        <Text variant="subtitle1" component="li">
          Searching for an existing Marketplace application;
        </Text>
        <Text variant="subtitle1" component="li">
          Completing an application for eligibility and enrollment in a Marketplace Qualified Health
          Plan or other government insurance affordability programs, such as Medicaid and CHIP or
          advance tax credits to help pay for Marketplace premiums;
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
        enrollment application will be true to the best of my knowledge. I understand that I do not
        have to share additional personal information about myself or my health with my Agent beyond
        what is required on the application for eligibility and enrollment purposes. I understand
        that my consent remains in effect until I revoke it, and I may revoke or modify my consent
        at any time by sending an email to
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
        </div>
        <Button
          className="col-span-2 justify-center uppercase"
          color="primary"
          variant="contained"
          type="submit"
          size="lg"
        >
          Submit Concent
        </Button>
      </div>
    </form>
  );
}
