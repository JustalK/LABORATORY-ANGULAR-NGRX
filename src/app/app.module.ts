import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import Experience_0001 from '@pages/experience1/experience.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent, Experience_0001],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
