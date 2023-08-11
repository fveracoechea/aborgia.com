import type { Schema, Attribute } from '@strapi/strapi';

export interface PageLInk extends Schema.Component {
  collectionName: 'components_page_l_inks';
  info: {
    displayName: 'LInk';
    icon: 'cursor';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'page.l-ink': PageLInk;
    }
  }
}
