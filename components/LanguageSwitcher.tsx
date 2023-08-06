import { useRef, useState } from 'react';

import Translate from '@mui/icons-material/Translate';
import { Button, Menu, MenuItem, Tooltip } from '@mui/material';
import { LanguageSwitcher, useLanguageQuery, useTranslation } from 'next-export-i18n';

export function LanguageSelector() {
  const [lang, setLang] = useState(false);
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const langRef = useRef(null);
  return (
    <>
      <Tooltip arrow title={t('header.lang')}>
        <Button
          color="inherit"
          ref={langRef}
          onClick={() => setLang(true)}
          startIcon={<Translate />}
        >
          {query?.lang}
        </Button>
      </Tooltip>
      <Menu anchorEl={langRef.current} open={lang} onClose={() => setLang(false)}>
        <MenuItem onClick={() => setLang(false)}>
          <LanguageSwitcher lang="es">Español</LanguageSwitcher>
        </MenuItem>
        <MenuItem onClick={() => setLang(false)}>
          <LanguageSwitcher lang="en">English</LanguageSwitcher>
        </MenuItem>
        <MenuItem onClick={() => setLang(false)}>
          <LanguageSwitcher lang="pt">Português</LanguageSwitcher>
        </MenuItem>
      </Menu>
    </>
  );
}
