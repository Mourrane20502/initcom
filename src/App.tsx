import { ToastContainer } from "react-toastify";
import AgencyPhoto from "./assets/agency.jpg";
import LeftSidePicture from "./assets/agencybg.avif";
import ServicesSection from "./components/ServicesSection";
import ValuesSection from "./components/ValuesSection";
import { partners, services, Valeurs } from "./data/data";
import { useToast } from "./hooks/useToast";
import Footer from "./navigation/Footer";
import Header from "./navigation/Header";

function App() {
  const { successToast } = useToast();

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
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-6 text-center">
          <h1 className="mb-4 text-6xl font-extrabold tracking-wide text-[#df2868] sm:text-7xl drop-shadow-lg animate-fade-in-down">
            InitCom
          </h1>
          <h2 className="text-2xl font-semibold tracking-wider text-white sm:text-3xl md:text-4xl animate-fade-in">
            Votre Agence 
          </h2>
          <p className="max-w-4xl mb-8 text-lg font-light leading-relaxed text-white md:text-xl drop-shadow-lg animate-fade-in">
            Nous aidons les entreprises à transformer leur présence en ligne
            grâce à des stratégies numériques innovantes, une créativité unique
            et des solutions sur mesure pour atteindre vos objectifs.
          </p>
          <button className="px-10 py-4 text-white transition-transform duration-300 rounded-full shadow-xl bg-[#dc2a6c] hover:scale-110">
            <a href="#contact"> Contactez-Nous</a>
          </button>
        </div>
      </section>
      {/*Qui sommes nous */}
      <section
        id="qui-sommes-nous"
        className="flex flex-col items-center w-full px-6 py-12 scroll-m-16 md:flex-row justify-evenly"
      >
        {/* Left Image */}
        <img
          src={LeftSidePicture}
          alt="left side"
          width={600}
          className="mb-6 transition-all duration-500 ease-in-out shadow-lg rounded-xl md:mb-0 hover:scale-110"
        />

        {/* Right Text Content */}
        <div className="flex flex-col items-center justify-center max-w-lg gap-2 text-center md:text-left">
          <h2 className="mb-4 text-4xl font-bold text-rose-500">
            Qui Sommes Nous
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            <span className="font-bold text-rose-700">INITCOM</span> est une
            agence de communication basée au Maroc, spécialisée dans la création
            de solutions innovantes et sur mesure pour ses clients. Notre équipe
            d'experts passionnés excelle dans divers domaines, notamment le
            marketing événementiel, le marketing opérationnel, le trade
            marketing et le retail marketing.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Nous nous engageons à repousser les limites de la communication en
            apportant à chaque projet une vision unique et avant-gardiste,
            garantissant ainsi des résultats exceptionnels et une satisfaction
            client optimale.{" "}
          </p>
        </div>
      </section>

      {/*Nos Valeurs */}
      <section className="w-full px-3 py-10 ">
        <div className="grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 xl:grid-cols-4">
          {Valeurs.map((value) => (
            <ValuesSection key={value.title} {...value} />
          ))}
        </div>
      </section>

      {/*Nos Services */}
      <section
        id="services"
        className="w-full px-6 py-20 bg-gradient-to-l from-white to-rose-300"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Title */}
          <h2 className="mb-16 text-5xl font-extrabold text-center text-[#df2868]">
            Nos Services
          </h2>

          {/* Services Grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServicesSection key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/*Nos Partenaires */}

      <section
        id="partenaires"
        className="w-full py-16 mt-6 overflow-hidden scroll-m-[70px] bg-gradient-to-r from-rose-50 to-white"
      >
        <h2 className="mb-10 text-5xl font-extrabold text-center text-rose-600 drop-shadow-md">
          Nos Partenaires
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Gradient overlay on the sides for better aesthetics */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>

          {/* Infinite Scroll Wrapper */}
          <div className="flex gap-8 px-8 animate-scroll whitespace-nowrap">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center flex-shrink-0 h-32 p-4 transition-transform duration-300 bg-white rounded-lg shadow-md w-44 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-auto h-16"
                />
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Contact */}

      <section
        id="contact"
        className="w-full px-6 py-16 bg-gradient-to-r from-rose-50 via-white to-rose-100"
      >
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-4xl font-extrabold text-[#df2868]">
              Contactez-Nous
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Nous sommes là pour répondre à toutes vos questions et vous aider
              dans vos projets. Envoyez-nous un message et nous reviendrons vers
              vous rapidement.
            </p>
            <div className="flex flex-col gap-4 text-gray-700">
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full shadow-md bg-rose-100 text-rose-600">
                  📍
                </span>
                <p className="text-lg max-md:text-[16px]">
                  32 rue El Banafsaj , Rés Azzaitouna 1er Étage
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full shadow-md bg-rose-100 text-rose-600">
                  📞
                </span>
                <p className="text-lg">+212 695592907</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-full shadow-md bg-rose-100 text-rose-600">
                  ✉️
                </span>
                <p className="text-lg">contact@initcom.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 bg-white shadow-lg rounded-2xl">
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

              <button
                onClick={() => successToast("Message Envoyé Avec succès!")}
                type="submit"
                className="px-6 py-3 text-white transition-transform duration-300 rounded-lg shadow-md bg-[#df2868] hover:scale-105"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer aria-label={""} />
      <Footer />
    </div>
  );
}

export default App;
