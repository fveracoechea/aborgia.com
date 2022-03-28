"use strict";
const fetch = require("node-fetch");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 60 * 60 * 24 });

const toPascalCase = (str) =>
  str
    .split("_")
    .map((m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase())
    .join("");

module.exports = {
  async index(ctx) {
    const icons = cache.get("icons");
    if (!icons) {
      const response = await fetch("https://fonts.google.com/metadata/icons");
      const text = await response.text();
      const data = JSON.parse(text.replace(")]}'", ""));
      const result = data.icons.map(({ name: value, popularity }) => {
        const name = toPascalCase(value).replace(
          /(Outlined|TwoTone|Rounded|Sharp)$/,
          ""
        );

        return {
          name,
          value,
          popularity,
        };
      });
      cache.set("icons", result);
      ctx.body = result;
      console.log("controller => ", result);
      return;
    }
    console.log("controller => ", icons);
    ctx.body = icons;
  },
};
