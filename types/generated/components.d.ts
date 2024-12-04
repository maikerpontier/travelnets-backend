import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCardWithIconAndTitles extends Struct.ComponentSchema {
  collectionName: 'components_common_card_with_icon_and_titles';
  info: {
    displayName: 'Card With Icon And Titles';
    icon: 'cast';
  };
  attributes: {
    iconName: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonCustomerReviews extends Struct.ComponentSchema {
  collectionName: 'components_common_customer_reviews';
  info: {
    displayName: 'Customer Reviews';
    icon: 'star';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    reviewerName: Schema.Attribute.String & Schema.Attribute.Required;
    reviewerPhoto: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    reviewerRole: Schema.Attribute.String;
    starts: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonImageSectionWithLeftTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_common_image_section_with_left_titles';
  info: {
    displayName: 'Image Section With Left Title';
    icon: 'chartBubble';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    destinations: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    satisfiedClients: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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
    description: '';
    displayName: 'Feature List';
    icon: 'bulletList';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'image', 'card']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.card-with-icon-and-titles': CommonCardWithIconAndTitles;
      'common.customer-reviews': CommonCustomerReviews;
      'common.image-section-with-left-title': CommonImageSectionWithLeftTitle;
      'common.years-of-experience': CommonYearsOfExperience;
      'hero.common-hero': HeroCommonHero;
      'list.feature-list': ListFeatureList;
    }
  }
}
