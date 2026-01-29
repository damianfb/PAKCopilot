import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'cartera',
    loadChildren: () => import('./features/cartera/cartera.routes').then(m => m.CARTERA_ROUTES)
  },
  {
    path: 'horarios',
    loadComponent: () => import('./features/horarios/horarios.component').then(m => m.HorariosComponent)
  },
  {
    path: 'facturacion',
    loadComponent: () => import('./features/facturacion/facturacion.component').then(m => m.FacturacionComponent)
  },
  {
    path: 'cobranza',
    loadComponent: () => import('./features/cobranza/cobranza.component').then(m => m.CobranzaComponent)
  },
  {
    path: 'presupuesto',
    loadComponent: () => import('./features/presupuesto/presupuesto.component').then(m => m.PresupuestoComponent)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
