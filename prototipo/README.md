# PAK TRASLADOS - Prototipo HTML/CSS

Prototipo estático completo del sistema de gestión de traslados de pacientes con discapacidad o necesidades especiales en Córdoba, Argentina.

## Descripción

Este prototipo sirve para validar el modelo de datos y la experiencia de usuario con los stakeholders del negocio antes de implementar la aplicación completa.

## Estructura del Proyecto

```
prototipo/
├── css/
│   └── styles.css          # Sistema de diseño completo con variables CSS
├── index.html              # Dashboard principal
├── pacientes.html          # Lista de pacientes con filtros
├── paciente-detalle.html   # Ficha completa del paciente
├── paciente-nuevo.html     # Formulario nuevo/editar paciente
└── liquidacion.html        # Liquidación mensual
```

## Páginas Incluidas

### 1. Dashboard (index.html)
- Estadísticas principales (pacientes activos, carpetas, KM totales, total mes)
- Gráfico de distribución por Obra Social
- Acciones rápidas
- Alertas y notificaciones
- Top 5 pacientes por liquidación

### 2. Lista de Pacientes (pacientes.html)
- Filtros por nombre/DNI, Obra Social, Dependencia, Estado
- Tabla con información completa de pacientes
- Paginación
- Filas clickeables que llevan al detalle

### 3. Detalle del Paciente (paciente-detalle.html)
- Datos personales completos
- Información de cobertura
- Traslados configurados (hasta 2)
- Cálculos de liquidación por traslado
- Resumen de liquidación mensual

### 4. Nuevo Paciente (paciente-nuevo.html)
- Formulario completo con validaciones
- Sección de información personal
- Sección de cobertura
- Configuración de traslados (hasta 2)
- Selección de días de asistencia

### 5. Liquidación Mensual (liquidacion.html)
- Filtros por período, Obra Social y Estado
- Estadísticas resumen
- Gráfico de distribución
- Tabla detallada de liquidación por paciente
- Opciones de exportación

## Sistema de Diseño

### Colores
- **Primary**: #2563eb (Azul principal)
- **Secondary**: #10b981 (Verde éxito)
- **Warning**: #f59e0b (Amarillo alerta)
- **Danger**: #ef4444 (Rojo error)
- **Sidebar**: #1e293b (Fondo oscuro)

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Títulos**: 24px Bold
- **Subtítulos**: 18px Semibold
- **Cuerpo**: 14px Regular
- **Labels**: 12px Medium

### Componentes
- Border radius: 8px para cards, 6px para botones/inputs
- Sombras sutiles para elevación
- Badges con colores semánticos
- Tablas con hover y navegación por teclado
- Sidebar fijo con navegación activa

## Reglas de Negocio Implementadas

- **Valor KM sin dependencia**: $617.62
- **Valor KM con dependencia**: $833.79
- **Fórmula**: Monto = KM/día × Días asistidos × Valor KM
- **Resolución vigente**: Resol. 2/2025

## Datos de Ejemplo

El prototipo incluye datos reales de ejemplo de 10 pacientes con diferentes obras sociales (OSECAC, OSMATA, OSPSA, APROSS) y configuraciones de traslados.

### Distribución por Obra Social
- OSECAC: 15 pacientes (52%)
- OSMATA: 5 pacientes (24%)
- OSPSA: 4 pacientes (17%)
- Otros: 5 pacientes (7%)

## Características Técnicas

- ✅ HTML5 semántico
- ✅ CSS moderno con variables y flexbox/grid
- ✅ Responsive (desktop first, con breakpoints para tablet/mobile)
- ✅ Sin JavaScript requerido (solo navegación entre páginas)
- ✅ Links funcionales entre todas las páginas
- ✅ Fuente Inter desde Google Fonts
- ✅ Accesibilidad: navegación por teclado en tablas

## Cómo Visualizar

1. Abrir cualquier archivo HTML en un navegador web moderno
2. Navegar entre páginas usando los enlaces del sidebar o los botones
3. La navegación funciona correctamente con rutas relativas

### Opción con servidor local (recomendado)

```bash
cd prototipo
python3 -m http.server 8080
```

Luego abrir en el navegador: `http://localhost:8080/index.html`

## Responsive Design

El prototipo está optimizado para:
- **Desktop**: ≥1024px (diseño completo)
- **Tablet**: 768px - 1024px (ajustes de layout)
- **Mobile**: <768px (vista adaptada)

## Próximos Pasos

Este prototipo servirá como base para:
1. Validación con stakeholders del negocio
2. Refinamiento del modelo de datos
3. Identificación de casos de uso adicionales
4. Implementación de la aplicación funcional

## Tecnologías Utilizadas

- HTML5
- CSS3 (Variables, Flexbox, Grid)
- Google Fonts (Inter)

## Autor

Desarrollado para PAK TRASLADOS - Sistema de gestión de traslados de pacientes
