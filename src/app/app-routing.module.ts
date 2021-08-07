import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import Experience_0001 from '@pages/experience1/experience.component';

const routes: Routes = [
  { path: 'experience_0001', component: Experience_0001 },
  { path: '', component: Experience_0001 },
  { path: '**', component: Experience_0001 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
