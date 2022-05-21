import { ComponentBannerImages } from "apollo/generated";

export const getBannerImages = (images?: ComponentBannerImages) => {
  if (!images) return null;
  return {
    xs: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${images?.mobile?.data?.attributes?.url})`,
    sm: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${images?.mobile?.data?.attributes?.url})`,
    md: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${images?.desktop?.data?.attributes?.url})`,
  };
};

export const getStrapiImage = (url: string) => `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
