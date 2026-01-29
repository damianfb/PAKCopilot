# PAK Copilot - Sistema de Gestión de Traslados

Sistema de gestión integral para **PAK Traslados** - empresa de transporte de pacientes con discapacidad.

## 🚀 Tecnologías

- **Angular 19** (latest patched version) with standalone components
- **Angular Material** for UI
- **TypeScript 5.7** with strict mode
- **PWA** (Progressive Web App) configured
- **Signals** for reactive state management
- **Lazy Loading** for optimization
- **Reactive Forms** with validation

## 📋 Descripción del Negocio

PAK TRASLADOS es un sistema para la gestión integral de:
- **Servicio principal**: Transporte de pacientes con discapacidad desde domicilios a escuelas especiales, centros de terapias (C.E.T.), tratamientos e hidroterapia
- **Clientes**: Obras Sociales (OSECAC, OSMATA, OSPSA, PASTELEROS, APM, SWISS MEDICAL, etc.)
- **Facturación**: Por kilómetro recorrido con valores diferenciados:
  - Con Dependencia: $833.79/km
  - Sin Dependencia: $617.62/km

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── core/              # Servicios singleton, guards, interceptors
│   │   └── models/        # Interfaces TypeScript
│   ├── shared/            # Componentes, pipes, directivas compartidas
│   ├── features/          # Módulos de funcionalidad
│   │   ├── dashboard/     # Dashboard principal
│   │   ├── cartera/       # Gestión de pacientes (CRUD completo)
│   │   ├── horarios/      # Planificación de horarios (placeholder)
│   │   ├── facturacion/   # Facturación (placeholder)
│   │   ├── cobranza/      # Cobranza (placeholder)
│   │   └── presupuesto/   # Presupuesto (placeholder)
│   └── layout/            # Header, sidebar
├── assets/                # Recursos estáticos
└── environments/          # Configuración por ambiente
```

## 🔧 Instalación

### Prerequisitos

- Node.js 20+
- npm 10+

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/damianfb/PAKCopilot.git
cd PAKCopilot
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## 📦 Scripts disponibles

- `npm start` - Ejecuta el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run watch` - Compila en modo watch
- `npm run format` - Formatea el código con Prettier
- `npm test` - Ejecuta los tests

## 📱 Módulos Implementados

### ✅ Módulo de Cartera (Completo - Bloque 1)

El módulo de **Cartera de Pacientes** está completamente implementado con:

#### Componentes:
1. **CarteraListComponent**: 
   - Tabla con datos de pacientes
   - Filtros por: búsqueda libre, obra social, dependencia
   - Paginación configurable
   - Estadísticas en tiempo real

2. **CarteraFormComponent**:
   - Formulario reactivo con validaciones
   - Crear nuevo paciente
   - Editar paciente existente
   - Validaciones de campos requeridos

3. **CarteraDetailComponent**:
   - Vista detallada de paciente
   - Información personal, obra social, domicilios
   - Servicios de traslado asociados

#### Características técnicas:
- ✅ Uso de **Signals** para estado reactivo (Angular 17+)
- ✅ **Computed signals** para filtros y paginación
- ✅ **Reactive Forms** con validaciones
- ✅ Servicio con métodos CRUD (mock data)
- ✅ Lazy loading del módulo
- ✅ Interfaces tipadas para todos los modelos
- ✅ Comentarios JSDoc en servicios públicos
- ✅ Principio de Single Responsibility

#### Modelos de datos:
```typescript
interface Paciente {
  id: number;
  apellidos: string;
  nombres: string;
  dni: number;
  obraSocial: ObraSocial;
  telefono: string;
  responsable: string;
  domicilioParticular: string;
  dependencia: 'C/DEPEN' | 'S/DEPEN';
  servicios: ServicioTraslado[];
}
```

#### Mock Data incluido:
- 5 pacientes de ejemplo con datos completos
- 9 obras sociales configuradas
- Servicios de traslado con cálculos de montos

### 🔲 Módulos Pendientes (Bloques futuros)

Los siguientes módulos están creados como placeholders y serán implementados en bloques futuros:

- **Horarios**: Planificación de viajes por chofer y día
- **Facturación**: Gestión de facturas y liquidaciones
- **Cobranza**: Seguimiento de pagos y recibos
- **Presupuesto**: Control de ingresos y egresos

## 🎨 Layout y Navegación

- ✅ **Sidebar** con navegación a todos los módulos
- ✅ **Header** con logo y acciones de usuario
- ✅ Diseño **responsive** (mobile-first)
- ✅ Angular Material components
- ✅ Sistema de colores personalizado

## 🔐 PWA (Progressive Web App)

La aplicación está configurada como PWA:
- Service Worker configurado
- Manifest con iconos (placeholder)
- Cacheo de assets
- Funciona offline (después de primera carga)

## 🧪 Calidad de Código

- TypeScript con modo `strict`
- Prettier configurado para formateo consistente
- Estructura modular y escalable
- Código limpio y documentado

## 📚 Próximos Pasos (Bloques futuros)

1. **Bloque 2**: Implementar módulo de Horarios
2. **Bloque 3**: Implementar módulo de Facturación
3. **Bloque 4**: Implementar módulos de Cobranza y Presupuesto
4. **Backend**: API REST con base de datos
5. **Autenticación**: Sistema de login y permisos
6. **Integración AFIP**: Facturación electrónica
7. **Reportes**: Exportación a PDF/Excel

## 🗂️ Prototipo HTML

El prototipo HTML estático original se encuentra en la carpeta `prototype-backup/` como referencia.

## 👥 Autor

Desarrollado para **PAK TRASLADOS** - Sistema de gestión de traslados de pacientes

---

**Versión**: 1.0.0 - Bloque 1 (Módulo Cartera)  
**Fecha**: Enero 2025  
**Framework**: Angular 19+ (latest patched version) with standalone components  
**Security**: All known Angular vulnerabilities patched (XSRF, XSS)

