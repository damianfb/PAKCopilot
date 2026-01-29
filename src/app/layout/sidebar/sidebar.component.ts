import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

/**
 * Sidebar navigation component
 * Displays main navigation menu for the application
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  template: `
    <div class="sidebar-logo">
      <mat-icon class="logo-icon">local_shipping</mat-icon>
      <span class="logo-text">PAK TRASLADOS</span>
    </div>

    <mat-nav-list class="sidebar-nav">
      <a mat-list-item routerLink="/dashboard" routerLinkActive="active">
        <mat-icon matListItemIcon>dashboard</mat-icon>
        <span matListItemTitle>Dashboard</span>
      </a>
      <a mat-list-item routerLink="/cartera" routerLinkActive="active">
        <mat-icon matListItemIcon>people</mat-icon>
        <span matListItemTitle>Cartera de Pacientes</span>
      </a>
      <a mat-list-item routerLink="/horarios" routerLinkActive="active">
        <mat-icon matListItemIcon>schedule</mat-icon>
        <span matListItemTitle>Horarios</span>
      </a>
      <a mat-list-item routerLink="/facturacion" routerLinkActive="active">
        <mat-icon matListItemIcon>receipt</mat-icon>
        <span matListItemTitle>Facturación</span>
      </a>
      <a mat-list-item routerLink="/cobranza" routerLinkActive="active">
        <mat-icon matListItemIcon>payments</mat-icon>
        <span matListItemTitle>Cobranza</span>
      </a>
      <a mat-list-item routerLink="/presupuesto" routerLinkActive="active">
        <mat-icon matListItemIcon>assessment</mat-icon>
        <span matListItemTitle>Presupuesto</span>
      </a>
    </mat-nav-list>
  `,
  styles: [`
    .sidebar-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 20px;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .logo-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    .sidebar-nav {
      padding-top: 16px;
    }

    .sidebar-nav a {
      color: rgba(255, 255, 255, 0.7);
      margin: 4px 12px;
      border-radius: 8px;
      transition: all 0.2s;
    }

    .sidebar-nav a:hover {
      background-color: var(--sidebar-hover);
      color: white;
    }

    .sidebar-nav a.active {
      background-color: var(--primary);
      color: white;
    }

    :host ::ng-deep .mat-mdc-list-item-icon {
      color: inherit;
    }
  `]
})
export class SidebarComponent {}
