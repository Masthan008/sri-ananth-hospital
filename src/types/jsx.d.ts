import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add any additional HTML attributes here if needed
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add any custom JSX elements here if needed
    }
  }
}
