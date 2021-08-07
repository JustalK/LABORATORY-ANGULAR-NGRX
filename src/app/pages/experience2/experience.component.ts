import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from './models/customer';
import { selectCustomers } from './selectors/customer';
import { CustomerState } from './reducers/customer';
import { addCustomer } from './actions/customer';

@Component({
  templateUrl: './template.component.html',
})
export default class CustomComponent {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }
}
