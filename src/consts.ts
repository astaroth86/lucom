export const SITE_NAME = "LUCOM";
export const EMAIL = "contacto@lucom.es";
export const TEAM_LABEL = "Carlos y Marga";

// Token de Cloudflare Web Analytics. Es público (va incrustado en el HTML),
// no es un secreto. Se puede sobrescribir con la variable de entorno
// PUBLIC_CF_BEACON_TOKEN.
export const CF_BEACON_TOKEN = "d5dd04b0d6e54340be637539d2b934f5";

export interface Persona {
  nombre: string;
  rol: string;
  iniciales: string;
  /** URL de LinkedIn. Vacía = no se muestra el enlace. */
  linkedin?: string;
}

export const TEAM: Persona[] = [
  {
    nombre: "Carlos González",
    rol: "Electrónica, firmware y software",
    iniciales: "CG",
    linkedin: "https://www.linkedin.com/in/carlos-gonzalez-de-opazo/",
  },
  {
    nombre: "Marga",
    rol: "Diseño y gestión de proyectos",
    iniciales: "M",
    linkedin: "",
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
