import type { Attribute, Schema } from '@strapi/strapi';

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'Button';
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
      'page.button': PageButton;
    }
  }
}
