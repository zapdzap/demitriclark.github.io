declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": {
        url: string;
        class?: string;
        className?: string;
      };
    }
  }
}

export {};
