import 'react';
import { Interpolation, Theme } from '@emotion/react';

declare module 'react' {
  // This allows for the `css` prop on all components
  interface Attributes {
    css?: Interpolation<Theme>;
  }

  // This allows for the `css` prop on function components
  interface FunctionComponent<P = {}> {
    (props: P & { css?: Interpolation<Theme> }, context?: any): ReactElement<any, any> | null;
  }

  // This allows for the `css` prop on class components
  interface ComponentClass<P = {}> {
    new (props: P & { css?: Interpolation<Theme> }, context?: any): Component<P, any>;
  }

  // This allows for the `css` prop on HTML elements
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: Interpolation<Theme>;
  }
}

// This makes the `css` prop available on all components
type WithCSSProp<P = unknown> = P & {
  css?: Interpolation<Theme>;
};

// This allows for the `css` prop on components created with React.forwardRef
type ForwardRefExoticComponentWithCSS<P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<WithCSSProp<P>> & React.RefAttributes<any>
>;
