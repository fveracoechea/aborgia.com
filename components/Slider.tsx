import { Box, Radio, Stack, styled } from "@mui/material";
import {
  ChangeEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

const Image = styled("img")`
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 500ms;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

const Content = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  padding: ${({ theme }) => theme.spacing(4)};

  h2,
  h4 {
    color: white;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

const Wrapper = styled(Box)`
  display: block;
  width: 100%;
  position: relative;
  height: 100%;
`;

const Bullets = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: ${({ theme }) => theme.spacing(2)};
`;

type Props = PropsWithChildren<{
  images: string[];
}>;

let timer: NodeJS.Timer | null = null;

export function Slider(props: Props) {
  const { images, children } = props;
  const [activeImg, setActiveImg] = useState(0);

  const setTimer = useCallback(() => {
    timer = setInterval(() => {
      setActiveImg((active) => {
        if (active >= images.length - 1) {
          return 0;
        } else {
          return active + 1;
        }
      });
    }, 4000);
  }, [images.length]);

  const onBulletChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (timer) clearTimeout(timer);
      setActiveImg(Number(event.target.value));
      setTimer();
    },
    [setTimer]
  );

  useEffect(() => {
    setTimer();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [setTimer]);

  return (
    <Wrapper>
      {images.map((src, idx) => (
        <Image
          className={idx === activeImg ? "active" : ""}
          key={src}
          src={src}
          alt={`hero-image-${idx}`}
        />
      ))}
      <Content>{children}</Content>
      <Bullets>
        <Stack direction="row" spacing={2}>
          {images.map((src, idx) => (
            <Radio
              key={src}
              value={idx}
              name="slider-bullets"
              sx={{ svg: { color: "white" } }}
              disableRipple
              checked={idx === activeImg}
              onChange={onBulletChange}
            />
          ))}
        </Stack>
      </Bullets>
    </Wrapper>
  );
}
