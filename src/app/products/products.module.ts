import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFly } from './pipes/canFly.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPagesComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //Pipes
    ToggleCasePipe,
    CanFly,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
