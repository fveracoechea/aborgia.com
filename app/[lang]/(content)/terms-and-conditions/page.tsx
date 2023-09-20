import { fetchPolicies } from 'shared/api';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const { terms } = await fetchPolicies(params.lang);

  return (
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: terms.data.attributes.content }}
    />
  );
}
