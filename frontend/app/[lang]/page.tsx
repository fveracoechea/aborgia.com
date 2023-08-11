import { getDictionary } from 'shared/dictionaries';
import { Container } from 'shared/ui/Container';
import { Text } from 'shared/ui/Text';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);

  return (
    <Container className="flex flex-col gap-4">
      <Text variant="h1">Lorem ipsum dolor sit.</Text>
      <Text>
        Amet consectetur adipisicing elit. Atque illum optio quis fugit laboriosam adipisci eos
        fugiat esse, veritatis quibusdam aperiam modi, veniam ducimus debitis commodi numquam cumque
        necessitatibus minima ipsa animi ipsam quae. Earum totam repudiandae illo dignissimos, neque
        eius dolor blanditiis illum recusandae nobis necessitatibus delectus ratione sint soluta
        distinctio iste officia quo sed! Aliquam architecto et dolor quia eaque in reiciendis
        dolore, assumenda id tenetur unde sed similique corrupti omnis pariatur minima doloremque
        maxime ipsa temporibus asperiores ut? Nulla, recusandae? Perspiciatis rerum perferendis,
        dolorem provident, ut tempora ratione sequi deserunt laudantium quos doloremque id hic ipsum
        voluptatem adipisci consequatur. Asperiores veritatis numquam magnam similique tenetur nihil
        at exercitationem dignissimos? Possimus ipsum aliquam quasi voluptatum, quidem nostrum
        cupiditate dolorum veniam placeat facere maiores incidunt vel iusto maxime,
        <b className="text-primary"> nisi quia officiis!</b> Earum autem iure aut quo molestiae,
        quia recusandae esse corporis reprehenderit ad quaerat voluptate ullam nihil rerum fuga
        natus perferendis similique provident libero consequuntur sint sequi officia ipsa aperiam.
        Neque qui assumenda quod commodi molestiae nulla velit quidem quos nobis numquam, unde magni
        totam veniam quasi aliquid deleniti iusto quas itaque? Illo dolore commodi, eveniet
        consequuntur repudiandae praesentium repellendus sunt iste, architecto labore ea pariatur
        nobis non ut!
      </Text>
      <Text>
        Amet consectetur adipisicing elit. Atque illum optio quis fugit laboriosam adipisci eos
        fugiat esse, veritatis quibusdam aperiam modi, veniam ducimus debitis commodi numquam cumque
        necessitatibus minima ipsa animi ipsam quae. Earum totam repudiandae illo dignissimos, neque
        eius dolor blanditiis illum recusandae nobis necessitatibus delectus ratione sint soluta
        distinctio iste officia quo sed! Aliquam architecto et dolor quia eaque in reiciendis
        dolore, assumenda id tenetur unde sed similique corrupti omnis pariatur minima doloremque
        maxime ipsa temporibus asperiores ut? Nulla, recusandae? Perspiciatis rerum perferendis,
        dolorem provident, ut tempora ratione sequi deserunt laudantium quos doloremque id hic ipsum
        voluptatem adipisci consequatur. Asperiores veritatis numquam magnam similique tenetur nihil
        at exercitationem dignissimos? Possimus ipsum aliquam quasi voluptatum, quidem nostrum
        cupiditate dolorum veniam placeat facere maiores incidunt vel iusto maxime,
        <b className="text-primary"> nisi quia officiis!</b> Earum autem iure aut quo molestiae,
        quia recusandae esse corporis reprehenderit ad quaerat voluptate ullam nihil rerum fuga
        natus perferendis similique provident libero consequuntur sint sequi officia ipsa aperiam.
        Neque qui assumenda quod commodi molestiae nulla velit quidem quos nobis numquam, unde magni
        totam veniam quasi aliquid deleniti iusto quas itaque? Illo dolore commodi, eveniet
        consequuntur repudiandae praesentium repellendus sunt iste, architecto labore ea pariatur
        nobis non ut!
      </Text>
    </Container>
  );
}
