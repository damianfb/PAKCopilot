import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CarteraService } from '../cartera.service';
import { Paciente, ObraSocial } from '../../../core/models/paciente.model';

/**
 * CarteraFormComponent
 * Form for creating and editing patients
 * Uses Reactive Forms with validation
 */
@Component({
  selector: 'app-cartera-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ isEditMode() ? 'Editar Paciente' : 'Nuevo Paciente' }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="pacienteForm" (ngSubmit)="onSubmit()">
          <div class="form-row">
            <mat-form-field appearance="outline">
              <mat-label>Apellidos</mat-label>
              <input matInput formControlName="apellidos" required>
              @if (pacienteForm.get('apellidos')?.hasError('required') && pacienteForm.get('apellidos')?.touched) {
                <mat-error>Apellidos es requerido</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Nombres</mat-label>
              <input matInput formControlName="nombres" required>
              @if (pacienteForm.get('nombres')?.hasError('required') && pacienteForm.get('nombres')?.touched) {
                <mat-error>Nombres es requerido</mat-error>
              }
            </mat-form-field>
          </div>

          <div class="form-row">
            <mat-form-field appearance="outline">
              <mat-label>DNI</mat-label>
              <input matInput type="number" formControlName="dni" required>
              @if (pacienteForm.get('dni')?.hasError('required') && pacienteForm.get('dni')?.touched) {
                <mat-error>DNI es requerido</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Teléfono</mat-label>
              <input matInput formControlName="telefono" required>
            </mat-form-field>
          </div>

          <div class="form-row">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Obra Social</mat-label>
              <mat-select formControlName="obraSocialCodigo" required>
                @for (os of obrasSociales; track os.codigo) {
                  <mat-option [value]="os.codigo">{{ os.nombre }}</mat-option>
                }
              </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Dependencia</mat-label>
              <mat-select formControlName="dependencia" required>
                <mat-option value="C/DEPEN">Con Dependencia</mat-option>
                <mat-option value="S/DEPEN">Sin Dependencia</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Responsable</mat-label>
            <input matInput formControlName="responsable" required>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Domicilio Particular</mat-label>
            <textarea matInput formControlName="domicilioParticular" rows="2" required></textarea>
          </mat-form-field>

          <div class="form-actions">
            <button mat-raised-button type="button" (click)="onCancel()">Cancelar</button>
            <button mat-raised-button color="primary" type="submit" [disabled]="!pacienteForm.valid">
              {{ isEditMode() ? 'Guardar Cambios' : 'Crear Paciente' }}
            </button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      max-width: 800px;
      margin: 0 auto;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .full-width {
      width: 100%;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 24px;
    }
  `]
})
export class CarteraFormComponent implements OnInit {
  pacienteForm!: FormGroup;
  isEditMode = signal<boolean>(false);
  pacienteId = signal<number | null>(null);
  obrasSociales: ObraSocial[] = [];

  constructor(
    private fb: FormBuilder,
    private carteraService: CarteraService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obrasSociales = this.carteraService.getObrasSociales();
    this.initForm();
    this.checkEditMode();
  }

  initForm(): void {
    this.pacienteForm = this.fb.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      obraSocialCodigo: ['', Validators.required],
      dependencia: ['', Validators.required],
      responsable: ['', Validators.required],
      domicilioParticular: ['', Validators.required]
    });
  }

  checkEditMode(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.pacienteId.set(+id);
      this.loadPaciente(+id);
    }
  }

  loadPaciente(id: number): void {
    const paciente = this.carteraService.getPacienteById(id);
    if (paciente) {
      this.pacienteForm.patchValue({
        apellidos: paciente.apellidos,
        nombres: paciente.nombres,
        dni: paciente.dni,
        telefono: paciente.telefono,
        obraSocialCodigo: paciente.obraSocial.codigo,
        dependencia: paciente.dependencia,
        responsable: paciente.responsable,
        domicilioParticular: paciente.domicilioParticular
      });
    }
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      const formValue = this.pacienteForm.value;
      const obraSocial = this.obrasSociales.find(os => os.codigo === formValue.obraSocialCodigo);
      
      if (!obraSocial) {
        console.error('Obra social no encontrada');
        return;
      }

      // Preserve existing servicios when editing
      const existingPaciente = this.isEditMode() && this.pacienteId() 
        ? this.carteraService.getPacienteById(this.pacienteId()!)
        : null;

      const paciente: Paciente = {
        id: this.pacienteId() || 0,
        apellidos: formValue.apellidos,
        nombres: formValue.nombres,
        dni: formValue.dni,
        telefono: formValue.telefono,
        obraSocial: obraSocial,
        dependencia: formValue.dependencia,
        responsable: formValue.responsable,
        domicilioParticular: formValue.domicilioParticular,
        servicios: existingPaciente?.servicios || []
      };

      if (this.isEditMode()) {
        this.carteraService.updatePaciente(paciente);
      } else {
        this.carteraService.addPaciente(paciente);
      }

      this.router.navigate(['/cartera']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/cartera']);
  }
}
