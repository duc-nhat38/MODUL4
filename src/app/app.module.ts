import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectColorComponent } from './select-color/select-color.component';
import { CustomersComponent } from './customers/customers.component';
import { FormAddCustomerComponent } from './form-add-customer/form-add-customer.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectColorComponent,
    CustomersComponent,
    FormAddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
