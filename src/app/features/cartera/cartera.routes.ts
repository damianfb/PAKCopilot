import { Routes } from '@angular/router';
import { CarteraListComponent } from './cartera-list/cartera-list.component';
import { CarteraFormComponent } from './cartera-form/cartera-form.component';
import { CarteraDetailComponent } from './cartera-detail/cartera-detail.component';

export const CARTERA_ROUTES: Routes = [
  {
    path: '',
    component: CarteraListComponent
  },
  {
    path: 'nuevo',
    component: CarteraFormComponent
  },
  {
    path: ':id',
    component: CarteraDetailComponent
  },
  {
    path: ':id/editar',
    component: CarteraFormComponent
  }
];
