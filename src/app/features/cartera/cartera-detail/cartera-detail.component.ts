import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { Paciente } from '../../../core/models/paciente.model';
import { CarteraService } from '../cartera.service';

/**
 * CarteraDetailComponent
 * Displays detailed information about a specific patient
 */
@Component({
  selector: 'app-cartera-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule
  ],
  template: `
    @if (paciente(); as p) {
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ p.apellidos }}, {{ p.nombres }}</mat-card-title>
          <mat-card-subtitle>DNI: {{ p.dni }}</mat-card-subtitle>
          <div class="header-actions">
            <button mat-raised-button [routerLink]="['/cartera', p.id, 'editar']">
              <mat-icon>edit</mat-icon>
              Editar
            </button>
            <button mat-raised-button routerLink="/cartera">
              <mat-icon>arrow_back</mat-icon>
              Volver
            </button>
          </div>
        </mat-card-header>

        <mat-card-content>
          <div class="detail-section">
            <h3>Información Personal</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Apellidos:</span>
                <span class="value">{{ p.apellidos }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Nombres:</span>
                <span class="value">{{ p.nombres }}</span>
              </div>
              <div class="detail-item">
                <span class="label">DNI:</span>
                <span class="value">{{ p.dni }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Teléfono:</span>
                <span class="value">{{ p.telefono }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Responsable:</span>
                <span class="value">{{ p.responsable }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Dependencia:</span>
                <mat-chip [class]="p.dependencia === 'C/DEPEN' ? 'chip-warning' : 'chip-info'">
                  {{ p.dependencia }}
                </mat-chip>
              </div>
            </div>
          </div>

          <mat-divider></mat-divider>

          <div class="detail-section">
            <h3>Obra Social</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Nombre:</span>
                <span class="value">{{ p.obraSocial.nombre }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Código:</span>
                <span class="value">{{ p.obraSocial.codigo }}</span>
              </div>
              <div class="detail-item">
                <span class="label">CUIT:</span>
                <span class="value">{{ p.obraSocial.cuit }}</span>
              </div>
              @if (p.numeroAfiliado) {
                <div class="detail-item">
                  <span class="label">N° Afiliado:</span>
                  <span class="value">{{ p.numeroAfiliado }}</span>
                </div>
              }
            </div>
          </div>

          <mat-divider></mat-divider>

          <div class="detail-section">
            <h3>Domicilios</h3>
            <div class="detail-grid">
              <div class="detail-item full-width">
                <span class="label">Domicilio Particular:</span>
                <span class="value">{{ p.domicilioParticular }}</span>
              </div>
              @if (p.escuelaDomicilio) {
                <div class="detail-item full-width">
                  <span class="label">Escuela:</span>
                  <span class="value">{{ p.escuelaDomicilio }}</span>
                </div>
              }
              @if (p.centroTerapiaDomicilio) {
                <div class="detail-item full-width">
                  <span class="label">Centro de Terapia:</span>
                  <span class="value">{{ p.centroTerapiaDomicilio }}</span>
                </div>
              }
            </div>
          </div>

          @if (p.servicios.length > 0) {
            <mat-divider></mat-divider>
            <div class="detail-section">
              <h3>Servicios de Traslado</h3>
              @for (servicio of p.servicios; track servicio.tipo) {
                <div class="service-card">
                  <div class="service-header">
                    <h4>{{ servicio.tipo }}</h4>
                    @if (servicio.especial) {
                      <mat-chip class="chip-special">Especial</mat-chip>
                    }
                  </div>
                  <div class="service-details">
                    <div><strong>Asistencias:</strong> {{ servicio.asistencias }}</div>
                    <div><strong>Km Diario:</strong> {{ servicio.kmDiario }} km</div>
                    <div><strong>Km Mensual:</strong> {{ servicio.kmMensual }} km</div>
                    <div><strong>Valor Viaje:</strong> \${{ servicio.valorViaje }}</div>
                    <div class="service-monto"><strong>Monto:</strong> \${{ servicio.monto }}</div>
                  </div>
                </div>
              }
            </div>
          }
        </mat-card-content>
      </mat-card>
    } @else {
      <mat-card>
        <mat-card-content>
          <p>Paciente no encontrado</p>
          <button mat-raised-button routerLink="/cartera">Volver al listado</button>
        </mat-card-content>
      </mat-card>
    }
  `,
  styles: [`
    mat-card {
      max-width: 1000px;
      margin: 0 auto;
    }

    mat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
    }

    .header-actions {
      display: flex;
      gap: 8px;
    }

    .detail-section {
      margin: 24px 0;

      h3 {
        margin-bottom: 16px;
        color: var(--primary);
      }
    }

    .detail-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .detail-item {
      display: flex;
      flex-direction: column;
      gap: 4px;

      &.full-width {
        grid-column: 1 / -1;
      }

      .label {
        font-size: 12px;
        color: #666;
        text-transform: uppercase;
        font-weight: 500;
      }

      .value {
        font-size: 16px;
        color: #333;
      }
    }

    .service-card {
      background-color: #f5f5f5;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;

      .service-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        h4 {
          margin: 0;
          color: var(--primary);
        }
      }

      .service-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;

        .service-monto {
          font-size: 18px;
          color: var(--secondary);
        }
      }
    }

    .chip-warning {
      background-color: #fff3cd;
      color: #856404;
    }

    .chip-info {
      background-color: #d1ecf1;
      color: #0c5460;
    }

    .chip-special {
      background-color: #d4edda;
      color: #155724;
    }

    mat-divider {
      margin: 24px 0;
    }
  `]
})
export class CarteraDetailComponent implements OnInit {
  paciente = signal<Paciente | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private carteraService: CarteraService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const paciente = this.carteraService.getPacienteById(+id);
      this.paciente.set(paciente);
    }
  }
}
