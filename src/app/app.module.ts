import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlueComponent } from './blue/blue.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BlueComponent],
})
export class AppModule { }
