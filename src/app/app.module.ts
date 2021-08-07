import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import Experience_0001 from '@pages/experience1/experience.component';
import { counterReducer } from '@pages/experience1/reducers/counter';
import Experience_0002 from '@pages/experience2/experience.component';
import { reducer } from '@pages/experience2/reducers/customer';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent, Experience_0001, Experience_0002],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ count: counterReducer, customer: reducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
