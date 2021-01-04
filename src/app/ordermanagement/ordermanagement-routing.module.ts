import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManifestComponent } from './manifest/manifest.component';
import { OderrulesComponent } from './oderrules/oderrules.component';
import { OrdercancellationComponent } from './ordercancellation/ordercancellation.component';
import { OrderprocessingComponent } from './orderprocessing/orderprocessing.component';
import { SalesreturnComponent } from './salesreturn/salesreturn.component';
import { StatementofaccountComponent } from './statementofaccount/statementofaccount.component';


const routes: Routes = [
  {path:'orderprocess',component:OrderprocessingComponent},
  {path:'manifest',component:ManifestComponent},
  {path:'ordercancellation',component:OrdercancellationComponent},
  {path:'salesreturn',component:SalesreturnComponent},
  {path:'statementofaccount',component:StatementofaccountComponent},
  {path:'orderrules',component:OderrulesComponent},
  {path:'orderallocationrule',component:OrdercancellationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdermanagementRoutingModule { }
