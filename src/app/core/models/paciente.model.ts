/**
 * Obra Social (Health Insurance) interface
 * Represents a health insurance provider with billing rates
 */
export interface ObraSocial {
  codigo: string;
  nombre: string;
  cuit: string;
  valorKmConDependencia: number;
  valorKmSinDependencia: number;
}

/**
 * Service transfer type
 */
export type TipoServicio = 'ESCUELA' | 'TERAPIAS' | 'C.E.T.' | 'TRATAMIENTOS' | 'HIDROTERAPIA';

/**
 * Dependency status
 */
export type Dependencia = 'C/DEPEN' | 'S/DEPEN';

/**
 * Transfer service interface
 * Represents a transport service for a patient
 */
export interface ServicioTraslado {
  tipo: TipoServicio;
  especial?: boolean;
  asistencias: number;
  kmDiario: number;
  kmMensual: number;
  valorViaje: number;
  monto: number;
}

/**
 * Patient interface
 * Main entity representing a patient in the portfolio
 */
export interface Paciente {
  id: number;
  apellidos: string;
  nombres: string;
  dni: number;
  obraSocial: ObraSocial;
  telefono: string;
  responsable: string;
  domicilioParticular: string;
  escuelaDomicilio?: string;
  centroTerapiaDomicilio?: string;
  diasAsistenciaEscuela?: string;
  diasAsistenciaTerapia?: string;
  numeroAfiliado?: string;
  dependencia: Dependencia;
  servicios: ServicioTraslado[];
}
