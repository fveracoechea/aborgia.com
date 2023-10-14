import { getDictionary } from 'shared/dictionaries';
import { Text } from 'shared/ui/Text';

import { Form } from './_Form';

type PageProps = { params: { lang: string } };

export default async function ConsentPage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);
  return (
    <Form
      dict={dict}
      lang={params.lang}
      heading={
        <div>
          <Text component="h2" variant="h3">
            Arelys Borgia - Client Consent Form
          </Text>
          <Text variant="h5">CMS Marketplace Agents and Brokers</Text>
        </div>
      }
      content={
        <>
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
            (PII) for any purposes other than those listed above. The Agent will ensure that my PII
            is kept private and safe when collecting, storing, and using my PII for the stated
            purposes above.
          </Text>

          <Text variant="subtitle1" component="p">
            I confirm that the information I provide for entry on my Marketplace eligibility and
            enrollment application will be true to the best of my knowledge. I understand that I do
            not have to share additional personal information about myself or my health with my
            Agent beyond what is required on the application for eligibility and enrollment
            purposes. I understand that my consent remains in effect until I revoke it, and I may
            revoke or modify my consent at any time by sending an email to
            <b> aborgiainsurance@gmail.com</b> specifying my request.
          </Text>
        </>
      }
      disclosure={
        <div className="pb-12">
          <Text variant="body2">
            <b>PRA DISCLOSURE:</b> According to the Paperwork Reduction Act of 1995, no persons are
            required to respond to a collection of information unless it displays a valid OMB
            control number. The valid OMB control number for this information collection is
            0938-XXXX, expiration date is XX/XX/20XX. The time required to complete this information
            collection is estimated to take up to 0.08 hours per applicant per year, including the
            time to review instructions, gather the information needed, and complete and review the
            information collection. If you have comments concerning the accuracy of the time
            estimate(s) or suggestions for improving this form, please write to: CMS, 7500 Security
            Boulevard, Attn: PRA Reports Clearance Officer, Mail Stop C4-26-05, Baltimore, Maryland
            21244-1850. ****CMS Disclosure**** Please do not send applications, claims, payments,
            medical records or any documents containing sensitive information to the PRA Reports
            Clearance Office. Please note that any correspondence not pertaining to the information
            collection burden approved under the associated OMB control number listed on this form
            will not be reviewed, forwarded, or retained. If you have questions or concerns
            regarding where to submit your documents, please contact Brian Gubin at
            Brian.Gubin@cms.hhs.gov.
          </Text>
        </div>
      }
    />
  );
}
