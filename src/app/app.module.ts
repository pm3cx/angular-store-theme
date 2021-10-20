import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AppState } from './store/app.state';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([AppState]), // initial ngxs module and create the state of app
    NgxsStoragePluginModule.forRoot(), // ngxs store plugin offers init store state in localstore, we can set custom keys and options inside forRoor()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
