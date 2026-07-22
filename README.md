# Alianza Indigo IAP

Sitio institucional de Alianza Indigo, construido como una SPA con React, TypeScript, Vite y Tailwind CSS.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm ci
npm run dev
```

El servidor local usa Vite en `http://localhost:8080`.

## Scripts

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de produccion
npm run lint      # revision estatica
npm run preview   # previsualizacion del build
```

## Configuracion

Las variables de entorno deben usar el prefijo `VITE_`.

```bash
VITE_GTM_ID=GTM-XXXXXXX
```

Si `VITE_GTM_ID` no esta configurado, Google Tag Manager no se carga. Esto evita enviar trafico a un contenedor placeholder.

## Despliegue

El proyecto incluye `vercel.json` con rewrite hacia `index.html` para soportar rutas de React Router en Vercel.

## Notas operativas

- Los formularios publicos preparan correos institucionales mediante `mailto:` hasta que exista un backend de captura.
- El verificador de distintivos muestra estado no disponible hasta conectarse a un registro oficial.
- Las donaciones solicitan informacion por correo hasta conectar una pasarela de pago real.
