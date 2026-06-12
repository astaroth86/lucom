export const SITE_NAME = "LUCOM";
export const EMAIL = "contacto@lucom.es";
export const TEAM_LABEL = "Carlos y Marga";

// Token de Cloudflare Web Analytics. Es público (va incrustado en el HTML),
// no es un secreto. Se puede sobrescribir con la variable de entorno
// PUBLIC_CF_BEACON_TOKEN.
export const CF_BEACON_TOKEN = "d5dd04b0d6e54340be637539d2b934f5";

// ID del formulario de Formspree. Es público (va en el action del formulario).
// Se puede sobrescribir con la variable de entorno PUBLIC_FORMSPREE_ID.
export const FORMSPREE_ID = "mwvjrgow";

export interface Persona {
  nombre: string;
  rol: string;
  iniciales: string;
  /** Bio corta para la ficha de "Sobre nosotros". */
  bio?: string;
  /** URL de LinkedIn. Vacía = no se muestra el enlace. */
  linkedin?: string;
}

export const TEAM: Persona[] = [
  {
    nombre: "Carlos",
    rol: "Electrónica, firmware y software",
    iniciales: "C",
    bio: "Cubro la electrónica, los sistemas embebidos y el software que los acompaña. Experiencia en proyectos para los sectores aeronáutico y de defensa, donde la fiabilidad y el rigor técnico no son opcionales.",
    linkedin: "https://www.linkedin.com/in/carlos-gonzalez-de-opazo/",
  },
  {
    nombre: "Marga",
    rol: "Estrategia de producto, UX y gestión de proyectos",
    iniciales: "M",
    bio: "Conecto la visión de negocio con las necesidades de las personas usuarias y las decisiones técnicas del equipo. En LUCOM defino el producto y la experiencia de uso, valido hipótesis antes de invertir más recursos y coordino la planificación y la comunicación con clientes, para que la solución sea útil, comprensible y atractiva, no solo viable técnicamente.",
    linkedin: "https://www.linkedin.com/in/margaritaglezhierro/",
  },
];

export const NAV = [
  { href: "/#que-hacemos", label: "Qué hacemos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/blog", label: "Blog" },
  { href: "/#sobre", label: "Sobre nosotros" },
  { href: "/#contacto", label: "Contacto" },
];
