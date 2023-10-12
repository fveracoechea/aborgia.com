import { PropsWithChildren } from 'react';

import { SideMenu } from 'components/SideMenu';

import { Container } from 'shared/ui/Container';

type LayoutProps = PropsWithChildren<{ params: { lang: string; coverageUrl: string } }>;

export default async function PoliciesLayout(props: LayoutProps) {
  const { params, children } = props;
  return (
    <Container className="flex gap-12 relative">
      <SideMenu params={params} />
      <div className="hidden lg:block w-[1px] border-grey border-r" />
      <div className="flex-1 pt-4">{children}</div>
    </Container>
  );
}
