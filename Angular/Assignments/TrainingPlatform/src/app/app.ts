import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/trainings">Upcoming Trainings</a> |
      <a routerLink="/add-training">Add Training</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
})
export class App {}
