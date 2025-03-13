# Arquitectura del Proyecto ARQ DE VIDA

## Estructura de Layouts y Pages

```
src/
├── app/                    
│   ├── layout.tsx         # Layout principal (RootLayout)
│   ├── page.tsx           # Página principal (Home)
│   │
│   └── (marketing)/       # Grupo de rutas para contenido del sitio
       ├── about/          # Ruta "Sobre Mí"
       │   └── page.tsx
       ├── services/       # Ruta "Servicios"
       │   └── page.tsx
       ├── resources/      # Ruta "Recursos"
       │   └── page.tsx
       └── layout.tsx      # Layout compartido para secciones informativas
```

### Uso de Layouts

1. **RootLayout (`app/layout.tsx`)**
   - Define la estructura base de toda la aplicación
   - Incluye elementos comunes como:
     - Navbar
     - Footer
     - Metadatos globales
     - Fuentes personalizadas
     - Estilos globales

2. **Layout de Marketing (`app/(marketing)/layout.tsx`)**
   - Específico para páginas informativas
   - Incluye elementos como:
     - Breadcrumbs
     - CTAs compartidos
     - Newsletter signup
     - Testimonios

### Uso de Pages

1. **Home (`app/page.tsx`)**
   - Landing page principal
   - Secciones:
     - Hero section
     - Features principales
     - Call-to-actions
     - Testimonios destacados

2. **Páginas de Contenido**
   - `about/page.tsx`: Historia, misión, valores
   - `services/page.tsx`: Servicios ofrecidos
   - `resources/page.tsx`: Recursos y materiales
   - Cada página mantiene su propio diseño específico mientras comparte elementos comunes del layout

### Beneficios de esta Estructura

1. **Simplicidad**
   - Estructura clara y directa
   - Fácil de mantener
   - Sin complejidad innecesaria

2. **Organización**
   - Separación lógica de contenido
   - Agrupación por propósito
   - Navegación intuitiva

3. **Reutilización**
   - Layouts compartidos
   - Componentes comunes
   - Consistencia en UI/UX

4. **Rendimiento**
   - Carga optimizada
   - Caching eficiente
   - Rutas simples

5. **SEO**
   - Estructura clara para buscadores
   - URLs limpias
   - Metadatos organizados

### Convenciones y Mejores Prácticas

1. **Nomenclatura**
   - Componentes: PascalCase
   - Archivos de página: page.tsx
   - Archivos de layout: layout.tsx

2. **Organización**
   - Agrupar páginas relacionadas
   - Mantener layouts simples
   - Componentizar elementos comunes

3. **Contenido**
   - Mantener páginas enfocadas
   - Evitar duplicación
   - Priorizar contenido importante

Esta estructura simplificada nos permite:
- Mantener el código organizado
- Escalar según necesidades futuras
- Facilitar el mantenimiento
- Optimizar el rendimiento