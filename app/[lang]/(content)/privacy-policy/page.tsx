import { fetchPolicies } from 'shared/api';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const { privacy } = await fetchPolicies(params.lang);

  return (
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: privacy.data.attributes.content }}
    />
  );
}
