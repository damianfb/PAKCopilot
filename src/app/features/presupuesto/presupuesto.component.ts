import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Presupuesto</mat-card-title>
        <mat-card-subtitle>Control de ingresos y egresos</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Módulo de Presupuesto - En desarrollo</p>
      </mat-card-content>
    </mat-card>
  `
})
export class PresupuestoComponent {}
