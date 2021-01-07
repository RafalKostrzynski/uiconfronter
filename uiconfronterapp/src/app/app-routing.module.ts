import{NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {FirstPageComponent} from "./components/pages/first-page/first-page.component";
import {SecondPageComponent} from "./components/pages/second-page/second-page.component";

const routes:Routes=[
  {path:'compare-websites',component:FirstPageComponent},
  {path:'stored-websites',component:SecondPageComponent}
  ];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}

export const routingComponents=[FirstPageComponent,SecondPageComponent]
