# Alcolea + Krauss — Website

## Estructura de archivos

```
alcoleakrauss/
├── css/
│   └── style.css          ← Estilos compartidos (todos los colores, tipografía, grid)
├── es/                    ← Versión española
│   ├── index.html         ← Homepage
│   ├── arte.html          ← Página Arte
│   ├── decoracion.html    ← Página Decoración
│   ├── antiguedades.html  ← Página Antigüedades
│   └── contacto.html      ← Página Contacto (formulario Netlify)
├── en/                    ← Versión inglesa
│   └── index.html         ← Homepage EN (las demás páginas EN por añadir)
├── netlify.toml           ← Configuración Netlify (redirects, headers)
└── README.md              ← Este archivo
```

## Despliegue en Netlify

1. Sube la carpeta completa a un repositorio GitHub (público o privado)
2. En Netlify: "New site from Git" → conecta el repo
3. Build settings: dejar en blanco (es HTML estático, no hay build)
4. Publish directory: `.` (raíz)
5. Despliega

La URL raíz `/` redirige automáticamente a `/es/index.html`.

## Imágenes

Las imágenes van en una carpeta `/img/` en la raíz:
```
img/
├── arte/
├── antiguedades/
└── decoracion/
```

En cada tarjeta de producto, el src de las imágenes apunta a `/img/arte/hartung-1970-26.jpg` etc.

## Formulario de contacto

El formulario en `contacto.html` usa Netlify Forms (`data-netlify="true"`).
Funciona automáticamente en Netlify sin configuración adicional.
Los mensajes llegan al panel de Netlify → Forms.

## Colores
- Naranja: `#FF6600`
- Burdeos: `#513434`
- Negro: `#111111`
- Crema: `#F5F2EE`
