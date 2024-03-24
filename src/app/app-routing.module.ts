import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListScheduleComponent } from './components/schedule/list-schedule/list-schedule.component';
import { AddToScheduleComponent } from './components/schedule/add-to-schedule/add-to-schedule.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listSchedule',
    pathMatch: 'full'
  },
  {
    path: 'listSchedule',
    component: ListScheduleComponent
  },
  {
    path: 'addToSchedule',
    component: AddToScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
