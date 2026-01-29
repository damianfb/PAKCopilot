import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Horarios</mat-card-title>
        <mat-card-subtitle>Planificación de viajes por chofer y día</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>Módulo de Horarios - En desarrollo</p>
      </mat-card-content>
    </mat-card>
  `
})
export class HorariosComponent {}
