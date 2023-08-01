import React from "react";

/**
 * Simplifies the display of a type (without modifying it).
 * Taken from https://effectivetypescript.com/2022/02/25/gentips-4-display/
 */
export type Simplify<T> = T extends Function ? T : { [K in keyof T]: T[K] };

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

export interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}

/**
 * Props defined on the component.
 */
export type BaseProps<M extends OverridableTypeMap> = M["props"];

/**
 * Props of the component if `component={Component}` is used.
 */
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>;

/**
 * Props if `component={Component}` is NOT used.
 */
export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<
    React.ComponentPropsWithRef<M["defaultComponent"]>,
    keyof BaseProps<M>
  >;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
  // If you make any changes to this interface, please make sure to update the
  // `OverridableComponent` type in `mui-material/src/OverridableComponent.d.ts` as well.
  // Also, there are types in Base UI that have a similar shape to this interface
  // (e.g. SelectType, OptionType, etc.).
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>
  ): JSX.Element | null;
  (props: DefaultComponentProps<M>): JSX.Element | null;
  propTypes?: any;
}

/**
 * Own props of the component augmented with props of the root component.
 */
export type PolymorphicProps<
  TypeMap extends OverridableTypeMap,
  RootComponent extends React.ElementType
> = TypeMap["props"] &
  DistributiveOmit<
    React.ComponentPropsWithRef<RootComponent>,
    keyof TypeMap["props"]
  > & {
    component?: React.ElementType;
  };
