import { useEffect, useState } from "react";

const images = ["/hero/1.jpg", "/hero/2.jpg", "/hero/4.jpg", "/hero/3.jpg"];

export const useImageAnimation = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [animation, setAnimation] = useState("active");

  useEffect(() => {
    images.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

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
  }, [currentImgIndex]);

  return {
    image: images[currentImgIndex] ? images[currentImgIndex] : null,
    animation,
  };
};
