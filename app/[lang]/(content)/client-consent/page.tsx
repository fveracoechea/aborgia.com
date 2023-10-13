import { getDictionary } from 'shared/dictionaries';
import { Checkbox } from 'shared/ui/Checkbox';
import { Input } from 'shared/ui/Input';
import { PhoneInput } from 'shared/ui/PhoneInput';
import { Text } from 'shared/ui/Text';

import { Form } from './_Form';

type PageProps = { params: { lang: string } };

export default async function ConsentPage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);
  return (
    <div className="flex flex-col gap-8 text-transparentDark8">
      <div>
        <Text component="h2" variant="h3">
          Client Consent Form
        </Text>
        <Text variant="h5">CMS Marketplace Agents and Brokers</Text>
      </div>
      <Form dict={dict} lang={params.lang} />
      <div className="pb-12">
        <Text variant="body2">
          <b>PRA DISCLOSURE:</b> According to the Paperwork Reduction Act of 1995, no persons are
          required to respond to a collection of information unless it displays a valid OMB control
          number. The valid OMB control number for this information collection is 0938-XXXX,
          expiration date is XX/XX/20XX. The time required to complete this information collection
          is estimated to take up to 0.08 hours per applicant per year, including the time to review
          instructions, gather the information needed, and complete and review the information
          collection. If you have comments concerning the accuracy of the time estimate(s) or
          suggestions for improving this form, please write to: CMS, 7500 Security Boulevard, Attn:
          PRA Reports Clearance Officer, Mail Stop C4-26-05, Baltimore, Maryland 21244-1850. ****CMS
          Disclosure**** Please do not send applications, claims, payments, medical records or any
          documents containing sensitive information to the PRA Reports Clearance Office. Please
          note that any correspondence not pertaining to the information collection burden approved
          under the associated OMB control number listed on this form will not be reviewed,
          forwarded, or retained. If you have questions or concerns regarding where to submit your
          documents, please contact Brian Gubin at Brian.Gubin@cms.hhs.gov.
        </Text>
      </div>
    </div>
  );
}
