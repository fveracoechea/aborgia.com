import Image from 'next/image';

import Img1 from 'shared/assets/coverages/1.jpeg';
import Img2 from 'shared/assets/coverages/2.jpeg';
import Img4 from 'shared/assets/coverages/4.jpeg';
import Img3 from 'shared/assets/coverages/5.jpg';
import { Dict } from 'shared/locales/en';
import { Text } from 'shared/ui/Text';

export function Insurance({ dict }: { dict: Dict }) {
  const coverages = [
    {
      id: 'c-1',
      image: Img1,
      name: dict.coverages[1].name,
      description: dict.coverages[1].description,
    },
    {
      id: 'c-2',
      image: Img2,
      name: dict.coverages[2].name,
      description: dict.coverages[2].description,
    },
    {
      id: 'c-3',
      image: Img3,
      name: dict.coverages[3].name,
      description: dict.coverages[3].description,
    },
    {
      id: 'c-4',
      image: Img4,
      name: dict.coverages[4].name,
      description: dict.coverages[4].description,
    },
  ];

  return (
    <section className="w-full text-center flex flex-col gap-12">
      <Text variant="h3" className="text-primaryDark capitalize font-semibold">
        {dict.coverages.title}
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {coverages.map(({ id, name, image, description }) => (
          <figure
            key={id}
            className="aspect-video md:aspect-[3/2] relative flex justify-center items-center"
          >
            <Image className="object-cover" alt={description} src={image} fill />
            <figcaption className="absolute inset-0 flex items-center justify-center p-8 bg-transparentLight5 text-primaryDark">
              <Text component="span" variant="h5" className="font-semibold uppercase xl:text-2xl">
                {name}
              </Text>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
