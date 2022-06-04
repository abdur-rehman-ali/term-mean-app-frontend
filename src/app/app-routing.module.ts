import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  { path:'history' , component:HistoryComponent},
  { path:'form' , component:FormComponent},
  { path:'register' , component:RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
