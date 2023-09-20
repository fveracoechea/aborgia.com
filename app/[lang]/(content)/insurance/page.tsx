import Image from 'next/image';
import { redirect } from 'next/navigation';

import { SideMenuLink } from 'components/SideMenuLink';

import { fetchCoverages, fetchInsurance } from 'shared/api';
import { getDictionary } from 'shared/dictionaries';
import { ButtonLink } from 'shared/ui/Button';
import { Link } from 'shared/ui/Link';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string } };

export async function generateStaticParams({ params }: PageProps) {
  const coverages = await fetchCoverages(params.lang);
  return coverages.data.map(c => c.attributes.link.url.replace('/insurance', ''));
}

export default async function CoveragePage({ params }: PageProps) {
  const [dict, insurance, coverages] = await Promise.all([
    await getDictionary(params.lang),
    fetchInsurance(params.lang),
    fetchCoverages(params.lang),
  ]);

  return (
    <article className="flex flex-col gap-8 text-transparentDark8 pb-12">
      <Text variant="h3" component="h1" className="lg:text-5xl">
        {dict.coverages.title}
      </Text>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: insurance.data.attributes.content }}
      />

      <ul className="list-disc pl-6 marker:text-primaryDark flex flex-col gap-4">
        {coverages.data.map(({ id, attributes }) => (
          <li key={id} className="pl-2">
            <Link underline="always" className="focus:text-primaryDark" href={attributes.link.url}>
              {attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
