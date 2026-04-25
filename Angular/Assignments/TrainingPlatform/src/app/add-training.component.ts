import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Training, TRAININGS } from './training.model';

@Component({
  selector: 'app-add-training',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Add New Training</h2>
    <form #f="ngForm" (ngSubmit)="(save)">
      <div><label>Title</label><input name="title" [(ngModel)]="t.title" required /></div>
      <div><label>Topic</label><input name="topic" [(ngModel)]="t.topic" required /></div>
      <div>
        <label>Max Trainees</label
        ><input type="number" name="maxTrainees" [(ngModel)]="t.maxTrainees" required min="1" />
      </div>
      <div>
        <label>Start</label
        ><input type="date" name="startDate" [(ngModel)]="t.startDate" required />
      </div>
      <div>
        <label>End</label><input type="date" name="endDate" [(ngModel)]="t.endDate" required />
      </div>
      <div>
        <label>Trainer</label><input name="trainerName" [(ngModel)]="t.trainerName" required />
      </div>
      <div><label>Venue</label><input name="venue" [(ngModel)]="t.venue" required /></div>
      <button type="submit">Save</button>
    </form>
  `,
})
export class AddTrainingComponent {
  t: Partial<Training> = {};

  constructor(private router: Router) {}

  save(form: NgForm) {
    if (form.invalid) return;
    TRAININGS.push(this.t as Training);
    this.router.navigate(['/trainings']);
  }
}
