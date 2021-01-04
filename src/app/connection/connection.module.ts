import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ChannelintegrationComponent } from './channelintegration/channelintegration.component';
import { CarrierintegrationComponent } from './carrierintegration/carrierintegration.component';
import { ECommerceintegrationComponent } from './e-commerceintegration/e-commerceintegration.component';


@NgModule({
  declarations: [ChannelintegrationComponent, CarrierintegrationComponent, ECommerceintegrationComponent],
  imports: [
    CommonModule,
    ConnectionRoutingModule
  ]
})
export class ConnectionModule { }
