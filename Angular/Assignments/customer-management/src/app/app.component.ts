import { Component } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CustomerListComponent],
})
export class AppComponent {
  title = 'customer-management';
}
