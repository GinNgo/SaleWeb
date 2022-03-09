import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { FiltersComponent } from './filters/filters.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { BillComponent } from './bill/bill.component';
import { ProgressComponent } from './progress/progress.component';
import { ComboBoxCustomerComponent } from './combo-box-customer/combo-box-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    OrdersComponent,
    FiltersComponent,
    ComboBoxComponent,
    OrderDetailComponent,
    BillComponent,
    ProgressComponent,
    ComboBoxCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
