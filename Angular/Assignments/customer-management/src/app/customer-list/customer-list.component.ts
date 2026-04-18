import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [CommonModule, FormsModule, CustomerDetailsComponent],
})
export class CustomerListComponent {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Deepak Sharma',
      address: 'Delhi',
      email: 'deepak@example.com',
      phone: '1234567890',
      dateOfBirth: '01-01-1991',
    },
    {
      id: 2,
      name: 'Raj Deepak',
      address: 'Mumbai',
      email: 'rajdeepak@example.com',
      phone: '9876543210',
      dateOfBirth: '02-02-1992',
    },
    {
      id: 3,
      name: 'Deepdas Gupta',
      address: 'Kolkata',
      email: 'deepdas@example.com',
      phone: '4567891230',
      dateOfBirth: '03-03-1993',
    },
    {
      id: 4,
      name: 'Ravi Kumar',
      address: 'Chennai',
      email: 'ravi@example.com',
      phone: '7891234560',
      dateOfBirth: '04-04-1994',
    },
    {
      id: 5,
      name: 'Amit Singh',
      address: 'Pune',
      email: 'amit@example.com',
      phone: '3216549870',
      dateOfBirth: '05-05-1995',
    },
    {
      id: 6,
      name: 'Suresh Deep',
      address: 'Hyderabad',
      email: 'suresh@example.com',
      phone: '6549873210',
      dateOfBirth: '06-06-1996',
    },
  ];

  filteredCustomers: Customer[] = [...this.customers];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  searchQuery: string = '';

  get paginatedCustomers(): Customer[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCustomers.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCustomers.length / this.itemsPerPage);
  }

  onSearch(): void {
    this.filteredCustomers = this.customers.filter((customer) =>
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
    this.currentPage = 1;
  }
}
