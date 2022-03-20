import { FC } from "react";
import { BannerEntity } from "apollo/generated";

type Props = {
  data: BannerEntity;
};

const Banner: FC<Props> = ({ data }) => {
  console.log(data);
  return null;
};

export default Banner;
