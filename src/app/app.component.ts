import { AfterContentInit, Component, Inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { App } from './store/app.action';
import { AppState } from './store/app.state';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterContentInit {
  @Select(AppState.theme) theme$: Observable<string>; // select the theme selector that w've create on the app.state.ts

  constructor(
    private store: Store,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterContentInit(): void {
    const head = this.document.getElementsByTagName('head')[0];
    console.log(head);
  }

  onChange(event: string): void {
    this.store.dispatch(new App.ThemeState(event)); // dispatch the new theme from dropdown
  }
}
