import React from "react";
import { Link } from "react-router-dom";

const HeroDescription = () => {
  return (
    <div className="w-1/2 mx-auto text-center space-y-3">
      <h2 className="text-xl font-semibold md:text-3xl md:font-bold">BECOME PART OF SOMETHING </h2>
      <h2 className="text-xl font-semibold md:text-3xl md:font-bold"> BIGGER THAN YOURSELF</h2>
      <p className="text-xl md:text-2xl">Hayo-Went-Ha Camps provide unforgettable summer camp experiences for boys and girls in beautiful northern Michigan. Every summer at Hayo-Went-Ha Camps is unique. For over 100 years, campers and staff from across the world with wildly different backgrounds assemble to forge their community, one anchored in the traditions of the thousands of participants that came before them.  Each for all, all for each, is the rallying cry of our campers and staff. We seek to lift one another to new heights of personal and collective accomplishment. Join us this summer and become part of something bigger than yourself.</p>
      <Link className="btn bg-[#FC5640]" to=''>Summer Camp</Link>
    </div>
  );
};

export default HeroDescription;
