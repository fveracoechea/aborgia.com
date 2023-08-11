import React, { FC } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

import { Slider } from './Slider';

const Wrapper = styled(Box)`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 75vh;

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 50vh;
  }
`;

const images = ['/hero/1.jpg', '/hero/2.jpg', '/hero/4.jpg', '/hero/3.jpg'];

export function Hero() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Slider images={images}>
        <Typography variant="h2" fontWeight="400">
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" color="white">
          {t('hero.tagline')}
        </Typography>
      </Slider>
    </Wrapper>
  );
}
