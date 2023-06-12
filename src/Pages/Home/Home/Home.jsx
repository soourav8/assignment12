import React from "react";

import HeroDescription from "../HeroDescription/HeroDescription";
import CarouselSection from "../CarouselSection/CarouselSection";
import { PopularClasses } from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <CarouselSection></CarouselSection>
      <HeroDescription></HeroDescription>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
