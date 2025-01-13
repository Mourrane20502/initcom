import { Eye, Handshake, Lightbulb, Users } from "lucide-react";
import AdidasLogo from "../assets/Adidas-Logo.png";
import Attijari from "../assets/attijari.png";
import CDG from "../assets/cdg.png";
import Inwi from "../assets/inwi.png";
import Societe from "../assets/sociéte.png";


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
    title: "Innovation",
    description:
      "Nous privilégions des solutions créatives et innovantes pour répondre aux besoins de nos clients.",
    icon: <Lightbulb className="w-12 h-12 text-rose-500" />,
  },
  {
    title: "Engagement",
    description:
      "Nous nous engageons à fournir un service de qualité, toujours à l’écoute de vos besoins.",
    icon: <Handshake className="w-12 h-12 text-rose-500" />,
  },
  {
    title: "Collaboration",
    description:
      "Le travail d’équipe est au cœur de notre démarche pour assurer le succès de chaque projet.",
    icon: <Users className="w-12 h-12 text-rose-500" />,
  },
  {
    title: "Transparence",
    description:
      "Nous croyons en une communication claire et honnête avec nos clients à chaque étape du projet.",
    icon: <Eye className="w-12 h-12 text-rose-500" />,
  },
];
export type Tservices = {
  title:string,
  description : string,
  points : string[]
}

export const services : Tservices[] = [
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
  },  {
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


]