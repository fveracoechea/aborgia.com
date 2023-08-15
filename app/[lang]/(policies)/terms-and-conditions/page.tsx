import { fetchPolicies } from 'shared/api';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const { terms } = await fetchPolicies(params.lang);

  return (
    <>
      <Text variant="h2">{terms.data.attributes.title}</Text>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: terms.data.attributes.content }}
      />
    </>
  );
}
