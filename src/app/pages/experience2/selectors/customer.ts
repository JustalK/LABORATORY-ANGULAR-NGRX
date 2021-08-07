import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/customer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(fromCustomer.customerFeatureKey);

export const selectCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) => state.customers
);
