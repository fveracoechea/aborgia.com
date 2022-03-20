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
  PageContentDynamicZoneInput: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Banner = {
  __typename?: 'Banner';
  backgroundColor?: Maybe<Scalars['String']>;
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

export type BannerContentDynamicZone = ComponentBannerSection | Error;

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
  backgroundColor?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images: ComponentBannerImages;
  link?: Maybe<Scalars['String']>;
  primaryText?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  spacing: ComponentBannerSpacing;
  textAlign: Enum_Componentbannersection_Textalign;
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
  error?: Maybe<ComponentSettingsColor>;
  id: Scalars['ID'];
  info?: Maybe<ComponentSettingsColor>;
  primary: ComponentSettingsColor;
  secondary: ComponentSettingsColor;
  success?: Maybe<ComponentSettingsColor>;
  textPrimary?: Maybe<ComponentSettingsColor>;
  textSecondary?: Maybe<ComponentSettingsColor>;
  warning?: Maybe<ComponentSettingsColor>;
};

export type ComponentSettingsThemeInput = {
  error?: InputMaybe<ComponentSettingsColorInput>;
  id?: InputMaybe<Scalars['ID']>;
  info?: InputMaybe<ComponentSettingsColorInput>;
  primary?: InputMaybe<ComponentSettingsColorInput>;
  secondary?: InputMaybe<ComponentSettingsColorInput>;
  success?: InputMaybe<ComponentSettingsColorInput>;
  textPrimary?: InputMaybe<ComponentSettingsColorInput>;
  textSecondary?: InputMaybe<ComponentSettingsColorInput>;
  warning?: InputMaybe<ComponentSettingsColorInput>;
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

export type GenericMorph = Banner | ComponentBannerBanner | ComponentBannerImages | ComponentBannerSection | ComponentBannerSpacing | ComponentSettingsColor | ComponentSettingsTheme | GlobalSetting | I18NLocale | Page | Seo | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

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
  createBanner?: Maybe<BannerEntityResponse>;
  createBannerLocalization?: Maybe<BannerEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createSeo?: Maybe<SeoEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteBanner?: Maybe<BannerEntityResponse>;
  deleteGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteSeo?: Maybe<SeoEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
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
  updateBanner?: Maybe<BannerEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobalSetting?: Maybe<GlobalSettingEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateSeo?: Maybe<SeoEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
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


export type MutationCreatePageArgs = {
  data: PageInput;
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


export type MutationDeleteBannerArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeletePageArgs = {
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


export type MutationUpdatePageArgs = {
  data: PageInput;
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
  content?: Maybe<Array<Maybe<PageContentDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  route: Scalars['String'];
  seo?: Maybe<SeoEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PageContentDynamicZone = ComponentBannerBanner | Error;

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
  seo?: InputMaybe<SeoFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  content?: InputMaybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  route?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Scalars['ID']>;
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
  banner?: Maybe<BannerEntityResponse>;
  banners?: Maybe<BannerEntityResponseCollection>;
  globalSetting?: Maybe<GlobalSettingEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
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

export type StrapiFileFragment = { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null };

export type StrapiImagesFragment = { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null };

export type StrapiSpacingFragment = { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number };

export type StrapiBannerFragmentFragment = { __typename: 'ComponentBannerBanner', id: string, banner?: { __typename?: 'BannerEntityResponse', data?: { __typename?: 'BannerEntity', id?: string | null, attributes?: { __typename?: 'Banner', locale?: string | null, title: string, backgroundColor?: string | null, fullWidth?: boolean | null, displaySettings: Enum_Banner_Displaysettings, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null }, content?: Array<{ __typename: 'ComponentBannerSection', primaryText?: string | null, secondaryText?: string | null, textAlign: Enum_Componentbannersection_Textalign, backgroundColor?: string | null, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null } } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

export type PageSeoFragmentFragment = { __typename?: 'Page', seo?: { __typename?: 'SeoEntityResponse', data?: { __typename?: 'SeoEntity', attributes?: { __typename?: 'Seo', pageTile: string, canonical: string, metaRobots: Enum_Seo_Metarobots, metaDescription: string, keywords: string } | null } | null } | null };

export type PageContentFragmentFragment = { __typename?: 'Page', content?: Array<{ __typename: 'ComponentBannerBanner', id: string, banner?: { __typename?: 'BannerEntityResponse', data?: { __typename?: 'BannerEntity', id?: string | null, attributes?: { __typename?: 'Banner', locale?: string | null, title: string, backgroundColor?: string | null, fullWidth?: boolean | null, displaySettings: Enum_Banner_Displaysettings, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null }, content?: Array<{ __typename: 'ComponentBannerSection', primaryText?: string | null, secondaryText?: string | null, textAlign: Enum_Componentbannersection_Textalign, backgroundColor?: string | null, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null } } | { __typename?: 'Error' } | null> | null } | null } | null } | null } | { __typename?: 'Error' } | null> | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', route: string } | null }> } | null };

export type SinglePageQueryVariables = Exact<{
  route: Scalars['String'];
}>;


export type SinglePageQuery = { __typename?: 'Query', renderNavigation: Array<{ __typename?: 'NavigationItem', title: string, path?: string | null, id: number } | null>, globalSetting?: { __typename?: 'GlobalSettingEntityResponse', data?: { __typename: 'GlobalSettingEntity', attributes?: { __typename?: 'GlobalSetting', siteName: string, favicon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, theme: { __typename?: 'ComponentSettingsTheme', primary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, secondary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, success?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, error?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, warning?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, info?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, textPrimary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, textSecondary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null } } | null } | null } | null, pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', name: string, route: string, seo?: { __typename?: 'SeoEntityResponse', data?: { __typename?: 'SeoEntity', attributes?: { __typename?: 'Seo', pageTile: string, canonical: string, metaRobots: Enum_Seo_Metarobots, metaDescription: string, keywords: string } | null } | null } | null, content?: Array<{ __typename: 'ComponentBannerBanner', id: string, banner?: { __typename?: 'BannerEntityResponse', data?: { __typename?: 'BannerEntity', id?: string | null, attributes?: { __typename?: 'Banner', locale?: string | null, title: string, backgroundColor?: string | null, fullWidth?: boolean | null, displaySettings: Enum_Banner_Displaysettings, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null }, content?: Array<{ __typename: 'ComponentBannerSection', primaryText?: string | null, secondaryText?: string | null, textAlign: Enum_Componentbannersection_Textalign, backgroundColor?: string | null, spacing: { __typename?: 'ComponentBannerSpacing', vertical: number, horizontal: number }, images: { __typename?: 'ComponentBannerImages', mobile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null, desktop?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, size: number } | null } | null } | null } } | { __typename?: 'Error' } | null> | null } | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export type ThemeColorFragmentFragment = { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null };

export type StrapiThemeFragmentFragment = { __typename?: 'GlobalSetting', theme: { __typename?: 'ComponentSettingsTheme', primary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, secondary: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null }, success?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, error?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, warning?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, info?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, textPrimary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null, textSecondary?: { __typename?: 'ComponentSettingsColor', main: string, light?: string | null, dark?: string | null } | null } };

export const PageSeoFragmentFragmentDoc = gql`
    fragment PageSeoFragment on Page {
  seo {
    data {
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
    `;
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
          ... on ComponentBannerSection {
            __typename
            primaryText
            secondaryText
            textAlign
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
export const PageContentFragmentFragmentDoc = gql`
    fragment PageContentFragment on Page {
  content {
    ... on ComponentBannerBanner {
      ...StrapiBannerFragment
    }
  }
}
    ${StrapiBannerFragmentFragmentDoc}`;
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
    success {
      ...ThemeColorFragment
    }
    error {
      ...ThemeColorFragment
    }
    warning {
      ...ThemeColorFragment
    }
    info {
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
  renderNavigation(navigationIdOrSlug: "main-navigation", menuOnly: true) {
    title
    path
    id
  }
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
        ...PageContentFragment
      }
    }
  }
}
    ${StrapiFileFragmentDoc}
${StrapiThemeFragmentFragmentDoc}
${PageSeoFragmentFragmentDoc}
${PageContentFragmentFragmentDoc}`;

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