'use client';

import { useRouter } from 'next/navigation';

import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import { StrapiLocale } from 'shared/schema';
import { Select } from 'shared/ui/Select';

type Props = {
  locales: StrapiLocale[];
  currentLocale: StrapiLocale;
};

export function LanguageSelector(props: Props) {
  const { locales, currentLocale } = props;
  const router = useRouter();
  return (
    <Select
      onValueChange={value => router.push(`/${value}`, { scroll: false })}
      icon={faEarthAmericas}
      defaultValue={currentLocale.code}
      buttonProps={{ size: 'sm', color: 'light', variant: 'text' }}
      options={locales.map(l => ({ key: String(l.id), label: l.name, value: l.code }))}
    />
  );
}
