import { INJECTOR, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AppState } from './store/app.state';
import { DOCUMENT } from '@angular/common';
import {
  ThemeFactoryService,
  ThemeService,
} from './core/services/theme.service';

// More info for NGXS store: https://www.ngxs.io/concepts/store

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([AppState]), // initial ngxs module and create the state of app
    NgxsStoragePluginModule.forRoot(), // ngxs store plugin offers init state in localstore, we can set custom keys and options inside forRoor()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ThemeService,
      useFactory: ThemeFactoryService,
      deps: [DOCUMENT, INJECTOR],
    },
  ],
})
export class AppModule {}
