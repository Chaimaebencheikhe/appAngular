import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HereComponent } from './components/here/here.component';
import { HomeComponent } from './components/home/home.component';
import { DragComponent } from './drag/drag.component';
const routes: Routes = [
  {
    path:'home',component:HomeComponent},
    {
    path:'here',component:HereComponent

  },
  {path:"drag",component:DragComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
