import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {path:'',redirectTo:'connection',pathMatch:'full'},
  {path:'connection',loadChildren:()=>import(`../app/connection/connection.module`).then(m=>m.ConnectionModule)},
  {path:'ordermanagement',loadChildren:()=>import(`../app/ordermanagement/ordermanagement.module`).then(m=>m.OrdermanagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
