import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import IMG1 from "../../assets/t1.jpg"

import IMG2 from "../../assets/t2.jpg"
import IMG3 from "../../assets/t3.jpg"
import IMG4 from "../../assets/t4.jpg"
import IMG5 from "../../assets/t5.jpg"
import IMG6 from "../../assets/t6.jpg"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: IMG1,
    },
    {
      id: 2,
      img: IMG2
        },
    {
      id: 3,
      img: IMG3,
    },
    {
      id: 4,
      img: IMG4,
    },
    {
      id: 5,
      img: IMG5,
    },
    {
      id: 6,
      img: IMG6,
    }
  ];
  return (
    <section id="testmonials">
      <h5>Extra Co-Curricular Activities</h5>
      <h2> Coordinator, Computer Science Society, Sukkur IBA University</h2>
            <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <img src={test.img} alt="volunteering images" />
            
            
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials