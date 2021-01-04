import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdermanagementRoutingModule } from './ordermanagement-routing.module';
import { OrderprocessingComponent } from './orderprocessing/orderprocessing.component';
import { ManifestComponent } from './manifest/manifest.component';
import { OrdercancellationComponent } from './ordercancellation/ordercancellation.component';
import { SalesreturnComponent } from './salesreturn/salesreturn.component';
import { StatementofaccountComponent } from './statementofaccount/statementofaccount.component';
import { OderrulesComponent } from './oderrules/oderrules.component';
import { OrderallocationruleComponent } from './orderallocationrule/orderallocationrule.component';


@NgModule({
  declarations: [OrderprocessingComponent, ManifestComponent, OrdercancellationComponent, SalesreturnComponent, StatementofaccountComponent, OderrulesComponent, OrderallocationruleComponent],
  imports: [
    CommonModule,
    OrdermanagementRoutingModule
  ]
})
export class OrdermanagementModule { }
