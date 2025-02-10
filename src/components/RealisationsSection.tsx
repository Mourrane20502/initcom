import { motion } from "framer-motion";
import { useState } from "react";
import { categories } from "../data/data";

type Categories = {
  evenements: {
    id: number;
    title: string;
    description: string;
    image: string;
    additionalImages: string[];
  }[];
  plv: {
    id: number;
    title: string;
    description: string;
    image: string;
    additionalImages: string[];
  }[];
  stands: {
    id: number;
    title: string;
    description: string;
    image: string;
    additionalImages: string[];
  }[];
  signaletique: {
    id: number;
    title: string;
    description: string;
    image: string;
    additionalImages: string[];
  }[];
  Retails: {
    id: number;
    title: string;
    description: string;
    image: string;
    additionalImages: string[];
  }[];
};

export default function RealisationsSection() {
  const [activeCategory, setActiveCategory] =
    useState<keyof Categories>("evenements");
  const [showImages, setShowImages] = useState<{ [key: number]: boolean }>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const [itemsToShow, setItemsToShow] = useState(3);

  const handleCategoryClick = (category: keyof Categories) => {
    setActiveCategory(category);
    setItemsToShow(3);
  };

  const toggleImageVisibility = (id: number) => {
    setShowImages((prev) => ({ ...prev, [id]: !prev[id] }));
    setCurrentImageIndex((prev) => ({ ...prev, [id]: 0 }));
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
      return { ...prev, [id]: nextIndex };
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
      return { ...prev, [id]: prevIndex };
    });
  };

  const closeModal = (id: number) => {
    setShowImages((prev) => ({ ...prev, [id]: false }));
  };

  const handleVoirPlusClick = () => {
    setItemsToShow((prev) => prev + 3);
  };

  const handleVoirMoinsClick = () => {
    setItemsToShow((prev) => (prev > 3 ? prev - 3 : prev));
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
            className="text-5xl max-md:text-4xl font-extrabold text-[#df2868] mb-4"
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["evenements", "plv", "stands", "signaletique", "Retails"].map(
            (category) => (
              <button
                key={category}
                onClick={() =>
                  handleCategoryClick(category as keyof Categories)
                }
                className={`px-6 py-2 text-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#df2868] text-white"
                    : "bg-gray-200 text-gray-700"
                } rounded-lg`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Category Content Display */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {categories[activeCategory]
            .slice(0, itemsToShow) // Display only the itemsToShow number of items
            .map((item) => (
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
                <p className="max-w-[600px] mb-4 text-lg text-gray-700">
                  {item.description}
                </p>

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
                        src={
                          item.additionalImages?.[currentImageIndex[item.id]]
                        }
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

        {/* "Voir Plus" and "Voir Moins" Buttons */}
        <div className="mt-8 text-center">
          {categories[activeCategory].length > itemsToShow && (
            <button
              onClick={handleVoirPlusClick}
              className="px-6 py-2 text-lg font-semibold text-white bg-[#df2868] rounded-lg mr-4"
            >
              Voir Plus
            </button>
          )}

          {itemsToShow > 3 && (
            <button
              onClick={handleVoirMoinsClick}
              className="px-6 py-2 text-lg font-semibold text-white bg-[#df2868] rounded-lg"
            >
              Voir Moins
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
