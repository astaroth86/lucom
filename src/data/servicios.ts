export interface Servicio {
  slug: string;
  titulo: string;
  /** "especialidad" = núcleo (hardware/IoT); "apoyo" = software complementario. */
  grupo: "especialidad" | "apoyo";
  /** Frase corta para las tarjetas de la home. */
  resumen: string;
  /** Meta description para la página de detalle. */
  metaDescription: string;
  /** Párrafo de introducción en la página de detalle. */
  intro: string;
  /** Qué incluye el servicio. */
  puntos: string[];
  /** Título SEO de la pestaña (<title>). Por defecto: "{titulo} — LUCOM". */
  tituloSeo?: string;
  /** Encabezado H1 de la página de detalle. Por defecto: titulo. */
  h1?: string;
  /** Nota honesta sobre el alcance (hasta dónde llegamos). Opcional. */
  alcance?: string;
}

export const servicios: Servicio[] = [
  {
    slug: "prototipos-iot",
    titulo: "Prototipos de hardware e IoT",
    grupo: "especialidad",
    tituloSeo: "Prototipo de hardware e IoT para validar tu producto — LUCOM",
    h1: "Prototipos de hardware e IoT para validar tu producto",
    resumen:
      "De la idea al prototipo funcional que puedes enseñar a inversores o a tus primeros clientes.",
    metaDescription:
      "Desarrollo de prototipos de hardware e IoT a medida para startups y empresas: del concepto al prototipo funcional que puedes enseñar a inversores y clientes.",
    intro:
      "Convertimos una idea de producto electrónico en un prototipo que funciona y se puede enseñar. Cubrimos toda la cadena —electrónica, firmware y conectividad— para que no tengas que coordinar a varios proveedores en la fase más delicada: validar que tu producto es viable.",
    puntos: [
      "Estudio técnico inicial para definir el alcance",
      "Arquitectura del sistema y selección de componentes",
      "Montaje del prototipo y firmware funcional",
      "Conectividad e integración de sensores (IoT)",
      "Pruebas, ajustes e iteración sobre el prototipo",
    ],
    alcance:
      "Nuestro punto fuerte es llevarte del concepto al prototipo funcional y validado. La industrialización, la certificación (CE/RED/FCC) y la fabricación de series quedan fuera de nuestro alcance habitual: si tu proyecto llega ahí, te lo decimos desde el principio y te orientamos sobre los siguientes pasos.",
  },
  {
    slug: "diseno-electronico",
    titulo: "Diseño electrónico y PCB",
    grupo: "especialidad",
    tituloSeo: "Diseño electrónico y diseño de PCB a medida — LUCOM",
    h1: "Diseño electrónico y de PCB a medida",
    resumen:
      "Esquemas, selección de componentes y diseño de placas a medida para tu producto o equipo.",
    metaDescription:
      "Diseño electrónico a medida: esquemas eléctricos, selección de componentes y diseño de PCB para tu producto o equipo.",
    intro:
      "Diseñamos la electrónica de tu producto desde el esquema hasta la placa lista para fabricar, pensando en fiabilidad, coste y facilidad de montaje desde el primer momento.",
    puntos: [
      "Esquemas eléctricos",
      "Selección de componentes",
      "Diseño de PCB (layout)",
      "Revisión de viabilidad y coste",
      "Documentación para fabricación",
    ],
  },
  {
    slug: "programacion-embebida",
    titulo: "Programación embebida",
    grupo: "especialidad",
    tituloSeo: "Firmware para microcontroladores a medida — LUCOM",
    h1: "Programación embebida y firmware a medida",
    resumen:
      "Firmware para microcontroladores, comunicaciones e integración de sensores.",
    metaDescription:
      "Programación embebida a medida: firmware para microcontroladores, protocolos de comunicación e integración de sensores.",
    intro:
      "Programamos el firmware que da vida a tu hardware: estable, eficiente y pensado para funcionar de forma fiable en el mundo real, no solo en el laboratorio.",
    puntos: [
      "Firmware para microcontroladores",
      "Protocolos de comunicación (UART, I2C, SPI, BLE…)",
      "Integración y lectura de sensores",
      "Gestión de energía y fiabilidad",
      "Depuración y actualizaciones",
    ],
  },
  {
    slug: "diseno-producto",
    titulo: "Diseño de producto y experiencia",
    grupo: "especialidad",
    tituloSeo: "Diseño de producto, UX/UI y branding — LUCOM",
    h1: "Diseño de producto, experiencia y marca",
    resumen:
      "Del aspecto físico del producto a la interfaz de sus apps y su identidad visual.",
    metaDescription:
      "Diseño de producto e industrial, diseño UX/UI de apps y paneles, y diseño gráfico y branding para tu producto electrónico.",
    intro:
      "Cuidamos cómo se ve, se usa y se percibe tu producto: desde la carcasa y la ergonomía hasta la interfaz de las apps que lo controlan y la identidad visual con la que se presenta.",
    puntos: [
      "Diseño de producto e industrial (carcasas, ergonomía)",
      "Diseño UX/UI de apps, paneles y web",
      "Diseño gráfico e identidad de marca",
      "Prototipado visual y maquetas",
    ],
  },
  {
    slug: "gestion-proyectos",
    titulo: "Gestión de proyectos",
    grupo: "especialidad",
    tituloSeo: "Gestión de proyectos técnicos — LUCOM",
    h1: "Gestión de proyectos de principio a fin",
    resumen:
      "Coordinamos tu proyecto para que avance con plazos claros y sin sorpresas.",
    metaDescription:
      "Gestión de proyectos técnicos: planificación, coordinación y seguimiento para que tu desarrollo avance con plazos claros.",
    intro:
      "Nos encargamos de que el proyecto avance: planificación, hitos, coordinación y comunicación clara en cada fase, para que tengas visibilidad y el desarrollo llegue a buen puerto.",
    puntos: [
      "Planificación y definición de hitos",
      "Coordinación técnica y de diseño",
      "Seguimiento y comunicación clara",
      "Control de plazos y alcance",
    ],
  },
  {
    slug: "desarrollo-web",
    titulo: "Desarrollo web",
    grupo: "apoyo",
    resumen:
      "Aplicaciones y paneles web para controlar y visualizar tus dispositivos.",
    metaDescription:
      "Desarrollo web a medida: paneles de control, visualización de datos e integraciones para tus dispositivos y servicios.",
    intro:
      "El software web que acompaña a tu hardware: paneles de control, visualización de datos e integraciones para que tu solución sea completa de extremo a extremo.",
    puntos: [
      "Aplicaciones web a medida",
      "Paneles de control y visualización de datos",
      "APIs e integraciones",
      "Conexión con tus dispositivos",
    ],
  },
  {
    slug: "apps-android",
    titulo: "Aplicaciones Android",
    grupo: "apoyo",
    resumen: "Apps Android para controlar y monitorizar tus dispositivos desde el móvil.",
    metaDescription:
      "Desarrollo de aplicaciones Android a medida, con conexión a hardware por Bluetooth/BLE o Wi-Fi.",
    intro:
      "Apps Android que conectan con tu hardware para controlarlo y monitorizarlo desde el móvil, con una experiencia de uso cuidada.",
    puntos: [
      "Apps Android nativas",
      "Conexión con hardware (Bluetooth/BLE, Wi-Fi)",
      "Visualización y control en tiempo real",
      "Publicación en Google Play",
    ],
  },
  {
    slug: "administracion-sistemas",
    titulo: "Administración de sistemas",
    grupo: "apoyo",
    resumen:
      "Servidores, despliegues y mantenimiento para que tu solución funcione 24/7.",
    metaDescription:
      "Administración de sistemas: servidores, despliegues, monitorización y mantenimiento para mantener tu solución en marcha.",
    intro:
      "La infraestructura que mantiene tu solución en marcha de forma fiable: servidores, despliegues y mantenimiento para que no tengas que preocuparte de que algo deje de funcionar.",
    puntos: [
      "Servidores y redes",
      "Despliegues y automatización",
      "Monitorización y mantenimiento",
      "Copias de seguridad y seguridad básica",
    ],
  },
];

export const especialidades = servicios.filter((s) => s.grupo === "especialidad");
export const serviciosApoyo = servicios.filter((s) => s.grupo === "apoyo");
