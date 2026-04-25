import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training, TRAININGS } from './training.model';

@Component({
  selector: 'app-training-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Upcoming Trainings</h2>
    <table *ngIf="trainings.length; else empty">
      <thead>
        <tr>
          <th>Title</th>
          <th>Topic</th>
          <th>Trainer</th>
          <th>Venue</th>
          <th>Start</th>
          <th>End</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let tr of trainings">
          <td>{{ tr.title }}</td>
          <td>{{ tr.topic }}</td>
          <td>{{ tr.trainerName }}</td>
          <td>{{ tr.venue }}</td>
          <td>{{ tr.startDate }}</td>
          <td>{{ tr.endDate }}</td>
          <td>{{ tr.maxTrainees }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class TrainingListComponent {
  trainings: Training[] = TRAININGS;
}
