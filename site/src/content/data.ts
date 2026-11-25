// Contenido del sitio (mismo texto del sitio anterior).

export const EVENT_TYPES = [
  "Boda",
  "XV años",
  "Evento corporativo",
  "Concierto / festival",
  "Ceremonia religiosa",
  "Fiesta privada",
  "Otro",
] as const;

export const DESTACADOS = [
  { value: 30, prefix: "+", suffix: " años", label: "Trayectoria musical" },
  { text: "Directora", label: "Los Internacionales" },
  { text: "Doctorado", label: "Honoris Causa" },
  { text: "Conductora", label: "Viva la fiesta" },
] as const;

export type Sencillo = { titulo: string; descripcion: string; badge: string };

export const SENCILLOS: Sencillo[] = [
  { titulo: "Segundo Aire", descripcion: "Debut como autora y compositora en colaboración con Luis Mogollón y Oscar Ignacio León.", badge: "Lanzamiento reciente" },
  { titulo: "El pastor", descripcion: "Una de las más bellas páginas de la música mexicana. Poco interpretada por su alto grado de dificultad: la versión de Elsa es una verdadera creación.", badge: "Próximo lanzamiento" },
  { titulo: "Te voy a enseñar a querer", descripcion: "Muchas cantantes respaldan su trabajo con una buena técnica. Elsa Urbina lo hace, además, con una singular capacidad interpretativa.", badge: "Lanzamiento reciente" },
  { titulo: "Te sigo amando", descripcion: "A pesar de los vaivenes de la vida, Elsa conserva su gran pasión por la música… es su verdadero amor.", badge: "Lanzamiento reciente" },
  { titulo: "Cielo Rojo", descripcion: "Nada más difícil que incorporar al repertorio una canción que cuenta con múltiples versiones. La contribución de Elsa es cantarla con feminidad, sin gritos ni aspavientos.", badge: "Lanzamiento reciente" },
  { titulo: "La Gata Bajo la Lluvia", descripcion: "Versión del célebre tema de Rafael Pérez Botija, por la cual mereció el galardón a «Mejor Artista Romántica del Año», que le fue concedido en la ciudad de Nueva York.", badge: "Éxito galardonado" },
  { titulo: "Amarte es un Placer", descripcion: "Primer sencillo como solista del compositor Juan Carlos Calderón, difundido internacionalmente en EE. UU., Colombia y República Dominicana.", badge: "Sencillo principal" },
  { titulo: "La Belleza", descripcion: "Tema de su primera producción como solista, con la cual, acompañada por mariachi, rinde homenaje a sus raíces mexicanas.", badge: "Álbum solista" },
  { titulo: "La Llorona", descripcion: "Interpretación, en español y zapoteco, del conocido tema tradicional, con el cual ha logrado gran reconocimiento de público y crítica.", badge: "Tradición mexicana" },
  { titulo: "El Toro y la Luna", descripcion: "Por lo general, es una canción que interpretan hombres, con estilo operático. Son contadas las versiones femeninas. Elsa prefiere comunicar antes que impresionar.", badge: "Fusión cultural" },
  { titulo: "Búscame en tu corazón", descripcion: "En su interés por aceptar retos interpretativos en géneros con auténtica musicalidad, Elsa canta, al lado del compositor Martín Ramos, una cumbia bailable cuya letra contrasta los momentos difíciles con la felicidad.", badge: "Fusión cultural" },
  { titulo: "Granada", descripcion: "Por lo general, es una canción que interpretan hombres, con estilo operático. Son contadas las versiones femeninas. Elsa prefiere comunicar antes que impresionar.", badge: "Fusión cultural" },
];

export type Reconocimiento = { titulo: string; descripcion: string; icon: "award" | "mic" | "heart" | "radio" };

export const RECONOCIMIENTOS: Reconocimiento[] = [
  { titulo: "Doctorado Honoris Causa", descripcion: "Otorgado, en 2021, por el Colegio Internacional de Profesionistas.", icon: "award" },
  { titulo: "Micrófono de Oro", descripcion: "Galardón de la Asociación Nacional de Locutores de México.", icon: "mic" },
  { titulo: "Premios Yohualli", descripcion: "Diosa de plata ofrecida, en Puebla, por la organización que preside el Dr. David Pérez Méndez.", icon: "heart" },
  { titulo: "Latin Grammy Member", descripcion: "Miembro de la Academia del Latin Grammy como intérprete femenina del álbum triple «Tour» de Los Internacionales, en 2007.", icon: "radio" },
];

export const COMUNICADOS = [
  { fecha: "Abril 2026", titulo: "Lanzamiento de «Segundo Aire»", texto: "Elsa Urbina debuta como autora y compositora con el tema «Segundo Aire», que escribió al lado de Luis Mogollón y Oscar Ignacio León." },
  { fecha: "Diciembre 2025", titulo: "Mañanitas a la Virgen de Guadalupe", texto: "Por tercer año consecutivo, Elsa tuvo el honor de participar, en la Basílica, en la tradicional serenata a la Virgen de Guadalupe." },
  { fecha: "Internacional", titulo: "Difusión en emisoras del continente americano", texto: "Sus temas han cruzado fronteras y logrado una extraordinaria recepción en más de 350 estaciones radiofónicas." },
];

export type Foto = { src: string; width: number; height: number; title: string };

export const GALERIA: Foto[] = [
  { src: "/images/IMG_1695.JPG", width: 1280, height: 953, title: "Presentación en vivo" },
  { src: "/images/IMG_1698.JPG", width: 3024, height: 4032, title: "Sesión fotográfica principal" },
  { src: "/images/IMG_1710.JPG", width: 2529, height: 1801, title: "Retrato artístico" },
  { src: "/images/Elsa_4212.jpg", width: 900, height: 720, title: "Música popular mexicana" },
  { src: "/images/Elsa_4323.jpg", width: 900, height: 600, title: "Interpretación versátil" },
  { src: "/images/Elsa_4496.jpg", width: 900, height: 643, title: "Escenario y luces" },
  { src: "/images/IMG_1697.jpg", width: 1170, height: 647, title: "Retrato clásico" },
  { src: "/images/IMG_1700.JPG", width: 2048, height: 1365, title: "Sesión fotográfica" },
  { src: "/images/IMG_1708.JPG", width: 1280, height: 960, title: "Presentación artística" },
  { src: "/images/elsa-urbina-y-vientos-de-bronce.jpeg", width: 880, height: 1184, title: "Ofrecen música religiosa para ceremonias" },
  { src: "/images/elenco-atrevete-a-olvidarle.jpeg", width: 1280, height: 1175, title: "Parte del elenco de la telenovela «Atrévete a olvidarle»" },
  { src: "/images/elsa-urbina.jpeg", width: 1041, height: 1280, title: "Elsa Urbina" },
  { src: "/images/elsa-urbina-cantando.jpeg", width: 1280, height: 853, title: "Cantando" },
  { src: "/images/elsa-urbina-noche-de-gala.jpeg", width: 853, height: 1280, title: "En cuarteto de jazz" },
  { src: "/images/microfono-de-oro.jpeg", width: 1280, height: 960, title: "Recibiendo el Micrófono de Oro al lado de Jesús Vázquez «Chucas» de su Mariachi Nuestro México" },
];
