// src/components/Hero.jsx
export default function Hero() {
    return (
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-purple-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Empowering Students. Bridging Campus Gaps. 🚀
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          CampusAid helps you find study help 📖, roommates 🏡, lost items 🧳, and more — all in one place.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </section>
    );
  }
  