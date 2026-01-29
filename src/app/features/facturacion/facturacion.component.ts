import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-facturacion',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Facturación</mat-card-title>
        <mat-card-subtitle>Gestión de facturas y liquidaciones</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Módulo de Facturación - En desarrollo</p>
      </mat-card-content>
    </mat-card>
  `
})
export class FacturacionComponent {}
