import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import AgencyPhoto from "./assets/agency.jpg";
import LeftSidePicture from "./assets/agencybg.avif";
import equipe from "./assets/equipe.png";
import realisation from "./assets/realisation.jpg";
import realisation2 from "./assets/realisation2.jpg";
import realisation3 from "./assets/realisation3.jpg";
import realisation4 from "./assets/realisation4.jpg";
import ServicesSection from "./components/ServicesSection";
import ValuesSection from "./components/ValuesSection";
import { partners, services, Valeurs } from "./data/data";
import { useToast } from "./hooks/useToast";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";
function App() {
  const { successToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const categories = [
    {
      id: "evenements",
      title: "🎤 Événements",
      image: realisation,
      images: [realisation, realisation2, realisation3, realisation4],
    },
    {
      id: "plv",
      title: "🛒 PLV",
      image: realisation2,
      images: [realisation2, realisation, realisation3, realisation4],
    },
    {
      id: "stands",
      title: "🏢 Stands",
      image: realisation3,
      images: [realisation3, realisation, realisation2, realisation4],
    },
    {
      id: "signaletique",
      title: "📍 Signalétique",
      image: realisation4,
      images: [realisation4, realisation, realisation2, realisation3],
    },
  ];
  const openModal = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const nextImage = () => {
    if (selectedCategory) {
      const images =
        categories.find((cat) => cat.id === selectedCategory)?.images || [];
      setSelectedImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      const images =
        categories.find((cat) => cat.id === selectedCategory)?.images || [];
      setSelectedImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };
  return (
    <div className="scroll-smooth">
      <Header />
      <section
        className="w-full fromLeft h-[800px] relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${AgencyPhoto})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-4 text-6xl font-extrabold tracking-wide text-[#df2868] sm:text-7xl drop-shadow-lg"
          >
            InitCom
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-2xl font-semibold tracking-wider text-white sm:text-3xl md:text-4xl"
          >
            Votre Allié dans l’Industrie Publicitaire
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="max-w-4xl mb-8 text-lg font-light leading-relaxed text-white md:text-xl drop-shadow-lg"
          >
            Nous accompagnons les entreprises dans la valorisation de leur image
            et la mise en avant de leur marque grâce à des solutions
            publicitaires innovantes, des designs créatifs et des supports sur
            mesure adaptés à vos besoins. De la conception à la réalisation,
            nous sommes dédiés à transformer vos idées en outils efficaces de
            communication et de visibilité.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="px-10 py-4 text-white transition-transform duration-300 rounded-full shadow-xl bg-[#dc2a6c] hover:scale-110"
          >
            <a href="#contact"> Contactez-Nous</a>
          </motion.button>
        </motion.div>
      </section>

      {/*Qui sommes nous */}
      <section
        id="qui-sommes-nous"
        className="flex flex-col items-center w-full px-6 py-12 scroll-m-16 md:flex-row justify-evenly"
      >
        {/* Left Image */}
        <motion.img
          src={LeftSidePicture}
          alt="left side"
          width={600}
          className="mb-6 transition-all duration-500 ease-in-out shadow-lg rounded-xl md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Right Text Content */}
        <motion.div
          className="flex flex-col items-center justify-center max-w-lg gap-2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-rose-500"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Qui Sommes Nous
          </motion.h2>

          <motion.p
            className="mb-6 text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <span className="font-bold text-rose-700">INITCOM </span>
            est une agence de communication spécialisée en marketing
            événementiel, opérationnel, retail marketing, trade marketing,
            retail design et brand design. Nos équipes de créateurs et
            d'artistes nous permettent de proposer un accompagnement 360 à nos
            clients.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            Nous nous engageons à repousser les limites de la communication en
            apportant à chaque projet une vision unique et avant-gardiste,
            garantissant ainsi des résultats exceptionnels et une satisfaction
            client optimale.
          </motion.p>
        </motion.div>
      </section>

      {/*About Us */}
      <section id="about" className="w-full py-24 text-center bg-gray-100">
        <motion.div
          className="container max-w-6xl px-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl font-extrabold text-[#df2868] mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            À propos de nous
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Chez <strong>INITCOM</strong>, nous sommes bien plus qu’une société
            opérant dans l’industrie publicitaire : nous sommes votre{" "}
            <span className="text-[#dc2a6c] font-semibold">
              partenaire stratégique
            </span>{" "}
            pour donner vie à vos idées et renforcer l’impact de votre
            communication visuelle.
          </motion.p>

          <div className="grid items-start max-w-5xl gap-12 mx-auto mt-16 text-left md:grid-cols-2">
            <motion.div
              className="p-8 bg-white shadow-lg rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-semibold text-[#df2868] mb-4">
                🚀 Notre Expertise
              </h3>
              <p className="text-gray-700">
                Depuis <strong>2019</strong>, nous mettons notre expertise au
                service des marques pour créer des solutions publicitaires
                uniques et efficaces, adaptées à leurs besoins et ambitions.
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  ✅ <strong>Publicité sur lieu de vente (PLV)</strong> : pour
                  capter l’attention là où les décisions d’achat se prennent.
                </li>
                <li className="flex items-start gap-2">
                  ✅ <strong>Stands et événements</strong> : pour des
                  expériences immersives qui marquent les esprits.
                </li>
                <li className="flex items-start gap-2">
                  ✅ <strong>Signalétique et affichage</strong> : pour une
                  visibilité optimale à chaque point de contact.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-8 bg-white shadow-lg rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-semibold text-[#df2868] mb-4">
                🎯 Notre Mission
              </h3>
              <p className="text-gray-700">
                Nous vous aidons à maximiser{" "}
                <span className="font-semibold text-[#dc2a6c]">
                  l’impact de votre communication
                </span>{" "}
                et à établir un lien fort entre votre marque et votre audience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/*Nos Valeurs */}
      <section className="w-full px-3 py-10">
        <motion.div
          className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {Valeurs.map((value, index) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <ValuesSection {...value} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/*Nos Réalisations */}
      <section id="realisations" className="w-full py-24 text-center bg-white">
        <motion.div
          className="container max-w-6xl px-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl font-extrabold text-[#df2868] mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Nos réalisations
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Découvrez nos réalisations dans plusieurs domaines, illustrant notre
            savoir-faire et notre engagement pour des solutions publicitaires
            innovantes et impactantes.
          </motion.p>

          <motion.div
            className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="relative overflow-hidden transition-transform bg-gray-100 shadow-lg group rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-[300px] transition-transform group-hover:scale-105 duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#df2868] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#c0235d] transition"
                  onClick={() => openModal(category.id)}
                >
                  Voir Plus
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {isModalOpen && selectedCategory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              className="absolute text-3xl font-bold text-white top-6 right-6"
              onClick={closeModal}
            >
              ✖
            </button>

            <button
              className="absolute px-4 py-2 text-3xl font-bold text-white bg-black bg-opacity-50 rounded-full left-6"
              onClick={prevImage}
            >
              <ChevronLeft />
            </button>

            <motion.img
              src={
                categories.find((cat) => cat.id === selectedCategory)?.images[
                  selectedImageIndex
                ]
              }
              alt="Realisation"
              className="object-contain max-w-5xl max-h-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <button
              className="absolute px-4 py-2 text-3xl font-bold text-white bg-black bg-opacity-50 rounded-full right-6"
              onClick={nextImage}
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </section>

      {/*Nos Services */}
      <section
        id="services"
        className="w-full px-6 py-20 bg-gradient-to-r from-gray-100 to-rose-50"
      >
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Section Title */}
          <motion.h2
            className="mb-16 text-5xl font-extrabold text-center text-[#df2868]"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Nos Services
          </motion.h2>

          {/* Services Grid */}
          <motion.div
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <ServicesSection {...service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/*Notre Équipe */}
      <section id="team" className="w-full py-24 text-center bg-gray-100">
        <motion.div
          className="container max-w-6xl px-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl font-extrabold text-[#df2868] mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Notre Équipe
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Notre équipe est la clé de notre succès. Composée de professionnels
            passionnés et créatifs, elle réunit des talents aux compétences
            variées, prêts à relever tous les défis. Chaque membre met son
            expertise à votre service pour concevoir des solutions sur mesure
            qui répondent exactement à vos besoins. Ensemble, nous œuvrons pour
            offrir des résultats exceptionnels, alliant innovation, qualité et
            impact, afin de garantir que chaque projet reflète au mieux votre
            image et vos objectifs.
          </motion.p>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src={equipe}
              alt="Notre équipe"
              className="w-full max-w-4xl transition-transform duration-300 shadow-lg rounded-3xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/*Nos Partenaires */}

      <section
        id="partenaires"
        className="w-full py-16 mt-6 overflow-hidden scroll-m-[70px] bg-gradient-to-r from-rose-50 to-white"
      >
        <motion.h2
          className="mb-10 text-5xl font-extrabold text-center text-rose-600 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Nos Partenaires
        </motion.h2>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Gradient overlay on the sides for better aesthetics */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>

          {/* Infinite Scroll Wrapper */}
          <motion.div
            className="flex gap-8 px-8 animate-scroll whitespace-nowrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="flex flex-col items-center justify-center flex-shrink-0 h-32 p-4 transition-transform duration-300 bg-white rounded-lg shadow-md w-44"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-auto h-16"
                />
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/*Contact */}

      <section
        id="contact"
        className="w-full px-6 py-16 bg-gradient-to-r from-rose-50 via-white to-rose-100"
      >
        <motion.div
          className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="mb-6 text-4xl font-extrabold text-[#df2868]">
              Contactez-Nous
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Nous sommes là pour répondre à toutes vos questions et vous aider
              dans vos projets. Envoyez-nous un message et nous reviendrons vers
              vous rapidement.
            </p>
            <div className="flex flex-col gap-4 text-gray-700">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                <span className="p-3 rounded-full shadow-md bg-rose-100 text-rose-600">
                  📍
                </span>
                <p className="text-lg max-md:text-[16px]">
                  32 rue El Banafsaj , Rés Azzaitouna 1er Étage
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                <span className="p-3 rounded-full shadow-md bg-rose-100 text-rose-600">
                  📞
                </span>
                <p className="text-lg">+212 695592907</p>
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                <span className="p-3 rounded-full shadow-md bg-rose-100 text-rose-600">
                  ✉️
                </span>
                <p className="text-lg">contact@initcom.com</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="p-8 bg-white shadow-lg rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <form className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-rose-200"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-rose-200"
                  placeholder="Votre email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-rose-200"
                  rows={4}
                  placeholder="Votre message"
                ></textarea>
              </div>

              <motion.button
                onClick={() => successToast("Message Envoyé Avec succès!")}
                type="submit"
                className="px-6 py-3 text-white transition-transform duration-300 rounded-lg shadow-md bg-[#df2868] hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      <ToastContainer aria-label={""} />
      <Footer />
    </div>
  );
}

export default App;
