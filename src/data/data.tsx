import { Eye, Handshake, Lightbulb, Users } from "lucide-react";
import AdidasLogo from "../assets/Adidas-Logo.png";
import adidas from "../assets/adidas.jpeg";
import adidas2 from "../assets/adidas2.jpeg";
import adidas3 from "../assets/adidas3.jpeg";
import adidas4 from "../assets/adidas4.jpeg";
import adidas5 from "../assets/adidas5.jpeg";
import adidas6 from "../assets/adidas6.jpeg";
import amenagement from "../assets/aménagement_creatif_1.jpeg";
import amenagement2 from "../assets/aménagement_creatif_2.jpeg";
import amenagement3 from "../assets/aménagement_creatif_3.jpeg";
import amenagement4 from "../assets/aménagement_creatif_4.jpeg";
import amenagement5 from "../assets/aménagement_creatif_5.jpeg";
import amenagement6 from "../assets/aménagement_creatif_6.jpeg";
import amenagement7 from "../assets/aménagement_creatif_7.jpeg";
import Attijari from "../assets/attijari.png";
import bmci1 from "../assets/bmci1.jpeg";
import bmci2 from "../assets/bmci2.jpeg";
import bmci3 from "../assets/bmci3.jpeg";
import bmci4 from "../assets/bmci4.jpeg";
import carrefour from "../assets/carrefour1.jpeg";
import carrefour2 from "../assets/carrefour2.jpeg";
import carrefour3 from "../assets/carrefour3.jpeg";
import carrefour4 from "../assets/carrefour4.jpeg";
import carrefour5 from "../assets/carrefour5.jpeg";
import CDG from "../assets/cdg.png";
import devoxx from "../assets/devox1.jpeg";
import devoxx2 from "../assets/devox2.jpeg";
import devoxx3 from "../assets/devox3.jpeg";
import devoxx4 from "../assets/devox4.jpeg";
import devoxx5 from "../assets/devox5.jpeg";
import forum from "../assets/forum_geni.jpeg";
import forum2 from "../assets/forum_geni2.jpeg";
import Inwi from "../assets/inwi.png";
import inwi1 from "../assets/inwi1.jpeg";
import inwi2 from "../assets/inwi2.jpeg";
import inwi3 from "../assets/inwi3.jpeg";
import inwi4 from "../assets/inwi4.jpeg";
import inwi5 from "../assets/inwi5.jpeg";
import inwi6 from "../assets/inwi6.jpeg";
import inwi7 from "../assets/inwi7.jpeg";
import lhFashion from "../assets/LH_FASHION_1.jpeg";
import lhFashion2 from "../assets/LH_FASHION_2.jpeg";
import lhFashion3 from "../assets/LH_FASHION_3.jpeg";
import lhFashion4 from "../assets/LH_FASHION_4.jpeg";
import marrakech from "../assets/marrakech1.jpeg";
import marrakech2 from "../assets/marrakech2.jpeg";
import marrakech3 from "../assets/marrakech3.jpeg";
import marrakech4 from "../assets/marrakech4.jpeg";
import marrakech5 from "../assets/marrakech5.jpeg";
import marrakech6 from "../assets/marrakech6.jpeg";
import image from "../assets/realisation2.jpg";
import sg1 from "../assets/sg_1.jpeg";
import sg2 from "../assets/sg_2.jpeg";
import sg3 from "../assets/sg_3.jpeg";
import sg4 from "../assets/sg_4.jpeg";
import sg5 from "../assets/sg_5.jpeg";
import sg6 from "../assets/sg_6.jpeg";
import sg7 from "../assets/sg_7.jpeg";
import signaletique1 from "../assets/signaletique1.jpeg";
import signaletique2 from "../assets/signaletique2.jpeg";
import societe from "../assets/sociéte.jpeg";
import Societe from "../assets/sociéte.png";
import societe2 from "../assets/sociéte2.jpeg";
import societe3 from "../assets/sociéte3.jpeg";
import societe4 from "../assets/sociéte4.jpeg";
import societe5 from "../assets/sociéte5.jpeg";
import societe6 from "../assets/sociéte6.jpeg";
import anfaplace from "../assets/spelling1.jpeg";
import anfaplace2 from "../assets/spelling2.jpeg";
import anfaplace3 from "../assets/spelling3.jpeg";
import anfaplace4 from "../assets/spelling4.jpeg";
import anfaplace5 from "../assets/spelling5.jpeg";
import anfaplace6 from "../assets/spelling6.jpeg";

