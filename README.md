# Consejo de Creativos · sitio

Sitio estático (sin build). Vercel lo publica tal cual.

- `index.html` · la landing
- `brief-prompt-toolkit/index.html` · Toolkit del Brief
- `brief/index.html` · plataforma de brief para prospectos (/brief/)
- `api/brief-autollenar.js` · función de Vercel que llena el brief con IA a partir de la historia del prospecto (necesita `ANTHROPIC_API_KEY` en Vercel)
- `config.js` · adónde llegan los formularios
- `favicon.svg`, `og.png` · ícono e imagen para compartir

## Publicar
1. En Vercel: Add New → Project → importar este repo → Deploy (Framework: Other, sin comando de build).
2. Settings → Domains: agregar el dominio y copiar los registros DNS en el proveedor del dominio.

Cada cambio que se sube a `main` se publica solo.

## Formularios
Los dos formularios mandan a `formEndpoint` (FormSubmit). El primer envío dispara un correo de activación a la cuenta configurada: hay que confirmarlo una vez.

Última prueba de despliegue automático: 2026-11-05.
