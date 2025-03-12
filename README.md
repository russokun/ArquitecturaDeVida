# Arquitectura del Proyecto ARQ DE VIDA

## Estructura de Directorios

```
src/
├── app/                    # App router de Next.js y páginas principales
│   ├── (auth)/            # Grupo de rutas autenticadas
│   ├── api/               # Rutas de API
│   └── [...]/             # Otras rutas de la aplicación
├── components/            # Componentes de React
│   ├── common/           # Componentes compartidos (botones, inputs, etc.)
│   ├── features/         # Componentes específicos de features
│   └── layouts/          # Componentes de layout
├── hooks/                # Custom hooks de React
├── lib/                  # Utilidades y configuraciones
│   ├── api/             # Configuración de API y endpoints
│   ├── constants/       # Constantes globales
│   └── utils/           # Funciones utilitarias
├── types/               # Definiciones de tipos TypeScript
├── styles/              # Estilos globales y configuración de Tailwind
├── store/              # Manejo de estado global (si se necesita)
└── tests/              # Tests unitarios y de integración
```

## Descripción de la Arquitectura

### 1. App Router (`src/app/`)
- Implementa el nuevo App Router de Next.js 13+
- Organiza las rutas de manera jerárquica
- Permite route groups para mejor organización
- Mantiene layouts compartidos

### 2. Componentes (`src/components/`)
- **common/**: Componentes reutilizables como botones, inputs, cards
- **features/**: Componentes específicos de características del negocio
- **layouts/**: Componentes de layout como headers, footers, sidebars

### 3. Hooks (`src/hooks/`)
- Custom hooks reutilizables
- Lógica compartida entre componentes
- Manejo de estado y efectos

### 4. Lib (`src/lib/`)
- **api/**: Configuración de APIs, fetchers, endpoints
- **constants/**: Valores constantes, enums, configuraciones
- **utils/**: Funciones utilitarias y helpers

### 5. Types (`src/types/`)
- Interfaces y tipos TypeScript
- DTOs para API
- Tipos compartidos

### 6. Styles (`src/styles/`)
- Configuración de Tailwind
- Estilos globales
- Variables CSS y temas

### 7. Store (`src/store/`)
- Manejo de estado global (si se requiere)
- Configuración de estado global (Zustand/Redux/Jotai)
- Actions y reducers

### 8. Tests (`src/tests/`)
- Tests unitarios con Jest/Vitest
- Tests de integración
- Testing utilities y mocks

## Convenciones y Mejores Prácticas

### Nomenclatura
- Componentes: PascalCase (ej. `Button.tsx`, `UserProfile.tsx`)
- Hooks: camelCase con prefix 'use' (ej. `useAuth.ts`, `useForm.ts`)
- Utilidades: camelCase (ej. `formatDate.ts`, `validation.ts`)
- Types: PascalCase con sufijo descriptivo (ej. `UserDTO.ts`, `AuthResponse.ts`)

### Importaciones
- Usar imports absolutos desde la raíz `src/`
- Agrupar imports por tipo (React, componentes, hooks, etc.)
- Evitar imports circulares

### Organización de Código
- Un componente por archivo
- Separación clara de lógica y presentación
- Componentes pequeños y reutilizables
- Custom hooks para lógica compartida

### Performance
- Implementar lazy loading donde sea necesario
- Optimizar imágenes y assets
- Memoización selectiva de componentes
- Prefetching inteligente de rutas

### Seguridad
- Validación de inputs
- Sanitización de datos
- Manejo seguro de autenticación
- Protección de rutas sensibles

## Escalabilidad

Esta arquitectura está diseñada para escalar en varios aspectos:

1. **Vertical**: Añadir nuevas características dentro de los módulos existentes
2. **Horizontal**: Crear nuevos módulos manteniendo la misma estructura
3. **Performance**: Optimizar el rendimiento sin cambiar la arquitectura base
4. **Equipo**: Permitir que múltiples desarrolladores trabajen en paralelo
5. **Mantenimiento**: Facilitar debugging y actualizaciones