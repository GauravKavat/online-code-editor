declare module 'prismjs/components/prism-core' {
  const languages: {
    [key: string]: any;
    extend(id: string, redef: any): void;
  };

  function highlight(code: string, grammar: any, language: string): string;

  export { highlight, languages };
}

declare module 'prismjs/components/prism-clike' {}
declare module 'prismjs/components/prism-javascript' {}
declare module 'prismjs/components/prism-css' {}
declare module 'prismjs/components/prism-markup' {}
