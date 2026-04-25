import { Routes } from '@angular/router';
import { AddTrainingComponent } from './add-training.component';
import { TrainingListComponent } from './training-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/trainings', pathMatch: 'full' },
  { path: 'add-training', component: AddTrainingComponent },
  { path: 'trainings', component: TrainingListComponent },
];
