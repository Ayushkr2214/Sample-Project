import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'; 
import { ServicesListComponent } from './services-list/services-list.component';




const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'services', component: ServicesListComponent } 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