export type Realisation = {
  id: number;
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
};

export const categories = {
  evenements: [
    {
      id: 1,
      title: "Inwi Forfait Flexi 2025",
      description:
        "Nous sommes fiers d'avoir accompagné Inwi dans l'organisation de cet événement exceptionnel pour le lancement du Forfait Flexi le 15/01/2025 , une belle réussite grâce à une collaboration dynamique et un travail d'équipe remarquable.",
      image: adidas,
      additionalImages: [adidas, adidas2, adidas3, adidas4, adidas5, adidas6],
    },
    {
      id: 2,
      title: "Société Générale Africa Technologies & Services",
      description:
        "Dans le cadre du SG AT Meet-Up, notre équipe a conçu et installé une scénographie élégante et immersive pour Société Générale Africa Technologies & Services ,ce projet reflète notre engagement à offrir des solutions créatives et personnalisées qui marient esthétisme et fonctionnalité.",
      image: sg1,
      additionalImages: [sg1, sg2, sg3, sg4, sg5, sg6, sg7],
    },
    {
      id: 3,
      title: "Société Générale Africa Technologies & Services",
      description:
        "Dans le cadre du SG AT Meet-Up, notre équipe a conçu et installé une scénographie élégante et immersive pour Société Générale Africa Technologies & Services ,ce projet reflète notre engagement à offrir des solutions créatives et personnalisées qui marient esthétisme et fonctionnalité.",
      image: bmci1,
      additionalImages: [bmci1, bmci2, bmci3, bmci4],
    },
    {
      id: 4,
      title: "Carrefour du Manager 2024",
      description:
        "Pour cette nouvelle édition du Carrefour du Manager, nous avons eu le privilège de créer un espace dédié à l’innovation et au partage d’idées. Nous avons conçu et aménagé des stands alliant design et fonctionnalités pour accueillir les participants dans une ambiance dynamique et propice aux échanges professionnels. ",
      image: carrefour,
      additionalImages: [
        carrefour,
        carrefour2,
        carrefour3,
        carrefour4,
        carrefour5,
      ],
    },

    {
      id: 4,
      title: "Spelling Bee à Anfaplace",
      description:
        "InitCom a eu le plaisir d'organiser la 4e édition du concours Spelling Bee à Anfaplace ! Pour cet événement unique, notre équipe a assuré un branding  complet avec  un setup créatif ,une animation dynamique et  une logistique événementielle soignée, un grand moment pour les participants et le public !",
      image: anfaplace,
      additionalImages: [
        anfaplace,
        anfaplace2,
        anfaplace3,
        anfaplace4,
        anfaplace5,
        anfaplace6,
      ],
    },
  ],
  plv: [
    {
      id: 1,
      title: "Inwi Forfait Flexi",
      description:
        "Nous sommes fiers d'avoir accompagné Inwi dans l'organisation de cet événement exceptionnel pour le lancement du Forfait Flexi le 15/01/2025 ,une belle réussite grâce à une collaboration dynamique et un travail d'équipe remarquable.",
      image: inwi1,
      additionalImages: [inwi1, inwi2, inwi3, inwi4, inwi5, inwi6, inwi7],
    },
    {
      id: 2,
      title: "PLV 2",
      description: "Description of PLV 2",
      image,
      additionalImages: [image, image],
    },
  ],
  stands: [
    {
      id: 1,
      title: "Société Générale au Salon Halieutis 2025",
      description:
        "Dans le cadre de la participation de Société Générale au Salon Halieutis, prévu du 5 au 9 février 2025, Initcom a conçu et aménagé un stand mettant en avant leur engagement en matière de Responsabilité Sociétale des Entreprises (RSE).",
      image: societe,
      additionalImages: [
        societe,
        societe2,
        societe3,
        societe4,
        societe5,
        societe6,
      ],
    },
    {
      id: 2,
      title: "Aménagement créatif pour Adidas",
      description:
        "Il y a quelque temps, nous avons eu l'opportunité de travailler sur un projet d'aménagement d'espace pour Adidas, en apportant une touche de créativité et d'innovation à leur environnement.",
      image: amenagement,
      additionalImages: [
        amenagement,
        amenagement2,
        amenagement3,
        amenagement4,
        amenagement5,
        amenagement6,
        amenagement7,
      ],
    },
    {
      id: 3,
      title: "LH Fashion Show",
      description:
        "Organisé par la célèbre créatrice marocaine Leïla Hadioui, cet événement incontournable s’est tenu au Pavillon Othali à Casablanca sous le thème « ROUND ELEVEN ». À cette occasion, nous avons imaginé un espace instagramable et immersif, en parfaite harmonie avec la collection capsule sport réalisée en collaboration avec la marque internationale Adidas.",
      image: lhFashion,
      additionalImages: [lhFashion, lhFashion2, lhFashion3, lhFashion4],
    },
    {
      id: 4,
      title: "Congrès National de Cardiologie ",
      description:
        "Initcom a eu le plaisir de concevoir et d'installer un stand sur-mesure pour BMCI, offrant un espace accueillant et moderne aux visiteurs , avec une attention particulière aux détails, ce stand reflétait l'engagement de BMCI envers le bien-être et la santé. Un grand merci à BMCI pour leur confiance, et à notre équipe pour leur créativité et leur professionnalisme dans la réalisation de ce projet.",
      image: carrefour,
      additionalImages: [
        carrefour,
        carrefour2,
        carrefour3,
        carrefour4,
        carrefour5,
      ],
    },
    {
      id: 5,
      title: "Marrakech Air Show 2024,",
      description:
        "InitCom a installé des dispositifs de visibilité pour Embraer  au Marrakech Air Show 2024, qui se tient du 30 octobre au 2 novembre, un événement incontournable pour le secteur aéronautique, réunissant plus de 300 exposants et des délégations internationales.",
      image: marrakech,
      additionalImages: [
        marrakech,
        marrakech2,
        marrakech3,
        marrakech4,
        marrakech5,
        marrakech6,
      ],
    },
    {
      id: 6,
      title: "Forum GENI Entreprises à Rabat",
      description:
        "Nous avons eu le plaisir de concevoir et mettre en place le stand d'INWI lors du Forum GENI Entreprises à Rabat. organisé par l'ENSIAS, l'INPT et l'INSEA. Cet événement a offert une belle opportunité de networking pour les étudiants et les professionnels.",
      image: forum,
      additionalImages: [forum, forum2],
    },
    {
      id: 7,
      title: "Conférence Devoxx Morocco 2024",
      description:
        "Nous avons eu le plaisir de participer à la conférence Devoxx Morocco 2024, qui s'est déroulé du 02 au 04 octobre à Marrakech.  En tant que partenaire en branding . Notre équipe Initcom a pris en charge plusieurs aspects essentiels de l'événement, notamment :  La création et mise en place de setup ,la conception et aménagement des stands , la scénographie de l'événement et  la logistique complète.",
      image: devoxx,
      additionalImages: [devoxx, devoxx2, devoxx3, devoxx4, devoxx5],
    },
  ],
  signaletique: [
    {
      id: 1,
      title: "Nouvelle ouverture de magasin",
      description:
        "Nous avons eu le plaisir de collaborer à l’installation du logo Adidas pour ce nouvel espace. Notre équipe a conçu et mis en place une signalétique et un branding qui reflètent l’identité forte de la marque",
      image: signaletique1,
      additionalImages: [signaletique1, signaletique2],
    },
    {
      id: 2,
      title: "Signalétique 2",
      description: "Description of Signalétique 2",
      image,
      additionalImages: [image, image],
    },
  ],
  Retails: [
    {
      id: 1,
      title: "Signalétique 1",
      description: "Description of Signalétique 1",
      image,
      additionalImages: [image, image],
    },
  ],
};

