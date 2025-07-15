import 'react';
import { Interpolation } from '@emotion/serialize';
import { Theme } from '@emotion/react';

type WithConditionalCSSProp<P> = 'className' extends keyof P
  ? string extends P['className']
    ? { css?: Interpolation<Theme> }
    : {}
  : {};

declare global {
  namespace JSX {
    // This allows for custom HTML elements
    interface IntrinsicElements {
      [elemName: string]: any;
    }

    // This allows for the `css` prop on components
    interface IntrinsicAttributes {
      css?: Interpolation<Theme>;
    }
  }
}

// This makes the `css` prop available on all components
declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    css?: Interpolation<Theme>;
  }

  // This allows for the `css` prop on function components
  interface FunctionComponent<P = {}> {
    (props: P & { css?: Interpolation<Theme> }, context?: any): ReactElement<any, any> | null;
  }

  // This allows for the `css` prop on class components
  interface ComponentClass<P = {}> {
    new (props: P, context?: any): React.Component<P & { css?: Interpolation<Theme> }, any>;
  }
}

// This makes the `css` prop available on all components
type PropsWithCSS<P = unknown> = P & {
  css?: Interpolation<Theme>;
};

type JSXElementConstructor<P> = 
  | ((props: P) => ReactElement<any, any> | null)
  | (new (props: P) => Component<any, any>);

type JSXElement = ReactElement | null;

type JSXElementChildren = {} | null | undefined;

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface ReactFragment {
  key?: string | number | null | undefined;
  children?: ReactNode;
  [key: string]: any;
}

interface ReactPortal extends ReactElement {
  key: Key | null;
  children: ReactNode;
}

type Key = string | number;
