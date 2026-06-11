# LUCOM

Web one-page de **LUCOM — Ingeniería electrónica a medida**.

> Diseño soluciones electrónicas que funcionan.

Sitio comercial de una sola página para captar clientes: diseño electrónico,
programación embebida, prototipos, desarrollo web y de aplicaciones Android, y
administración de sistemas.

## Stack

- **[Astro](https://astro.build)** — sitio estático, cero JS por defecto, SEO excelente.
- **[Tailwind CSS v4](https://tailwindcss.com)** — estilos.
- **TypeScript**.
- **Formulario:** [Formspree](https://formspree.io) (opcional) con alternativa `mailto:`.

## Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # previsualiza el build
```

## Configuración del formulario

1. Crea un formulario gratuito en [Formspree](https://formspree.io).
2. Copia `.env.example` a `.env` y rellena tu ID:

   ```bash
   cp .env.example .env
   # PUBLIC_FORMSPREE_ID=tu_id
   ```

Sin esta variable, el botón de envío abre el cliente de correo (`mailto:`).

## Despliegue

El sitio es estático (`dist/`). Desplegado en **Cloudflare Pages** conectando
este repositorio de GitHub:

| Ajuste | Valor |
|--------|-------|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | rama con el código (p. ej. `main`) |

Después conecta el dominio `lucom.es` desde **Custom domains** y, si usas
formulario, añade `PUBLIC_FORMSPREE_ID` en **Settings → Environment variables**.

## Contacto

contacto@lucom.es
