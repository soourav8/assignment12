import React from "react";

import HeroDescription from "../HeroDescription/HeroDescription";
import CarouselSection from "../CarouselSection/CarouselSection";
import { PopularClasses } from "../PopularClasses/PopularClasses";
import { TopInstructors } from "../TopInstructors/TopInstructors";


const Home = () => {
  return (
    <div>
      <CarouselSection></CarouselSection>
      <HeroDescription></HeroDescription>
      <PopularClasses></PopularClasses>
      <TopInstructors></TopInstructors>

    </div>
  );
};

export default Home;
