import { useEffect, useState, useMemo } from "react";
import { Hero as StrapiHero } from "apollo/generated";

export const useImageAnimation = (hero: StrapiHero | null) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [animation, setAnimation] = useState("active");
  const images = useMemo(() => hero?.images?.data || [], [hero]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("inactive");
      setTimeout(() => {
        setAnimation("active");
        if (currentImgIndex === images.length - 1) {
          setCurrentImgIndex(0);
        } else {
          setCurrentImgIndex(currentImgIndex + 1);
        }
      }, 300);
    }, 6000);

    return () => clearTimeout(interval);
  }, [images, currentImgIndex]);

  return {
    image: images[currentImgIndex]?.attributes
      ? {
          ...images[currentImgIndex].attributes,
          url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${images[currentImgIndex].attributes?.url}`,
        }
      : null,
    animation,
  };
};
