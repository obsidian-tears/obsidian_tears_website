import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./../../../app/components/layout/layout-component/layout.routes')
      .then(r => r.LAYOUT_ROUTES)
  }
];