// Navigation Links
export const navLinks = [
  { name: "Qui Sommes Nous", href: "#qui-sommes-nous" },
  { name: "Nos Services", href: "#services" },
  { name: "Nos réalisations", href: "#realisations" },
  { name: "Partenaires", href: "#partenaires" },
  { name: "Contact", href: "#contact" },
];

//Values Data

export type TValeurs = {
  title: string;
  description: string;
  icon?: JSX.Element;
};

export const Valeurs: TValeurs[] = [
  {
    title: "Créativité ",
    description: "Chaque projet est une opportunité de réinventer les codes.",
    icon: <Lightbulb className="w-12 h-12 text-rose-500" />,
  },
  {
    title: "Excellence ",
    description:
      "Nous nous engageons à fournir un service de qualité supérieure.",
    icon: <Handshake className="w-12 h-12 text-rose-500" />,
  },
  {
    title: "Proximité ",
    description: "Votre vision est au cœur de notre processus de création.",
    icon: <Users className="w-12 h-12 text-rose-500" />,
  },
  {
    title: "Transparence",
    description: "Nous croyons en une communication claire et honnête.",
    icon: <Eye className="w-12 h-12 text-rose-500" />,
  },
];
export type Tservices = {
  title: string;
  description: string;
  points: string[];
};

