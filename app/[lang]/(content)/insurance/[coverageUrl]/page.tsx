import Image from 'next/image';
import { redirect } from 'next/navigation';

import { fetchCoverageByLinkUrl, fetchCoverages, getImageSrc } from 'shared/api';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string; coverageUrl: string } };

export async function generateStaticParams({ params }: PageProps) {
  const coverages = await fetchCoverages(params.lang);
  return coverages.data.map(c => c.attributes.link.url.replace('/insurance', ''));
}

export default async function CoveragePage({ params }: PageProps) {
  const url = `/insurance/${params.coverageUrl}`;
  const coverage = await fetchCoverageByLinkUrl(params.lang, url);

  if (!coverage) redirect('/');

  const image = coverage.attributes.image.data;

  return (
    <article className="flex flex-col gap-8 text-transparentDark8">
      <header className="flex flex-col gap-8">
        <Text variant="h1">{coverage.attributes.title}</Text>
        <Text>{coverage.attributes.description}</Text>
        <Image
          aria-hidden="true"
          alt=""
          width={image.attributes.width}
          height={image.attributes.height}
          src={getImageSrc(image.attributes.url)}
        />
      </header>

      <div className="prose" dangerouslySetInnerHTML={{ __html: coverage.attributes.content }} />
    </article>
  );
}
