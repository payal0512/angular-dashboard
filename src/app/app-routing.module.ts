import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path: 'add-team',
    component: AddTeamComponent,
  },
  {
    path: '',
    component: TeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [AddTeamComponent];
