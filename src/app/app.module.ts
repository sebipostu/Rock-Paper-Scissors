import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { RulesPageComponent } from './components/rules-page/rules-page.component';
import { ModalModule } from './_modal';

import { RulesButtonComponent } from './components/rules-button/rules-button.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    RulesPageComponent,
    RulesButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
