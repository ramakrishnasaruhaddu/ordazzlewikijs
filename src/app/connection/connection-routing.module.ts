import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrierintegrationComponent}  from '../connection/carrierintegration/carrierintegration.component';
import { ChannelintegrationComponent}  from '../connection/channelintegration/channelintegration.component';
import { ECommerceintegrationComponent}  from '../connection/e-commerceintegration/e-commerceintegration.component';
const routes: Routes = [
  {path:'',redirectTo:'carrierintegration',pathMatch:'full'},
  {path:'carrierintegration',component:CarrierintegrationComponent},
  {path:'channelintegration',component:ChannelintegrationComponent},
  {path:'e-commerceintegration',component:ECommerceintegrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
