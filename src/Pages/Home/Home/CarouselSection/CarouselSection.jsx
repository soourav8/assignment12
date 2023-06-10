import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const CarouselSection = () => {
  return (
    <div>
      <Carousel className="text-center">
        <div>
          <img src="https://cdn.pixabay.com/photo/2022/03/04/11/53/martial-arts-7047149_1280.jpg" />
         <div className="text-white   uppercase w-[1/3] -mt-[10rem] md:-mt-[20rem]  lg:-mt-[35rem] lg:space-y-3">
         <p className="text-xl md:text-5xl lg:text-7xl font-bold  md:font-extrabold lg:font-extrabold">make your summer</p>
          <p className="text-xl md:text:3xl  font-bold  md:font-extrabold lg:text-5xl lg:font-extrabold">unforgettable</p>
          <Link className="btn btn-primary mt-4">Request Info</Link>
         </div>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2022/03/04/11/51/school-7047129_1280.jpg" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2019/06/06/02/14/martial-arts-4255007_1280.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
