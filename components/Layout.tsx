/* eslint-disable @next/next/no-img-element */
import React, { PropsWithChildren, ReactNode } from "react";
import { Container, Box, styled, Stack } from "@mui/material";
import Header from "./Header";

import { Footer } from "components/Footer";

const Background = styled(Box)`
  background-image: url("/patterns/colorful.png");
  background-repeat: repeat;
`;

const Overlay = styled(Box)`
  background-color: rgba(255, 255, 255, 0.6);
  min-height: 100vh;
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;

type Props = PropsWithChildren<{
  hero?: ReactNode;
}>;

export function Layout(props: Props) {
  const { children, hero = null } = props;

  return (
    <>
      <Header />
      <Background>
        <Overlay>
          {hero}
          <Container maxWidth="lg">
            <Stack spacing={12} component="main">
              {children}
            </Stack>
          </Container>
        </Overlay>
      </Background>
      <Footer />
    </>
  );
}
