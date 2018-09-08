import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyhomeComponent} from "./myhome/myhome.component"
import { RouterModule, Routes} from "@angular/router"
import { PhotoDetailsComponent } from "./photo-details/photo-details.component"

const routes: Routes = [
  { path: '', component: MyhomeComponent },
  { path: 'verify', redirectTo: ''},
  {path: "detail", component: PhotoDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

