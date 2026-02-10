import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'robotics',
    loadComponent: () =>
      import('./pages/robotics/robotics.component').then(
        (m) => m.RoboticsComponent
      ),
  },
  {
    path: 'robotics/renewal',
    loadComponent: () =>
      import('./pages/renewal/renewal.component').then(
        (m) => m.RenewalComponent
      ),
  },
  { path: '', redirectTo: 'robotics', pathMatch: 'full' },
  { path: '**', redirectTo: 'robotics' },
];
