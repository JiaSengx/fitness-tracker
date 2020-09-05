import { AuthGuard } from './auth/auth.guard';
import { TrainingComponent } from './training/training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'training',
    loadChildren: () =>
      import('./training/training.module').then((m) => m.TrainingModule),
    canLoad:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
