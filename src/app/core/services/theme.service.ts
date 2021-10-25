import { Injector } from '@angular/core';
import { LinkDefinition } from '../interfaces/global.interface';

export class ThemeService {
  private _doc: Document;
  private _injector: Injector;

  constructor(document: Document, injector: Injector) {
    this._doc = document;
    this._injector = injector;
  }

  addCustomProperties(link: LinkDefinition): void {
    const css = this.getStyleReference(link.id);
    if (css) {
      css.href = link.href;
      this.loadHead().appendChild(css);
    } else {
      const css = this._doc.createElement('link');
      css.setAttribute('id', link.id);
      css.setAttribute('href', link.href);
      css.setAttribute('rel', 'stylesheet');
      this.loadHead().appendChild(css);
    }
  }

  // protected document
  private getStyleReference(id: string): HTMLLinkElement | null {
    return this._doc.getElementById(id) as HTMLLinkElement;
  }

  // protected document
  private loadHead(): HTMLHeadElement {
    return this._doc.getElementsByTagName('head')[0] as HTMLHeadElement;
  }
}

export const ThemeFactoryService = (doc: Document, injector: Injector) => {
  return new ThemeService(doc, injector);
};
