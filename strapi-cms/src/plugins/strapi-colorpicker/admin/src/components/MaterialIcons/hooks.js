import { useState, useEffect } from "react";
import { request } from "@strapi/helper-plugin";
import synonyms from "./synonyms";

const fetchIconData = async (searchIndex) => {
  const data = await request("/strapi-colorpicker/icons");
  data
    .sort((a, b) => {
      return (a.popularity - b.popularity) * -1;
    })
    .forEach((icon) => {
      const searchable = synonyms[icon.name]
        ? `${icon.name} ${synonyms[icon.name]}`
        : icon.name;
      searchIndex.addAsync(icon.name, searchable);
    });
  return data;
};

export const useMaterialIcons = (searchIndex) => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchIconData(searchIndex).then(setIcons);
  }, []);

  return icons;
};
