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
  {
    path: 'robotics/apply',
    loadComponent: () =>
      import('./pages/form/form.component').then(
        (m) => m.FormComponent
      ),
  },
  { path: '', redirectTo: 'robotics', pathMatch: 'full' },
  { path: '**', redirectTo: 'robotics' },
];
