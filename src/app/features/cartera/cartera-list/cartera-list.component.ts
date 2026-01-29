import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Paciente } from '../../../core/models/paciente.model';
import { CarteraService } from '../cartera.service';

/**
 * CarteraListComponent
 * Displays a table of patients with filtering, search, and pagination
 */
@Component({
  selector: 'app-cartera-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    MatPaginatorModule
  ],
  templateUrl: './cartera-list.component.html',
  styleUrls: ['./cartera-list.component.scss']
})
export class CarteraListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'apellidos', 'nombres', 'dni', 'obraSocial', 'telefono', 'dependencia', 'actions'];
  
  pacientes = signal<Paciente[]>([]);
  searchTerm = signal<string>('');
  selectedObraSocial = signal<string>('');
  selectedDependencia = signal<string>('');
  
  // Pagination
  pageSize = signal<number>(10);
  pageIndex = signal<number>(0);
  
  // Computed values
  filteredPacientes = computed(() => {
    let result = this.pacientes();
    
    // Search filter
    const search = this.searchTerm().toLowerCase();
    if (search) {
      result = result.filter(p => 
        p.apellidos.toLowerCase().includes(search) ||
        p.nombres.toLowerCase().includes(search) ||
        p.dni.toString().includes(search)
      );
    }
    
    // Obra Social filter
    if (this.selectedObraSocial()) {
      result = result.filter(p => p.obraSocial.codigo === this.selectedObraSocial());
    }
    
    // Dependencia filter
    if (this.selectedDependencia()) {
      result = result.filter(p => p.dependencia === this.selectedDependencia());
    }
    
    return result;
  });
  
  paginatedPacientes = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredPacientes().slice(start, end);
  });
  
  totalPacientes = computed(() => this.filteredPacientes().length);
  
  obrasSociales: string[] = [];

  constructor(private carteraService: CarteraService) {}

  ngOnInit(): void {
    this.loadPacientes();
    this.loadObrasSociales();
  }

  loadPacientes(): void {
    this.pacientes.set(this.carteraService.getPacientes());
  }

  loadObrasSociales(): void {
    const obrasSociales = this.carteraService.getObrasSociales();
    this.obrasSociales = obrasSociales.map(os => os.codigo);
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
    this.pageIndex.set(0); // Reset to first page
  }

  onObraSocialChange(value: string): void {
    this.selectedObraSocial.set(value);
    this.pageIndex.set(0);
  }

  onDependenciaChange(value: string): void {
    this.selectedDependencia.set(value);
    this.pageIndex.set(0);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedObraSocial.set('');
    this.selectedDependencia.set('');
    this.pageIndex.set(0);
  }

  calculateMontoTotal(paciente: Paciente): number {
    return paciente.servicios.reduce((sum, servicio) => sum + servicio.monto, 0);
  }
}
