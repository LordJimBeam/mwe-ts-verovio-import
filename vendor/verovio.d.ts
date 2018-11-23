declare module 'verovio' {
  interface VerovioOptions {
    pageHeight?: number;
    pageWidth?: number;
    ignoreLayout?: number;
    border?: number;
    scale?: number;
  }

  interface VerovioToolkit {
    edit: (editorAction: string) => boolean;
    getElementsAtTime: (millisec: number) => object;
    getElementAttr: (xmlId: string) => object;
    getLog: () => string;
    getMEI: (page?: number, scoreBased?: number) => string;
    getPageCount: () => number;
    getPageWithElement: (xmlId: string) => number;
    getTimeForElement: (xmlId: string) => number;
    getVersion: () => string;
    loadData: (data: string) => void;
    redoLayout: () => void;
    renderData: (data: string, options?: VerovioOptions) => string;
    renderPage: (pageNumber: number, options?: VerovioOptions) => string;
    renderToMidi: (options?: VerovioOptions) => string;
    setOptions: (options: VerovioOptions) => void;
  }
  const verovio: { toolkit: new () => any };
}
