import { AfterViewInit, Component, Inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { App } from './store/app.action';
import { AppState } from './store/app.state';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @Select(AppState.theme) theme$: Observable<string>; // select the theme selector that w've create on the app.state.ts

  constructor(private store: Store, private themeService: ThemeService) {}

  ngAfterViewInit(): void {
    this.theme$.subscribe((res) =>
      this.themeService.addCustomProperties({ id: 'theme', href: res + '.css' })
    );
  }

  onChange(event: string): void {
    this.store.dispatch(new App.ThemeState(event)); // dispatch the new theme from dropdown
  }
}
