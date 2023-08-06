import React from 'react';

import { Box, Stack, Theme, Typography, styled, useMediaQuery } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const Image = styled('img')`
  width: 100%;
  max-width: 350px;
  height: auto;
  display: block;
  border-radius: 50%;
  border: solid 5px ${p => p.theme.palette.secondary.main};
`;

export function AboutMe() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <Stack
      spacing={4}
      paddingTop={8}
      direction={isMobile ? 'column' : 'row'}
      sx={{ scrollMarginTop: 16 }}
      id="about-me"
    >
      <Box flex="2" display="flex" justifyContent="center" alignItems="center">
        <Image src="/profile.jpg" alt="Arelys Borgia" width={350} height={350} />
      </Box>
      <Stack spacing={4} flex="4" textAlign={isMobile ? 'center' : 'justify'}>
        <Typography variant="h3">{t('siteName')}</Typography>
        <Typography variant="body1" lineHeight="1.8rem">
          {t('aboutMe.p1')}
        </Typography>
        <Typography variant="body1" lineHeight="1.8rem">
          {t('aboutMe.p2')}
        </Typography>
        <Typography variant="body1" lineHeight="1.8rem" fontWeight="medium">
          {t('aboutMe.p3')}
        </Typography>
      </Stack>
    </Stack>
  );
}
