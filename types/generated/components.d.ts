import type { Schema, Struct } from '@strapi/strapi';

export interface CommonYearsOfExperience extends Struct.ComponentSchema {
  collectionName: 'components_common_years_of_experiences';
  info: {
    displayName: 'Years Of Experience';
    icon: 'calendar';
  };
  attributes: {
    text1: Schema.Attribute.String & Schema.Attribute.Required;
    text2: Schema.Attribute.String & Schema.Attribute.Required;
    years: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroCommonHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_common_heroes';
  info: {
    displayName: 'Common Hero';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    initialPageName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Home'>;
    pageName: Schema.Attribute.String;
    pageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_list_feature_lists';
  info: {
    displayName: 'Feature List';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.years-of-experience': CommonYearsOfExperience;
      'hero.common-hero': HeroCommonHero;
      'list.feature-list': ListFeatureList;
    }
  }
}
