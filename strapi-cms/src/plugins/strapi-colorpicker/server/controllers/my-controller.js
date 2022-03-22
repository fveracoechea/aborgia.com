'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-colorpicker')
      .service('myService')
      .getWelcomeMessage();
  },
};
