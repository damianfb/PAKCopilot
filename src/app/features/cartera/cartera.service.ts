import { Injectable, signal } from '@angular/core';
import { Paciente, ObraSocial } from '../../core/models/paciente.model';

/**
 * CarteraService
 * Manages patient portfolio CRUD operations
 * Uses Angular Signals for reactive state management
 */
@Injectable({
  providedIn: 'root'
})
export class CarteraService {
  private pacientesSignal = signal<Paciente[]>(this.getMockPacientes());
  
  pacientes = this.pacientesSignal.asReadonly();

  /**
   * Get all patients
   */
  getPacientes(): Paciente[] {
    return this.pacientesSignal();
  }

  /**
   * Get patient by ID
   */
  getPacienteById(id: number): Paciente | undefined {
    return this.pacientesSignal().find(p => p.id === id);
  }

  /**
   * Add new patient
   */
  addPaciente(paciente: Paciente): void {
    const newId = Math.max(...this.pacientesSignal().map(p => p.id), 0) + 1;
    const newPaciente = { ...paciente, id: newId };
    this.pacientesSignal.update(pacientes => [...pacientes, newPaciente]);
  }

  /**
   * Update existing patient
   */
  updatePaciente(paciente: Paciente): void {
    this.pacientesSignal.update(pacientes =>
      pacientes.map(p => p.id === paciente.id ? paciente : p)
    );
  }

  /**
   * Delete patient
   */
  deletePaciente(id: number): void {
    this.pacientesSignal.update(pacientes =>
      pacientes.filter(p => p.id !== id)
    );
  }

  /**
   * Get available obras sociales
   */
  getObrasSociales(): ObraSocial[] {
    return MOCK_OBRAS_SOCIALES;
  }

  /**
   * Generate mock patients data
   */
  private getMockPacientes(): Paciente[] {
    return MOCK_PACIENTES;
  }
}

// Mock data for Obras Sociales
const MOCK_OBRAS_SOCIALES: ObraSocial[] = [
  {
    codigo: 'OSMATA',
    nombre: 'OSMATA',
    cuit: '30-54678912-3',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'OSECAC',
    nombre: 'OSECAC',
    cuit: '30-54678913-4',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'OSPSA',
    nombre: 'OSPSA',
    cuit: '30-54678914-5',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'PASTELEROS',
    nombre: 'PASTELEROS',
    cuit: '30-54678915-6',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'APM',
    nombre: 'APM',
    cuit: '30-54678916-7',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'PARQUE_SALUD',
    nombre: 'PARQUE SALUD',
    cuit: '30-54678917-8',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'LUZ_Y_FZA',
    nombre: 'LUZ Y FZA',
    cuit: '30-54678918-9',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'OSCCPTAC',
    nombre: 'OSCCPTAC',
    cuit: '30-54678919-0',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  },
  {
    codigo: 'SWISS_MEDICAL',
    nombre: 'SWISS MEDICAL',
    cuit: '30-54678920-1',
    valorKmConDependencia: 833.79,
    valorKmSinDependencia: 617.62
  }
];

// Mock data for Pacientes
const MOCK_PACIENTES: Paciente[] = [
  {
    id: 1,
    apellidos: 'ALANIS',
    nombres: 'TOMAS SEBASTIAN',
    dni: 55284684,
    obraSocial: MOCK_OBRAS_SOCIALES[0], // OSMATA
    telefono: '011-4567-8901',
    responsable: 'María Alanis',
    domicilioParticular: 'Av. Rivadavia 1234, CABA',
    escuelaDomicilio: 'Escuela Especial N°1, San Martín 567',
    diasAsistenciaEscuela: 'Lunes a Viernes',
    numeroAfiliado: '123456789',
    dependencia: 'C/DEPEN',
    servicios: [
      {
        tipo: 'ESCUELA',
        especial: true,
        asistencias: 20,
        kmDiario: 28,
        kmMensual: 560,
        valorViaje: 833.79,
        monto: 467163.2
      }
    ]
  },
  {
    id: 2,
    apellidos: 'CONSALVO ANTONINI',
    nombres: 'ABEL',
    dni: 47352009,
    obraSocial: MOCK_OBRAS_SOCIALES[1], // OSECAC
    telefono: '011-4567-8902',
    responsable: 'Laura Consalvo',
    domicilioParticular: 'Calle Falsa 456, CABA',
    escuelaDomicilio: 'Escuela Especial N°2, Belgrano 890',
    diasAsistenciaEscuela: 'Lunes a Viernes',
    numeroAfiliado: '987654321',
    dependencia: 'C/DEPEN',
    servicios: [
      {
        tipo: 'ESCUELA',
        especial: true,
        asistencias: 20,
        kmDiario: 25,
        kmMensual: 500,
        valorViaje: 833.79,
        monto: 416895.0
      }
    ]
  },
  {
    id: 3,
    apellidos: 'RODRIGUEZ',
    nombres: 'MARIA SOL',
    dni: 42567890,
    obraSocial: MOCK_OBRAS_SOCIALES[2], // OSPSA
    telefono: '011-4567-8903',
    responsable: 'Juan Rodriguez',
    domicilioParticular: 'San Juan 789, CABA',
    centroTerapiaDomicilio: 'Centro de Terapias ABC, Moreno 123',
    diasAsistenciaTerapia: 'Lunes, Miércoles, Viernes',
    numeroAfiliado: '456789123',
    dependencia: 'S/DEPEN',
    servicios: [
      {
        tipo: 'TERAPIAS',
        asistencias: 20,
        kmDiario: 22,
        kmMensual: 440,
        valorViaje: 617.62,
        monto: 271752.8
      }
    ]
  },
  {
    id: 4,
    apellidos: 'MARTINEZ',
    nombres: 'JUAN PABLO',
    dni: 38456789,
    obraSocial: MOCK_OBRAS_SOCIALES[1], // OSECAC
    telefono: '011-4567-8904',
    responsable: 'Ana Martinez',
    domicilioParticular: 'Corrientes 234, CABA',
    escuelaDomicilio: 'Escuela Especial N°3, Alem 456',
    diasAsistenciaEscuela: 'Lunes a Viernes',
    numeroAfiliado: '789456123',
    dependencia: 'C/DEPEN',
    servicios: [
      {
        tipo: 'ESCUELA',
        especial: true,
        asistencias: 20,
        kmDiario: 20,
        kmMensual: 400,
        valorViaje: 833.79,
        monto: 333516.0
      }
    ]
  },
  {
    id: 5,
    apellidos: 'FERNANDEZ',
    nombres: 'LUCAS GABRIEL',
    dni: 51234567,
    obraSocial: MOCK_OBRAS_SOCIALES[0], // OSMATA
    telefono: '011-4567-8905',
    responsable: 'Marta Fernandez',
    domicilioParticular: 'Tucumán 567, CABA',
    escuelaDomicilio: 'Escuela Especial N°4, Salta 789',
    diasAsistenciaEscuela: 'Lunes a Viernes',
    numeroAfiliado: '321654987',
    dependencia: 'S/DEPEN',
    servicios: [
      {
        tipo: 'ESCUELA',
        asistencias: 20,
        kmDiario: 18,
        kmMensual: 360,
        valorViaje: 617.62,
        monto: 222343.2
      }
    ]
  }
];
