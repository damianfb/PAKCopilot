import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cobranza',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Cobranza</mat-card-title>
        <mat-card-subtitle>Seguimiento de pagos y recibos</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Módulo de Cobranza - En desarrollo</p>
      </mat-card-content>
    </mat-card>
  `
})
export class CobranzaComponent {}
