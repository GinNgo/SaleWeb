import { ProgressComponent } from './progress/progress.component';
import { BillComponent } from './bill/bill.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FiltersComponent } from './filters/filters.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'order', component: OrdersComponent },
  {
    path: 'orderDetail',
    component: OrderDetailComponent,
    children: [
      { path: 'progress/:orderId', component: ProgressComponent },
      { path: 'bill/:orderId', component: BillComponent },
    ],
  },
  {
    path: 'filter',
    component: FiltersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
