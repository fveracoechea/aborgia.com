import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BannerContentDynamicZoneInput: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AboutMe = {
  __typename?: 'AboutMe';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutMeRelationResponseCollection>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFileEntityResponse>;
  tagline: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutMeEntity = {
  __typename?: 'AboutMeEntity';
  attributes?: Maybe<AboutMe>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutMeEntityResponse = {
  __typename?: 'AboutMeEntityResponse';
  data?: Maybe<AboutMeEntity>;
};

export type AboutMeInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  tagline?: InputMaybe<Scalars['String']>;
};

export type AboutMeRelationResponseCollection = {
  __typename?: 'AboutMeRelationResponseCollection';
  data: Array<AboutMeEntity>;
};

export type Banner = {
  __typename?: 'Banner';
  backgroundColor: Scalars['String'];
  content?: Maybe<Array<Maybe<BannerContentDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displaySettings: Enum_Banner_Displaysettings;
  fullWidth?: Maybe<Scalars['Boolean']>;
  images: ComponentBannerImages;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BannerRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  spacing: ComponentBannerSpacing;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BannerLocalizationsArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BannerContentDynamicZone = ComponentBannerSection | ComponentBannerText | Error;

export type BannerEntity = {
  __typename?: 'BannerEntity';
  attributes?: Maybe<Banner>;
  id?: Maybe<Scalars['ID']>;
};

export type BannerEntityResponse = {
  __typename?: 'BannerEntityResponse';
  data?: Maybe<BannerEntity>;
};

export type BannerEntityResponseCollection = {
  __typename?: 'BannerEntityResponseCollection';
  data: Array<BannerEntity>;
  meta: ResponseCollectionMeta;
};

export type BannerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  backgroundColor?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displaySettings?: InputMaybe<StringFilterInput>;
  fullWidth?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BannerFiltersInput>;
  not?: InputMaybe<BannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BannerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BannerInput = {
  backgroundColor?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Array<Scalars['BannerContentDynamicZoneInput']>>;
  displaySettings?: InputMaybe<Enum_Banner_Displaysettings>;
  fullWidth?: InputMaybe<Scalars['Boolean']>;
  images?: InputMaybe<ComponentBannerImagesInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  spacing?: InputMaybe<ComponentBannerSpacingInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type BannerRelationResponseCollection = {
  __typename?: 'BannerRelationResponseCollection';
  data: Array<BannerEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentBannerBanner = {
  __typename?: 'ComponentBannerBanner';
  banner?: Maybe<BannerEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentBannerImages = {
  __typename?: 'ComponentBannerImages';
  desktop?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  mobile?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBannerImagesInput = {
  desktop?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  mobile?: InputMaybe<Scalars['ID']>;
};

export type ComponentBannerSection = {
  __typename?: 'ComponentBannerSection';
  backgroundColor: Scalars['String'];
  id: Scalars['ID'];
  images: ComponentBannerImages;
  link?: Maybe<Scalars['String']>;
  primaryText?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  spacing: ComponentBannerSpacing;
  textAlign: Enum_Componentbannersection_Textalign;
  textColor: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentBannerSpacing = {
  __typename?: 'ComponentBannerSpacing';
  horizontal: Scalars['Int'];
  id: Scalars['ID'];
  vertical: Scalars['Int'];
};

export type ComponentBannerSpacingInput = {
  horizontal?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  vertical?: InputMaybe<Scalars['Int']>;
};

export type ComponentBannerText = {
  __typename?: 'ComponentBannerText';
  backgroundColor: Scalars['String'];
  id: Scalars['ID'];
  spacing: ComponentBannerSpacing;
  text: Scalars['String'];
  textColor: Scalars['String'];
};

export type ComponentHomepageCoverages = {
  __typename?: 'ComponentHomepageCoverages';
  content: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: UploadFileEntityResponse;
  name: Scalars['String'];
};

export type ComponentHomepageCoveragesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomepageCoveragesFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomepageCoveragesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomepageCoveragesFiltersInput>>>;
};

export type ComponentHomepageCoveragesInput = {
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentHomepageInsurance = {
  __typename?: 'ComponentHomepageInsurance';
  coverages: Array<Maybe<ComponentHomepageCoverages>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type ComponentHomepageInsuranceCoveragesArgs = {
  filters?: InputMaybe<ComponentHomepageCoveragesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomepageInsuranceInput = {
  coverages?: InputMaybe<Array<InputMaybe<ComponentHomepageCoveragesInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPageDetails = {
  __typename?: 'ComponentPageDetails';
  SEO?: Maybe<SeoEntityResponse>;
  id: Scalars['ID'];
};

export type ComponentPageDetailsInput = {
  SEO?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentSettingsColor = {
  __typename?: 'ComponentSettingsColor';
  dark?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  light?: Maybe<Scalars['String']>;
  main: Scalars['String'];
};

export type ComponentSettingsColorInput = {
  dark?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  light?: InputMaybe<Scalars['String']>;
  main?: InputMaybe<Scalars['String']>;
};

export type ComponentSettingsTheme = {
  __typename?: 'ComponentSettingsTheme';
  id: Scalars['ID'];
  primary: ComponentSettingsColor;
  secondary: ComponentSettingsColor;
  textPrimary?: Maybe<ComponentSettingsColor>;
  textSecondary?: Maybe<ComponentSettingsColor>;
};

export type ComponentSettingsThemeInput = {
  id?: InputMaybe<Scalars['ID']>;
  primary?: InputMaybe<ComponentSettingsColorInput>;
  secondary?: InputMaybe<ComponentSettingsColorInput>;
  textPrimary?: InputMaybe<ComponentSettingsColorInput>;
  textSecondary?: InputMaybe<ComponentSettingsColorInput>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Banner_Displaysettings {
  Both = 'both',
  Desktop = 'desktop',
  Mobile = 'mobile'
}

export enum Enum_Componentbannersection_Textalign {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export enum Enum_Quote_Status {
  Fulfilled = 'fulfilled',
  Pending = 'pending',
  Rejected = 'rejected'
}

export enum Enum_Seo_Metarobots {
  All = 'all',
  Nofollow = 'nofollow',
  Noindex = 'noindex'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = AboutMe | Banner | ComponentBannerBanner | ComponentBannerImages | ComponentBannerSection | ComponentBannerSpacing | ComponentBannerText | ComponentHomepageCoverages | ComponentHomepageInsurance | ComponentPageDetails | ComponentSettingsColor | ComponentSettingsTheme | GlobalSetting | Hero | Homepage | I18NLocale | Page | Quote | Seo | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Value;

export type GlobalSetting = {
  __typename?: 'GlobalSetting';
  createdAt?: Maybe<Scalars['DateTime']>;
  favicon?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  siteName: Scalars['String'];
  theme: ComponentSettingsTheme;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GlobalSettingEntity = {
  __typename?: 'GlobalSettingEntity';
  attributes?: Maybe<GlobalSetting>;
  id?: Maybe<Scalars['ID']>;
};

export type GlobalSettingEntityResponse = {
  __typename?: 'GlobalSettingEntityResponse';
  data?: Maybe<GlobalSettingEntity>;
};

export type GlobalSettingInput = {
  favicon?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  siteName?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<ComponentSettingsThemeInput>;
};

export type Hero = {
  __typename?: 'Hero';
  createdAt?: Maybe<Scalars['DateTime']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HeroRelationResponseCollection>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HeroImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HeroEntity = {
  __typename?: 'HeroEntity';
  attributes?: Maybe<Hero>;
  id?: Maybe<Scalars['ID']>;
};

export type HeroEntityResponse = {
  __typename?: 'HeroEntityResponse';
  data?: Maybe<HeroEntity>;
};

export type HeroInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  tagline?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type HeroRelationResponseCollection = {
  __typename?: 'HeroRelationResponseCollection';
  data: Array<HeroEntity>;
};

export type Homepage = {
  __typename?: 'Homepage';
  Insurance?: Maybe<ComponentHomepageInsurance>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageInput = {
  Insurance?: InputMaybe<ComponentHomepageInsuranceInput>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAboutMeLocalization?: Maybe<AboutMeEntityResponse>;
  createBanner?: Maybe<BannerEntityResponse>;
  createBannerLocalization?: Maybe<BannerEntityResponse>;
  createHeroLocalization?: Maybe<HeroEntityResponse>;
  createHomepageLocalization?: Maybe<HomepageEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createQuote?: Maybe<QuoteEntityResponse>;
  createSeo?: Maybe<SeoEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createValue?: Maybe<ValueEntityResponse>;
  createValueLocalization?: Maybe<ValueEntityResponse>;
  deleteAboutMe?: Maybe<AboutMeEntityResponse>;
  deleteBanner?: Maybe<BannerEntityResponse>;
  deleteGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  deleteHero?: Maybe<HeroEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteQuote?: Maybe<QuoteEntityResponse>;
  deleteSeo?: Maybe<SeoEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteValue?: Maybe<ValueEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutMe?: Maybe<AboutMeEntityResponse>;
  updateBanner?: Maybe<BannerEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  updateHero?: Maybe<HeroEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateQuote?: Maybe<QuoteEntityResponse>;
  updateSeo?: Maybe<SeoEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateValue?: Maybe<ValueEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateAboutMeLocalizationArgs = {
  data?: InputMaybe<AboutMeInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBannerArgs = {
  data: BannerInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBannerLocalizationArgs = {
  data?: InputMaybe<BannerInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHeroLocalizationArgs = {
  data?: InputMaybe<HeroInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomepageLocalizationArgs = {
  data?: InputMaybe<HomepageInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreatePageArgs = {
  data: PageInput;
};


export type MutationCreateQuoteArgs = {
  data: QuoteInput;
};


export type MutationCreateSeoArgs = {
  data: SeoInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateValueArgs = {
  data: ValueInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateValueLocalizationArgs = {
  data?: InputMaybe<ValueInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAboutMeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBannerArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHeroArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteQuoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSeoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteValueArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutMeArgs = {
  data: AboutMeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBannerArgs = {
  data: BannerInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalSettingArgs = {
  data: GlobalSettingInput;
};


export type MutationUpdateHeroArgs = {
  data: HeroInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID'];
};


export type MutationUpdateQuoteArgs = {
  data: QuoteInput;
  id: Scalars['ID'];
};


export type MutationUpdateSeoArgs = {
  data: SeoInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateValueArgs = {
  data: ValueInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  audience?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  externalPath?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  master?: Maybe<Scalars['Int']>;
  menuAttached: Scalars['Boolean'];
  order: Scalars['Int'];
  parent?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  related?: Maybe<NavigationRelated>;
  title: Scalars['String'];
  type: Scalars['String'];
  uiRouterKey: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['String']>;
};

export type NavigationRelated = Page;

export enum NavigationRenderType {
  Flat = 'FLAT',
  Rfr = 'RFR',
  Tree = 'TREE'
}

export type Page = {
  __typename?: 'Page';
  PageSEO?: Maybe<ComponentPageDetails>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  route: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  route?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  PageSEO?: InputMaybe<ComponentPageDetailsInput>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  route?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutMe?: Maybe<AboutMeEntityResponse>;
  banner?: Maybe<BannerEntityResponse>;
  banners?: Maybe<BannerEntityResponseCollection>;
  globalSetting?: Maybe<GlobalSettingEntityResponse>;
  hero?: Maybe<HeroEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  quote?: Maybe<QuoteEntityResponse>;
  quotes?: Maybe<QuoteEntityResponseCollection>;
  renderNavigation: Array<Maybe<NavigationItem>>;
  renderNavigationChild: Array<Maybe<NavigationItem>>;
  seo?: Maybe<SeoEntityResponse>;
  seos?: Maybe<SeoEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  value?: Maybe<ValueEntityResponse>;
  values?: Maybe<ValueEntityResponseCollection>;
};


export type QueryAboutMeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBannersArgs = {
  filters?: InputMaybe<BannerFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGlobalSettingArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeroArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomepageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryQuotesArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRenderNavigationArgs = {
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  navigationIdOrSlug: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NavigationRenderType>;
};


export type QueryRenderNavigationChildArgs = {
  childUiKey: Scalars['String'];
  id: Scalars['String'];
  menuOnly?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<NavigationRenderType>;
};


export type QuerySeoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySeosArgs = {
  filters?: InputMaybe<SeoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryValueArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryValuesArgs = {
  filters?: InputMaybe<ValueFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Quote = {
  __typename?: 'Quote';
  additionalInformation?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  insurance: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  status?: Maybe<Enum_Quote_Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuoteEntity = {
  __typename?: 'QuoteEntity';
  attributes?: Maybe<Quote>;
  id?: Maybe<Scalars['ID']>;
};

export type QuoteEntityResponse = {
  __typename?: 'QuoteEntityResponse';
  data?: Maybe<QuoteEntity>;
};

export type QuoteEntityResponseCollection = {
  __typename?: 'QuoteEntityResponseCollection';
  data: Array<QuoteEntity>;
  meta: ResponseCollectionMeta;
};

export type QuoteFiltersInput = {
  additionalInformation?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  insurance?: InputMaybe<StringFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<QuoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuoteInput = {
  additionalInformation?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  insurance?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Quote_Status>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Seo = {
  __typename?: 'Seo';
  canonical: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  keywords: Scalars['String'];
  metaDescription: Scalars['String'];
  metaRobots: Enum_Seo_Metarobots;
  pageTile: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeoEntity = {
  __typename?: 'SeoEntity';
  attributes?: Maybe<Seo>;
  id?: Maybe<Scalars['ID']>;
};

export type SeoEntityResponse = {
  __typename?: 'SeoEntityResponse';
  data?: Maybe<SeoEntity>;
};

export type SeoEntityResponseCollection = {
  __typename?: 'SeoEntityResponseCollection';
  data: Array<SeoEntity>;
  meta: ResponseCollectionMeta;
};

export type SeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SeoFiltersInput>>>;
  canonical?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SeoFiltersInput>>>;
  pageTile?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SeoInput = {
  canonical?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaRobots?: InputMaybe<Enum_Seo_Metarobots>;
  pageTile?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Value = {
  __typename?: 'Value';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  icon: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ValueRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ValueLocalizationsArgs = {
  filters?: InputMaybe<ValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ValueEntity = {
  __typename?: 'ValueEntity';
  attributes?: Maybe<Value>;
  id?: Maybe<Scalars['ID']>;
};

export type ValueEntityResponse = {
  __typename?: 'ValueEntityResponse';
  data?: Maybe<ValueEntity>;
};

export type ValueEntityResponseCollection = {
  __typename?: 'ValueEntityResponseCollection';
  data: Array<ValueEntity>;
  meta: ResponseCollectionMeta;
};

export type ValueFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ValueFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ValueFiltersInput>;
  not?: InputMaybe<ValueFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ValueFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ValueInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ValueRelationResponseCollection = {
  __typename?: 'ValueRelationResponseCollection';
  data: Array<ValueEntity>;
};

export type StrapiImagesFragment = { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null };

export type StrapiSpacingFragment = { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number };

export type StrapiBannerFragmentFragment = { __typename: 'ComponentBannerBanner', id: string, banner?: { __typename?: 'BannerEntityResponse', data?: { __typename?: 'BannerEntity', id?: string | null, attributes?: { __typename?: 'Banner', locale?: string | null, title: string, backgroundColor: string, fullWidth?: boolean | null, displaySettings: Enum_Banner_Displaysettings, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null }, content?: Array<{ __typename: 'ComponentBannerSection', primaryText?: string | null, secondaryText?: string | null, textAlign: Enum_Componentbannersection_Textalign, textColor: string, backgroundColor: string, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null } } | { __typename: 'ComponentBannerText', text: string, textColor: string, backgroundColor: string, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number } } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type ThemeColorFragmentFragment = { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null };

export type StrapiFileFragment = { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null };

export type StrapiFileCollectionFragment = { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null }> };

export type StrapiThemeFragmentFragment = { __typename?: 'GlobalSetting', theme: { __typename?: 'ComponentSettingsTheme', primary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, secondary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, textPrimary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, textSecondary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null } };

export type PageSeoFragmentFragment = { __typename?: 'Page', PageSEO?: { __typename?: 'ComponentPageDetails', SEO?: { __typename?: 'SeoEntityResponse', data?: { __typename?: 'SeoEntity', id?: string | null, attributes?: { __typename?: 'Seo', pageTile: string, canonical: string, metaRobots: Enum_Seo_Metarobots, metaDescription: string, keywords: string } | null } | null } | null } | null };

export type CreateQuoteMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  phone: Scalars['String'];
  insurance: Scalars['String'];
  additionalInformation?: InputMaybe<Scalars['String']>;
}>;


export type CreateQuoteMutation = { __typename?: 'Mutation', createQuote?: { __typename?: 'QuoteEntityResponse', data?: { __typename?: 'QuoteEntity', id?: string | null, attributes?: { __typename?: 'Quote', firstName: string } | null } | null } | null };

export type AboutMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutMeQuery = { __typename?: 'Query', aboutMe?: { __typename?: 'AboutMeEntityResponse', data?: { __typename?: 'AboutMeEntity', attributes?: { __typename?: 'AboutMe', name?: string | null, description: string, tagline: string, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null } | null } | null } | null };

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = { __typename?: 'Query', homepage?: { __typename?: 'HomepageEntityResponse', data?: { __typename?: 'HomepageEntity', id?: string | null, attributes?: { __typename?: 'Homepage', Insurance?: { __typename?: 'ComponentHomepageInsurance', title: string, coverages: Array<{ __typename?: 'ComponentHomepageCoverages', id: string, name: string, description: string, content: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } } | null> } | null } | null } | null } | null };

export type StrapiHeroQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiHeroQuery = { __typename?: 'Query', hero?: { __typename?: 'HeroEntityResponse', data?: { __typename?: 'HeroEntity', attributes?: { __typename?: 'Hero', title: string, tagline: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null }> } | null } | null } | null } | null };

export type StrapiValuesQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiValuesQuery = { __typename?: 'Query', values?: { __typename?: 'ValueEntityResponseCollection', data: Array<{ __typename?: 'ValueEntity', id?: string | null, attributes?: { __typename?: 'Value', icon: string, title: string, description: string } | null }> } | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', route: string } | null }> } | null };

export type SinglePageQueryVariables = Exact<{
  route: Scalars['String'];
}>;


export type SinglePageQuery = { __typename?: 'Query', globalSetting?: { __typename?: 'GlobalSettingEntityResponse', data?: { __typename: 'GlobalSettingEntity', attributes?: { __typename?: 'GlobalSetting', siteName: string, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, theme: { __typename?: 'ComponentSettingsTheme', primary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, secondary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, textPrimary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, textSecondary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null } } | null } | null } | null, pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', name: string, route: string, PageSEO?: { __typename?: 'ComponentPageDetails', SEO?: { __typename?: 'SeoEntityResponse', data?: { __typename?: 'SeoEntity', id?: string | null, attributes?: { __typename?: 'Seo', pageTile: string, canonical: string, metaRobots: Enum_Seo_Metarobots, metaDescription: string, keywords: string } | null } | null } | null } | null } | null }> } | null };

export const StrapiSpacingFragmentDoc = gql`
    fragment StrapiSpacing on ComponentBannerSpacing {
  vertical
  horizontal
}
    `;
export const StrapiFileFragmentDoc = gql`
    fragment StrapiFile on UploadFileEntityResponse {
  data {
    attributes {
      url
      width
      height
      size
    }
  }
}
    `;
export const StrapiImagesFragmentDoc = gql`
    fragment StrapiImages on ComponentBannerImages {
  mobile {
    ...StrapiFile
  }
  desktop {
    ...StrapiFile
  }
}
    ${StrapiFileFragmentDoc}`;
export const StrapiBannerFragmentFragmentDoc = gql`
    fragment StrapiBannerFragment on ComponentBannerBanner {
  __typename
  id
  banner {
    data {
      id
      attributes {
        locale
        title
        backgroundColor
        fullWidth
        displaySettings
        spacing {
          ...StrapiSpacing
        }
        images {
          ...StrapiImages
        }
        content {
          ... on ComponentBannerText {
            __typename
            text
            textColor
            backgroundColor
            spacing {
              ...StrapiSpacing
            }
          }
          ... on ComponentBannerSection {
            __typename
            primaryText
            secondaryText
            textAlign
            textColor
            backgroundColor
            spacing {
              ...StrapiSpacing
            }
            images {
              ...StrapiImages
            }
          }
        }
      }
    }
  }
}
    ${StrapiSpacingFragmentDoc}
${StrapiImagesFragmentDoc}`;
export const StrapiFileCollectionFragmentDoc = gql`
    fragment StrapiFileCollection on UploadFileRelationResponseCollection {
  data {
    attributes {
      url
      width
      height
      size
    }
  }
}
    `;
export const ThemeColorFragmentFragmentDoc = gql`
    fragment ThemeColorFragment on ComponentSettingsColor {
  main
  light
  dark
}
    `;
export const StrapiThemeFragmentFragmentDoc = gql`
    fragment StrapiThemeFragment on GlobalSetting {
  theme {
    primary {
      ...ThemeColorFragment
    }
    secondary {
      ...ThemeColorFragment
    }
    textPrimary {
      ...ThemeColorFragment
    }
    textSecondary {
      ...ThemeColorFragment
    }
  }
}
    ${ThemeColorFragmentFragmentDoc}`;
export const PageSeoFragmentFragmentDoc = gql`
    fragment PageSeoFragment on Page {
  PageSEO {
    SEO {
      data {
        id
        attributes {
          pageTile
          canonical
          metaRobots
          metaDescription
          keywords
        }
      }
    }
  }
}
    `;
export const CreateQuoteDocument = gql`
    mutation CreateQuote($firstName: String!, $lastName: String, $email: String!, $phone: String!, $insurance: String!, $additionalInformation: String) {
  createQuote(
    data: {firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, insurance: $insurance, additionalInformation: $additionalInformation}
  ) {
    data {
      id
      attributes {
        firstName
      }
    }
  }
}
    `;
export type CreateQuoteMutationFn = Apollo.MutationFunction<CreateQuoteMutation, CreateQuoteMutationVariables>;

/**
 * __useCreateQuoteMutation__
 *
 * To run a mutation, you first call `useCreateQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuoteMutation, { data, loading, error }] = useCreateQuoteMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      phone: // value for 'phone'
 *      insurance: // value for 'insurance'
 *      additionalInformation: // value for 'additionalInformation'
 *   },
 * });
 */
export function useCreateQuoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuoteMutation, CreateQuoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuoteMutation, CreateQuoteMutationVariables>(CreateQuoteDocument, options);
      }
export type CreateQuoteMutationHookResult = ReturnType<typeof useCreateQuoteMutation>;
export type CreateQuoteMutationResult = Apollo.MutationResult<CreateQuoteMutation>;
export type CreateQuoteMutationOptions = Apollo.BaseMutationOptions<CreateQuoteMutation, CreateQuoteMutationVariables>;
export const AboutMeDocument = gql`
    query AboutMe {
  aboutMe {
    data {
      attributes {
        name
        description
        tagline
        picture {
          ...StrapiFile
        }
      }
    }
  }
}
    ${StrapiFileFragmentDoc}`;

/**
 * __useAboutMeQuery__
 *
 * To run a query within a React component, call `useAboutMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutMeQuery(baseOptions?: Apollo.QueryHookOptions<AboutMeQuery, AboutMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutMeQuery, AboutMeQueryVariables>(AboutMeDocument, options);
      }
export function useAboutMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutMeQuery, AboutMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutMeQuery, AboutMeQueryVariables>(AboutMeDocument, options);
        }
export type AboutMeQueryHookResult = ReturnType<typeof useAboutMeQuery>;
export type AboutMeLazyQueryHookResult = ReturnType<typeof useAboutMeLazyQuery>;
export type AboutMeQueryResult = Apollo.QueryResult<AboutMeQuery, AboutMeQueryVariables>;
export const HomepageDocument = gql`
    query Homepage {
  homepage {
    data {
      id
      attributes {
        Insurance {
          title
          coverages {
            id
            name
            description
            content
            image {
              ...StrapiFile
            }
          }
        }
      }
    }
  }
}
    ${StrapiFileFragmentDoc}`;

/**
 * __useHomepageQuery__
 *
 * To run a query within a React component, call `useHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageQuery(baseOptions?: Apollo.QueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
      }
export function useHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageQuery, HomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageQuery, HomepageQueryVariables>(HomepageDocument, options);
        }
export type HomepageQueryHookResult = ReturnType<typeof useHomepageQuery>;
export type HomepageLazyQueryHookResult = ReturnType<typeof useHomepageLazyQuery>;
export type HomepageQueryResult = Apollo.QueryResult<HomepageQuery, HomepageQueryVariables>;
export const StrapiHeroDocument = gql`
    query StrapiHero {
  hero {
    data {
      attributes {
        title
        tagline
        images {
          ...StrapiFileCollection
        }
      }
    }
  }
}
    ${StrapiFileCollectionFragmentDoc}`;

/**
 * __useStrapiHeroQuery__
 *
 * To run a query within a React component, call `useStrapiHeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useStrapiHeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStrapiHeroQuery({
 *   variables: {
 *   },
 * });
 */
export function useStrapiHeroQuery(baseOptions?: Apollo.QueryHookOptions<StrapiHeroQuery, StrapiHeroQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StrapiHeroQuery, StrapiHeroQueryVariables>(StrapiHeroDocument, options);
      }
export function useStrapiHeroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StrapiHeroQuery, StrapiHeroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StrapiHeroQuery, StrapiHeroQueryVariables>(StrapiHeroDocument, options);
        }
export type StrapiHeroQueryHookResult = ReturnType<typeof useStrapiHeroQuery>;
export type StrapiHeroLazyQueryHookResult = ReturnType<typeof useStrapiHeroLazyQuery>;
export type StrapiHeroQueryResult = Apollo.QueryResult<StrapiHeroQuery, StrapiHeroQueryVariables>;
export const StrapiValuesDocument = gql`
    query StrapiValues {
  values {
    data {
      id
      attributes {
        icon
        title
        description
      }
    }
  }
}
    `;

/**
 * __useStrapiValuesQuery__
 *
 * To run a query within a React component, call `useStrapiValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStrapiValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStrapiValuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useStrapiValuesQuery(baseOptions?: Apollo.QueryHookOptions<StrapiValuesQuery, StrapiValuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StrapiValuesQuery, StrapiValuesQueryVariables>(StrapiValuesDocument, options);
      }
export function useStrapiValuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StrapiValuesQuery, StrapiValuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StrapiValuesQuery, StrapiValuesQueryVariables>(StrapiValuesDocument, options);
        }
export type StrapiValuesQueryHookResult = ReturnType<typeof useStrapiValuesQuery>;
export type StrapiValuesLazyQueryHookResult = ReturnType<typeof useStrapiValuesLazyQuery>;
export type StrapiValuesQueryResult = Apollo.QueryResult<StrapiValuesQuery, StrapiValuesQueryVariables>;
export const PagesDocument = gql`
    query Pages {
  pages {
    data {
      id
      attributes {
        route
      }
    }
  }
}
    `;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: Apollo.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
      }
export function usePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<PagesQuery, PagesQueryVariables>;
export const SinglePageDocument = gql`
    query SinglePage($route: String!) {
  globalSetting {
    data {
      __typename
      attributes {
        siteName
        favicon {
          ...StrapiFile
        }
        ...StrapiThemeFragment
      }
    }
  }
  pages(filters: {route: {eq: $route}}) {
    data {
      id
      attributes {
        name
        route
        ...PageSeoFragment
      }
    }
  }
}
    ${StrapiFileFragmentDoc}
${StrapiThemeFragmentFragmentDoc}
${PageSeoFragmentFragmentDoc}`;

/**
 * __useSinglePageQuery__
 *
 * To run a query within a React component, call `useSinglePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSinglePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSinglePageQuery({
 *   variables: {
 *      route: // value for 'route'
 *   },
 * });
 */
export function useSinglePageQuery(baseOptions: Apollo.QueryHookOptions<SinglePageQuery, SinglePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SinglePageQuery, SinglePageQueryVariables>(SinglePageDocument, options);
      }
export function useSinglePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SinglePageQuery, SinglePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SinglePageQuery, SinglePageQueryVariables>(SinglePageDocument, options);
        }
export type SinglePageQueryHookResult = ReturnType<typeof useSinglePageQuery>;
export type SinglePageLazyQueryHookResult = ReturnType<typeof useSinglePageLazyQuery>;
export type SinglePageQueryResult = Apollo.QueryResult<SinglePageQuery, SinglePageQueryVariables>;