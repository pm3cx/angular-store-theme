import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { App } from './store/app.action';
import { AppState } from './store/app.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Select(AppState.theme) theme$: Observable<string>; // select the theme selector that w've create on the app.state.ts

  constructor(private store: Store) {}

  onChange(event: string): void {
    this.store.dispatch(new App.ThemeState(event)); // dispatch the new theme from dropdown
  }
}
