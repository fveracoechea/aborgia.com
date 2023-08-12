import React from 'react';

import {
  faFaceLaugh,
  faHandshakeSimple,
  faPeopleArrows,
  faPeopleGroup,
  faScaleBalanced,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Dict } from 'shared/locales/en';
import { Container } from 'shared/ui/Container';
import { Text } from 'shared/ui/Text';

type Props = {
  dict: Dict;
};

export function Values(props: Props) {
  const { dict } = props;
  const values = [
    { id: 'v-1', text: dict.values[1], icon: faScaleBalanced },
    { id: 'v-2', text: dict.values[2], icon: faTrophy },
    { id: 'v-3', text: dict.values[3], icon: faHandshakeSimple },
    { id: 'v-4', text: dict.values[4], icon: faPeopleGroup },
    { id: 'v-5', text: dict.values[5], icon: faFaceLaugh },
    { id: 'v-6', text: dict.values[6], icon: faPeopleArrows },
  ];

  return (
    <Container
      component="section"
      className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-8 text-greyDark"
    >
      <>
        {values.map(item => (
          <div
            className="flex flex-col gap-2 text-center justify-center items-center w-full lg:w-auto"
            key={item.id}
          >
            <FontAwesomeIcon fontSize="2.4rem" color="currentColor" icon={item.icon} />
            <Text variant="subtitle1" className="text-dark">
              {item.text}
            </Text>
          </div>
        ))}
      </>
    </Container>
  );
}
