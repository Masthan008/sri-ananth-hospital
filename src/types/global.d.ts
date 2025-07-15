import { JSX as ReactJSX } from 'react';
import { Interpolation, Theme } from '@emotion/react';

type WithConditionalCSSProp<P> = 'className' extends keyof P
  ? string extends P['className']
    ? { css?: Interpolation<Theme> }
    : {}
  : {};

declare global {
  namespace JSX {
    // Merge with React's JSX
    interface Element extends ReactJSX.Element {}
    interface ElementClass extends ReactJSX.ElementClass {}
    interface ElementAttributesProperty extends ReactJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends ReactJSX.ElementChildrenAttribute {}
    
    type LibraryManagedAttributes<C, P> = ReactJSX.LibraryManagedAttributes<C, P> & 
      WithConditionalCSSProp<P>;
      
    interface IntrinsicAttributes extends ReactJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends ReactJSX.IntrinsicClassAttributes<T> {}
    
    // This allows for custom HTML elements and overrides
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  // Extend React types to include the css prop
  namespace React {
    interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
      css?: Interpolation<Theme>;
      // Add support for custom attributes
      [key: string]: any;
    }
  }
}

// This makes the css prop available on all components
declare module 'react' {
  interface Attributes {
    css?: Interpolation<Theme>;
  }
}
