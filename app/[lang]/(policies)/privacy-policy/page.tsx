import { fetchPolicies } from 'shared/api';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const { privacy } = await fetchPolicies(params.lang);

  return (
    <>
      <Text variant="h2">{privacy.data.attributes.title}</Text>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: privacy.data.attributes.content }}
      />
    </>
  );
}
