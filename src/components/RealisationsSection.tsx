import { motion } from "framer-motion";
import { useState } from "react";
import adidas from "../assets/adidas.jpeg";
import adidas2 from "../assets/adidas2.jpeg";
import adidas3 from "../assets/adidas3.jpeg";
import adidas4 from "../assets/adidas4.jpeg";
import adidas5 from "../assets/adidas5.jpeg";
import adidas6 from "../assets/adidas6.jpeg";
import inwi1 from "../assets/inwi1.jpeg";
import inwi2 from "../assets/inwi2.jpeg";
import inwi3 from "../assets/inwi3.jpeg";
import inwi4 from "../assets/inwi4.jpeg";
import inwi5 from "../assets/inwi5.jpeg";
import inwi6 from "../assets/inwi6.jpeg";
import inwi7 from "../assets/inwi7.jpeg";
import image from "../assets/realisation2.jpg";
import societe from "../assets/sociéte.jpeg";
import societe2 from "../assets/sociéte2.jpeg";
import societe3 from "../assets/sociéte3.jpeg";
import societe4 from "../assets/sociéte4.jpeg";
import societe5 from "../assets/sociéte5.jpeg";
import societe6 from "../assets/sociéte6.jpeg";

export default function RealisationsSection() {
  interface Realisation {
    id: number;
    title: string;
    description: string;
    image: string;
    additionalImages: string[];
  }

  const [activeCategory, setActiveCategory] = useState<string>("evenements");
  const [showImages, setShowImages] = useState<{ [key: number]: boolean }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const categories: Record<string, Realisation[]> = {
    evenements: [
      {
        id: 1,
        title: "Adidas Predator 2025 Launch Zone",
        description:
          "L’innovation au service de la performance. Nous sommes ravis d’avoir contribué à la création de la Predator Launch Zone dans les magasins Adidas au Maroc. Une activation immersive qui incarne précision, innovation et design d’avant-garde.",
        image: adidas,
        additionalImages: [adidas, adidas2, adidas3, adidas4, adidas5, adidas6],
      },
      {
        id: 2,
        title: "Société Générale au Salon Halieutis 2025",
        description:
          "Dans le cadre de la participation de Société Générale au Salon Halieutis, prévu du 5 au 9 février 2025, Initcom a conçu et aménagé un stand mettant en avant leur engagement en matière de Responsabilité Sociétale des Entreprises (RSE). ",
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
    ],
    plv: [
      {
        id: 1,
        title: "Inwi Forfait Flexi",
        description:
          "Nous sommes fiers d'avoir accompagné Inwi dans l'organisation de cet événement exceptionnel pour le lancement du Forfait Flexi le 15/01/2025 ,une belle réussite grâce à une collaboration dynamique et un travail d'équipe remarquable. ",
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
        title: "Stand 1",
        description: "Description of Stand 1",
        image,
        additionalImages: [image, image],
      },
      {
        id: 2,
        title: "Stand 2",
        description: "Description of Stand 2",
        image,
        additionalImages: [image, image],
      },
    ],
    signaletique: [
      {
        id: 1,
        title: "Signalétique 1",
        description: "Description of Signalétique 1",
        image,
        additionalImages: [image, image],
      },
      {
        id: 2,
        title: "Signalétique 2",
        description: "Description of Signalétique 2",
        image,
        additionalImages: [image, image],
      },
    ],
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const toggleImageVisibility = (id: number) => {
    setShowImages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: 0,
    }));
  };

  const nextImage = (id: number) => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id];
      const additionalImages = categories[activeCategory].find(
        (item) => item.id === id
      )?.additionalImages;
      const nextIndex =
        additionalImages && currentIndex + 1 >= additionalImages.length
          ? 0
          : currentIndex + 1;
      return {
        ...prev,
        [id]: nextIndex,
      };
    });
  };

  const prevImage = (id: number) => {
    setCurrentImageIndex((prev) => {
      const currentIndex = prev[id];
      const additionalImages = categories[activeCategory].find(
        (item) => item.id === id
      )?.additionalImages;
      const prevIndex =
        additionalImages && currentIndex - 1 < 0
          ? additionalImages.length - 1
          : currentIndex - 1;
      return {
        ...prev,
        [id]: prevIndex,
      };
    });
  };

  const closeModal = (id: number) => {
    setShowImages((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return (
    <section
      id="realisations"
      className="w-full py-24 bg-gradient-to-b from-[#f5f5f5] to-[#ffffff]"
    >
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <motion.h2
            className="text-5xl font-extrabold text-[#df2868] mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Nos Réalisations
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Découvrez nos projets réalisés dans différentes catégories.
          </motion.p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["evenements", "plv", "stands", "signaletique"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#df2868] text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-lg`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Category Content Display */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {categories[activeCategory].map((item) => (
            <motion.div
              key={item.id}
              className="p-8 transition-shadow duration-300 bg-white shadow-xl rounded-xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div
                className="w-full h-64 bg-center bg-cover rounded-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <h3 className="text-2xl font-semibold text-[#df2868] mb-4 mt-6">
                {item.title}
              </h3>
              <p className="mb-4 text-lg text-gray-700">{item.description}</p>

              {/* Button to toggle additional images */}
              {item.additionalImages?.length > 0 && (
                <button
                  onClick={() => toggleImageVisibility(item.id)}
                  className="px-6 py-2 text-lg font-semibold text-white bg-[#df2868] rounded-lg"
                >
                  {showImages[item.id] ? "Hide Images" : "Voir les Images"}
                </button>
              )}

              {showImages[item.id] && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="relative w-full max-w-4xl mx-4 sm:max-w-3xl md:max-w-2xl">
                    <button
                      onClick={() => closeModal(item.id)}
                      className="absolute text-6xl text-white right-2 top-4"
                    >
                      &times;
                    </button>

                    <button
                      onClick={() => prevImage(item.id)}
                      className="absolute text-3xl text-white transform -translate-y-1/2 left-4 top-1/2"
                    >
                      &lt;
                    </button>
                    <img
                      src={item.additionalImages?.[currentImageIndex[item.id]]}
                      alt="Event"
                      className="object-cover w-full h-auto rounded-lg"
                    />
                    <button
                      onClick={() => nextImage(item.id)}
                      className="absolute text-3xl text-white transform -translate-y-1/2 right-4 top-1/2"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
