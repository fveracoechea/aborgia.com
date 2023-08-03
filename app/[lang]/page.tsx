import { Link } from "design/Link";
import { Stack } from "design/Stack";
import { Text } from "design/Text";
import { getDictionary } from "./dictionaries";

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);
  return (
    <Stack gap="16" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        nesciunt deserunt laborum rem, doloremque repellat hic enim suscipit,
        recusandae sint laudantium aliquam molestias ab earum nostrum voluptatem
        expedita fuga. Beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Impedit nesciunt deserunt laborum rem, doloremque
        repellat hic enim suscipit, recusandae sint laudantium aliquam molestias
        ab earum nostrum voluptatem expedita fuga. Beatae.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        nesciunt deserunt laborum rem, doloremque repellat hic enim suscipit,
        recusandae sint laudantium aliquam molestias ab earum nostrum voluptatem
        expedita fuga. Beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Impedit nesciunt deserunt laborum rem, doloremque
        repellat hic enim suscipit, recusandae sint laudantium aliquam molestias
        ab earum nostrum voluptatem expedita fuga. Beatae.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        nesciunt deserunt laborum rem, doloremque repellat hic enim suscipit,
        recusandae sint laudantium aliquam molestias ab earum nostrum voluptatem
        expedita fuga. Beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Impedit nesciunt deserunt laborum rem, doloremque
        repellat hic enim suscipit, recusandae sint laudantium aliquam molestias
        ab earum nostrum voluptatem expedita fuga. Beatae.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        nesciunt deserunt laborum rem, doloremque repellat hic enim suscipit,
        recusandae sint laudantium aliquam molestias ab earum nostrum voluptatem
        expedita fuga. Beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Impedit nesciunt deserunt laborum rem, doloremque
        repellat hic enim suscipit, recusandae sint laudantium aliquam molestias
        ab earum nostrum voluptatem expedita fuga. Beatae.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        nesciunt deserunt laborum rem, doloremque repellat hic enim suscipit,
        recusandae sint laudantium aliquam molestias ab earum nostrum voluptatem
        expedita fuga. Beatae. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Impedit nesciunt deserunt laborum rem, doloremque
        repellat hic enim suscipit, recusandae sint laudantium aliquam molestias
        ab earum nostrum voluptatem expedita fuga. Beatae.
      </Text>
    </Stack>
  );
}
