import clsx from 'clsx';

import { fetchCoverages, fetchPolicies } from 'shared/api';
import { Text } from 'shared/ui/Text';

import { SideMenuLink } from './SideMenuLink';

type Props = {
  params: { lang: string; coverageUrl: string };
};

export async function SideMenu(props: Props) {
  const {
    params: { lang },
  } = props;

  const [{ privacy, terms }, coverages] = await Promise.all([
    fetchPolicies(lang),
    fetchCoverages(lang),
  ]);

  const navHeight = 118;
  const padding = 32;

  const titleStyles = clsx('font-bold !text-greyDark pt-4 pb-2 pointer-events-none');
  const asideStyles = clsx(
    'sticky top-1 text-transparentDark8 overflow-y-auto',
    `max-h-[calc(100vh-${navHeight + padding}px)]`,
  );

  return (
    <div className="hidden lg:block">
      <aside className={asideStyles}>
        <Text className={titleStyles}>INSURANCE</Text>
        <ul className="list-none">
          {coverages.data.map(({ id, attributes }) => (
            <li key={id} className="flex">
              <SideMenuLink href={`/${lang}${attributes.link.url}`} text={attributes.link.text} />
            </li>
          ))}
        </ul>

        <Text className={titleStyles}>POLICIES</Text>
        <ul className="list-none">
          <li className="flex">
            <SideMenuLink
              href={`/${lang}${privacy.data.attributes.link.url}`}
              text={privacy.data.attributes.link.text}
            />
          </li>
          <li className="flex">
            <SideMenuLink
              href={`/${lang}${terms.data.attributes.link.url}`}
              text={terms.data.attributes.link.text}
            />
          </li>
        </ul>
      </aside>
    </div>
  );
}
