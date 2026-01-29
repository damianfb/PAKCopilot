import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

/**
 * Root component for PAK Copilot application
 * Provides main layout with sidebar navigation
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    SidebarComponent,
    HeaderComponent
  ],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav mode="side" opened class="app-sidenav">
        <app-sidebar></app-sidebar>
      </mat-sidenav>
      
      <mat-sidenav-content>
        <app-header></app-header>
        <div class="main-content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .app-container {
      height: 100vh;
    }

    .app-sidenav {
      width: 260px;
      background-color: var(--sidebar-bg);
      color: white;
    }

    .main-content {
      padding: 24px;
      min-height: calc(100vh - 64px);
    }
  `]
})
export class AppComponent {
  title = 'PAK Copilot';
}
