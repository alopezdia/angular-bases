import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { heroeModule } from './heroes/heroe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
