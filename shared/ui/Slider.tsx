'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Button } from 'shared/ui/Button';
import { Stack } from 'shared/ui/Stack';

type Props = PropsWithChildren<{
  images: string[];
}>;

let timer: NodeJS.Timer | null = null;

export function Slider(props: Props) {
  const { images, children } = props;
  const [activeImg, setActiveImg] = useState(0);

  const setTimer = useCallback(() => {
    timer = setInterval(() => {
      setActiveImg(active => {
        if (active >= images.length - 1) {
          return 0;
        } else {
          return active + 1;
        }
      });
    }, 4000);
  }, [images.length]);

  const onBulletChange = (idx: number) => () => {
    if (timer) clearTimeout(timer);
    setActiveImg(idx);
    setTimer();
  };

  useEffect(() => {
    setTimer();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [setTimer]);

  return (
    <div className="text-white block w-full relative h-full">
      {images.map((src, idx) => (
        <Image
          className={clsx(
            'block absolute w-full left-0 top-0 h-full object-cover object-center',
            'transition-opacity duration-300 opacity-0',
            idx === activeImg && '!opacity-100',
          )}
          key={src}
          src={src}
          alt={`hero-image-${idx}`}
          fill
          sizes="100vw"
          priority={idx === 0}
        />
      ))}

      <div
        className={clsx(
          'flex justify-center items-center text-center gap-4 flex-col absolute',
          'left-0 top-0 w-full h-full bg-transparentDark6 p-6',
        )}
      >
        {children}
      </div>
      <div className="flex justify-center items-center absolute w-full left-0 bottom-4">
        <Stack direction="row" className="gap-4">
          {images.map((src, idx) => (
            <Button
              className="rounded-full !p-2"
              color="light"
              onClick={onBulletChange(idx)}
              key={src}
            >
              <FontAwesomeIcon
                fontSize="0.8rem"
                color="currentColor"
                icon={idx === activeImg ? faCircleSolid : faCircleRegular}
              />
            </Button>
          ))}
        </Stack>
      </div>
    </div>
  );
}
