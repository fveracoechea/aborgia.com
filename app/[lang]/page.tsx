import { Link } from "design/Link";
import { Stack } from "design/Stack";
import { Text } from "design/Text";
import { getDictionary } from "./dictionaries";

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);
  return (
    <Stack>
      <Text variant="h2">{dict.header.services}</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
        voluptates laudantium ipsa natus hic tenetur omnis voluptatibus ipsum
        accusantium quam quae quis perferendis explicabo suscipit eos dicta, sed
        consequatur tempore.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
        voluptates laudantium ipsa natus hic tenetur omnis voluptatibus ipsum
        accusantium quam quae quis perferendis explicabo suscipit eos dicta, sed
        consequatur tempore.
      </Text>
      <Link color="primary" underline="hover" href="/">
        Text link
      </Link>
    </Stack>
  );
}
