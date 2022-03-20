import { Grid } from "@mui/material";
import {
  BannerEntity,
  Maybe,
  Page,
  PageContentDynamicZone,
} from "apollo/generated";
import Banner from "components/Banner";
import React, { FC } from "react";

type Props = {
  content: Page["content"];
};

const components = {
  Error: null,
  ComponentBannerBanner: Banner,
};

const validations = {
  Error: () => null,
  ComponentBannerBanner: (
    item: PageContentDynamicZone
  ): BannerEntity | null => {
    if (item.__typename === "ComponentBannerBanner" && item?.banner?.data) {
      return item.banner.data;
    }
    return null;
  },
};

const toComponent = (element: Maybe<PageContentDynamicZone>) => {
  if (element?.__typename) {
    const data = validations[element.__typename](element);
    const Component = components[element.__typename];
    if (data && Component) {
      const props = { data };
      const key = `${element.__typename}-${data.id}`;
      return <Component key={key} {...props} />;
    }
  }
  return null;
};

const PageContent: FC<Props> = ({ content }) => {
  if (!content) return null;

  return <Grid container>{content.map(toComponent)}</Grid>;
};

export default PageContent;
