import { PropsWithChildren } from 'react';

import { Container } from 'shared/ui/Container';

type LayoutProps = PropsWithChildren<{ params: { lang: string } }>;

const aside = (
  <aside className="flex-1 sticky top-[118px]">
    <ul>
      <li>test</li>
      <li>rwsdsa</li>
      <li>sadasd</li>
      <li>test</li>
      <li>rwsdsa</li>
      <li>sadasd</li>
      <li>test</li>
      <li>rwsdsa</li>
      <li>sadasd</li>
      <li>test</li>
      <li>rwsdsa</li>
      <li>sadasd</li>
    </ul>
  </aside>
);

export default async function PoliciesLayout(props: LayoutProps) {
  const { params, children } = props;
  return (
    <Container className="flex gap-4 relative">
      {aside}
      <div className="flex-[3]">{children}</div>
      {aside}
    </Container>
  );
}
