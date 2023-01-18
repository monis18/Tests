import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './views/pages/landing/landing.component';
import { ModelComponent } from './views/pages/model/model.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'form/:id',
    component: ModelComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
