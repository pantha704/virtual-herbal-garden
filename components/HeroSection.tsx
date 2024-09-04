import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-[url('../data/bg.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-6xl font-bold">
          VIRTUAL <span className="text-green-400">HERBAL GARDEN</span>
        </h1>
        <p className="mt-4 text-lg">
          Revitalize with nature’s best, herbal plants for a life at rest.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">
          See More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
