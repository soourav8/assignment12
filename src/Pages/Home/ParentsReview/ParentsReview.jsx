import React from "react";
import {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ParentsReview = () => {
    return (
        <div className="mt-12 mb-12 text-center">
            <p className="text-3xl font-extrabold ">Parents Reviews</p>
            <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="mt-5">
            <p className="text-xl font-bold">Sudha Hariharan</p>
            <p >"Sending our child to the summer sports camp was one of the best decisions we made! The camp provided a fantastic range of activities, from soccer and swimming to archery and rock climbing. Our kid came back with improved skills and a newfound passion for sports. The staff were friendly and knowledgeable, ensuring a safe and enjoyable experience for all the campers. We highly recommend this camp for any sports-loving child!" </p>
        </SwiperSlide>
        <SwiperSlide className="mt-5">
            <p className="text-xl font-bold">Saaniddhya Sarda</p>
            <p >"Our experience with the summer sports camp exceeded our expectations. The facilities were top-notch, with well-maintained fields and courts. The coaches were exceptional, offering personalized attention and guidance to each child. Our daughter, who was initially hesitant about sports, came back beaming with confidence and a newfound love for basketball. We were impressed with the camp's organization and the emphasis they placed on teamwork and sportsmanship. We will definitely be enrolling her again next year!"  </p>
        </SwiperSlide>
        <SwiperSlide className="mt-5">
            <p className="text-xl font-bold">Anish Garg</p>
            <p >"The summer sports camp was an absolute blast for our son! He had the opportunity to try out a variety of sports, including tennis, baseball, and swimming. The camp had a perfect balance of skill-building drills and friendly competitions, which kept the kids engaged and excited. The camp counselors were amazing, creating a positive and inclusive atmosphere. Our son made new friends and had an unforgettable summer experience. We cannot wait to sign him up for another session next year!" </p>
        </SwiperSlide>
        <SwiperSlide className="mt-5">
            <p className="text-xl font-bold">Mark T</p>
            <p >"We couldn't be happier with our daughter's experience at the summer sports camp. The camp not only focused on physical development but also emphasized the importance of nutrition and mental well-being. The campers were taught about healthy eating habits and participated in mindfulness exercises. The camp's holistic approach to sports education impressed us greatly. Our daughter's confidence and endurance improved significantly, and she formed lasting friendships with fellow campers. We highly recommend this camp to parents looking for a well-rounded sports program." </p>
        </SwiperSlide>
        <SwiperSlide className="mt-5">
            <p className="text-xl font-bold">Sumy Laurence</p>
            <p >"As first-time camp parents, we were a bit apprehensive, but the summer sports camp proved to be an excellent choice. The communication from the camp staff was outstanding, keeping us updated about schedules and activities. The camp had a strong emphasis on safety, and we felt assured that our child was in good hands. The range of sports offered was impressive, and our son had a blast exploring new activities. The camp provided a perfect balance of skill development and fun, making it a memorable summer for our family." </p>
        </SwiperSlide>
        <SwiperSlide className="mt-5">
            <p className="text-xl font-bold">James Cameron</p>
            <p >"Our son has been attending the summer sports camp for the past three years, and it continues to exceed our expectations. The camp has a well-established program that caters to different age groups and skill levels. The coaches are experienced and passionate about their respective sports, instilling a love for the game in every child. Our son's skills have grown tremendously, and he looks forward to the camp every year. The camaraderie and sportsmanship fostered at this camp are truly remarkable. We highly recommend it to any sports-loving family!" </p>
        </SwiperSlide>
        
        
      </Swiper>
            
        </div>
    );
}