'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import { StrapiLocale } from 'shared/schema';
import { ButtonProps } from 'shared/ui/Button';
import { Select } from 'shared/ui/Select';

type Props = {
  locales: StrapiLocale[];
  currentLocale: StrapiLocale;
  buttonProps?: ButtonProps;
  showIcon?: boolean;
};

export function LanguageSelector(props: Props) {
  const { locales, currentLocale, buttonProps = {}, showIcon = true } = props;
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <Select
      onValueChange={value =>
        router.push(pathname.replace(String(params.lang), value), { scroll: false })
      }
      icon={showIcon ? faEarthAmericas : undefined}
      label={showIcon ? '' : 'Lang:'}
      defaultValue={currentLocale.code}
      buttonProps={{ size: 'sm', color: 'light', variant: 'text', ...buttonProps }}
      options={locales.map(l => ({ key: String(l.id), label: l.name, value: l.code }))}
    />
  );
}