export const services: Tservices[] = [
  {
    title: "Marketing Événementiel",
    description:
      "Nous concevons et organisons des événements sur mesure qui captivent vos audiences et maximisent l’impact de votre marque.",
    points: [
      "Organisation de lancements de produits uniques pour marquer les esprits.",
      "Création et gestion de salons professionnels ou d’expositions pour renforcer votre présence sectorielle.",
      "Coordination de team building créatifs pour fédérer vos équipes et véhiculer vos valeurs.",
      "Mise en place d’événements VIP, soirées de gala, et inaugurations.",
    ],
  },
  {
    title: "Marketing Opérationnel",
    description:
      "Nos campagnes terrain sont pensées pour générer un impact direct sur vos ventes et accroître la notoriété de votre marque.",
    points: [
      "Animations commerciales : Création d’interactions engageantes en magasin pour attirer les clients.",
      "Roadshows : Promotions itinérantes qui vont à la rencontre de vos cibles, avec des stands mobiles et des activités captivantes.",
      "Promotions en points de vente : Offres spéciales, dégustations ou démonstrations de produits pour booster les ventes.",
      "Gestion de dispositifs de street marketing pour des campagnes impactantes dans les lieux publics.",
    ],
  },
  {
    title: "Retail Marketing",
    description:
      "Nous transformons vos points de vente en véritables expériences clients, en combinant design et stratégie commerciale.",
    points: [
      "Création de PLV sur mesure : Présentoirs, supports interactifs et dispositifs innovants pour renforcer l’attractivité de vos produits.",
      "Agencement de stands : Conception de stands modulaires ou premium pour optimiser vos espaces dans les salons et foires.",
      "Design de vitrines interactives et attractives pour capter l’attention des passants.",
      "Déploiement de technologies immersives (réalité augmentée, écrans interactifs, bornes interactives) pour enrichir l’expérience en magasin.",
    ],
  },
];
export type TPartners = {
  id: number;
  name: string;
  logo: string;
};

export const partners: TPartners[] = [
  { id: 1, name: "Adidas", logo: AdidasLogo },
  { id: 2, name: "Société Générale", logo: Societe },
  { id: 3, name: "Inwi", logo: Inwi },
  { id: 4, name: "Attijari", logo: Attijari },
  { id: 5, name: "CDG", logo: CDG },
  { id: 6, name: "Adidas", logo: AdidasLogo },
  { id: 7, name: "Société Générale", logo: Societe },
  { id: 8, name: "Inwi", logo: Inwi },
  { id: 9, name: "Inwi", logo: Inwi },
  { id: 10, name: "CDG", logo: CDG },
];
