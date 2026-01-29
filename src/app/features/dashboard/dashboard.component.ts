import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

/**
 * DashboardComponent
 * Main dashboard showing system overview and statistics
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <p class="subtitle">Resumen general del sistema</p>

      <div class="stats-grid">
        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-icon" style="background-color: #e3f2fd;">
              <mat-icon style="color: #1976d2;">people</mat-icon>
            </div>
            <h3>Pacientes Activos</h3>
            <div class="stat-value">42</div>
            <p class="stat-change positive">+3 este mes</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-icon" style="background-color: #e8f5e9;">
              <mat-icon style="color: #388e3c;">attach_money</mat-icon>
            </div>
            <h3>Facturación Mensual</h3>
            <div class="stat-value">$1.845.320</div>
            <p class="stat-change positive">+12% vs mes anterior</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-icon" style="background-color: #fff3e0;">
              <mat-icon style="color: #f57c00;">schedule</mat-icon>
            </div>
            <h3>Cobranzas Pendientes</h3>
            <div class="stat-value">$523.480</div>
            <p class="stat-change negative">8 facturas pendientes</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card">
          <mat-card-content>
            <div class="stat-icon" style="background-color: #f3e5f5;">
              <mat-icon style="color: #7b1fa2;">route</mat-icon>
            </div>
            <h3>Km Recorridos</h3>
            <div class="stat-value">2.847</div>
            <p class="stat-change positive">+180 km este mes</p>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card class="info-card">
        <mat-card-content>
          <h2>Bienvenido a PAK Copilot</h2>
          <p>Sistema de gestión integral para traslados de pacientes con discapacidad.</p>
          <p>Use el menú lateral para navegar entre los diferentes módulos del sistema.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-container {
      h1 {
        margin-bottom: 8px;
        color: var(--text-primary);
      }

      .subtitle {
        color: var(--text-secondary);
        margin-bottom: 32px;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .stat-card {
      mat-card-content {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .stat-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;

        mat-icon {
          font-size: 28px;
          width: 28px;
          height: 28px;
        }
      }

      h3 {
        margin: 0;
        font-size: 14px;
        color: var(--text-secondary);
        font-weight: 500;
      }

      .stat-value {
        font-size: 28px;
        font-weight: 600;
        color: var(--text-primary);
      }

      .stat-change {
        font-size: 13px;
        margin: 0;

        &.positive {
          color: #388e3c;
        }

        &.negative {
          color: #d32f2f;
        }
      }
    }

    .info-card {
      mat-card-content {
        h2 {
          margin-top: 0;
          color: var(--primary);
        }

        p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      }
    }
  `]
})
export class DashboardComponent {}
