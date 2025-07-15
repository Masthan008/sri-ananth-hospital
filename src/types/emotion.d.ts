import { Interpolation, Theme as DefaultTheme } from '@emotion/react';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';

declare module '@emotion/react' {
  // Extend the default theme
  export interface Theme extends DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      accent: string;
      // Add other theme colors as needed
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    // Add other theme properties as needed
  }

  // This allows for the `css` prop to be used on any component
  export interface JSX {
    /**
     * The css prop is a convenient way to style components without 
     * having to create a styled component.
     */
    css?: Interpolation<Theme>;
  }
}

// This makes the css prop available on all components
declare module 'react' {
  interface Attributes {
    css?: Interpolation<DefaultTheme>;
  }
}

// This allows for the `css` prop to be used on any component
type WithConditionalCSSProp<P> = 'className' extends keyof P
  ? string extends P['className']
    ? { css?: Interpolation<DefaultTheme> }
    : {}
  : {};

// This makes the `css` prop available on all components
type EmotionJSXElement = (props: any) => ReactElement<any, any> | null;
declare module 'react' {
  interface DOMAttributes<T> {
    css?: Interpolation<DefaultTheme>;
  }
}

// This allows for the `css` prop to be used on all components
declare namespace JSX {
  interface IntrinsicAttributes {
    css?: Interpolation<DefaultTheme>;
  }
}

// This allows for the `css` prop to be used on all components
type PropsOf<C> = C extends React.ComponentType<infer P>
  ? P
  : C extends React.Component<infer P>
  ? P
  : never;

type WithEmotionProps<Props> = Props & {
  css?: Interpolation<DefaultTheme>;
};

type WithEmotionComponent<C> = C extends React.ComponentType<infer P>
  ? React.ForwardRefExoticComponent<
      React.PropsWithoutRef<WithEmotionProps<P>> & React.RefAttributes<C>
    >
  : never;
