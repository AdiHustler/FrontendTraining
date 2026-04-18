import { Component, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  standalone: true,
  imports: [],
})
export class CustomerDetailsComponent {
  @Input() customer!: Customer;
}
