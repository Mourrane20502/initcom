import AgencyPhoto from "./assets/agency.jpg";
import LeftSidePicture from "./assets/agencybg.avif";
import ServicesSection from "./components/ServicesSection";
import ValuesSection from "./components/ValuesSection";
import { services, Valeurs } from "./data/data";
import Header from "./navigation/Header";

function App() {
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
        <div className="relative z-10 flex flex-col gap-10 justify-center items-center h-full text-center px-6">
          <h1 className="text-rose-400 text-6xl sm:text-7xl font-extrabold mb-4 tracking-wide drop-shadow-lg animate-fade-in-down">
            InitCom
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wider animate-fade-in">
            Votre Agence de Marketing Digital
          </h2>
          <p className="text-white text-lg md:text-xl max-w-4xl leading-relaxed mb-8 font-light drop-shadow-lg animate-fade-in">
            Nous aidons les entreprises à transformer leur présence en ligne grâce à des stratégies numériques innovantes, une créativité unique et des solutions sur mesure pour atteindre vos objectifs.
          </p>
          <button className="bg-gradient-to-r from-rose-500 to-red-600 text-white py-4 px-10 rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
            Contactez-Nous
          </button>
        </div>
      </section>
      {/*Qui sommes nous */}
      <section id="qui-sommes-nous" className="w-full scroll-m-16 flex flex-col md:flex-row justify-evenly items-center px-6 py-12">
  {/* Left Image */}
  <img
    src={LeftSidePicture}
    alt="left side"
    width={600}
    className="rounded-xl shadow-lg mb-6 md:mb-0 hover:scale-110 transition-all duration-500 ease-in-out"
  />

  {/* Right Text Content */}
  <div className="max-w-lg flex flex-col items-center gap-2 justify-center text-center md:text-left">
    <h2 className="text-4xl font-bold text-rose-500 mb-4">
      Qui Sommes Nous
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      <span className="text-rose-700 font-bold">INITCOM</span>  est une agence de communication basée au Maroc, spécialisée dans la création de solutions innovantes et sur mesure pour ses clients.

Notre équipe d'experts passionnés excelle dans divers domaines, notamment le marketing événementiel, le marketing opérationnel, le trade marketing et le retail marketing.

    </p>
    <p className="text-gray-700 text-lg leading-relaxed">
    Nous nous engageons à repousser les limites de la communication en apportant à chaque projet une vision unique et avant-gardiste, garantissant ainsi des résultats exceptionnels et une satisfaction client optimale.    </p>
   
    </div>
           </section>

      {/*Nos Valeurs */}
      <section className="w-full py-10 px-3 ">
          <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-4">
            {Valeurs.map(value=>(
              <ValuesSection key={value.title} {...value} />
            ))}
          </div>
      </section>

      
 {/*Nos Services */}
      <section id="services" className="w-full px-6 py-20 bg-gradient-to-b from-white to-rose-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold text-rose-600  text-center mb-16 tracking-wide">
      Nos Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {services.map((service) => (
        <ServicesSection  key={service.title} {...service}/>
      ))}
    </div>
  </div>
</section>


    <section id="contact" className="w-full px-6 py-16 bg-gradient-to-r from-rose-50 via-white to-rose-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-rose-600 mb-6">
            Contactez-Nous
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Nous sommes là pour répondre à toutes vos questions et vous aider
            dans vos projets. Envoyez-nous un message et nous reviendrons vers
            vous rapidement.
          </p>
          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-4">
              <span className="p-3 bg-rose-100 text-rose-600 rounded-full shadow-md">
                📍
              </span>
              <p className="text-lg">123 Rue de la Créativité, Casablanca , Maroc</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="p-3 bg-rose-100 text-rose-600 rounded-full shadow-md">
                📞
              </span>
              <p className="text-lg">+212 695592907</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="p-3 bg-rose-100 text-rose-600 rounded-full shadow-md">
                ✉️
              </span>
              <p className="text-lg">contact@initcom.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-rose-200"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-rose-200"
                placeholder="Votre email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-rose-200"
                rows={4}
                placeholder="Votre message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-rose-500 to-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
