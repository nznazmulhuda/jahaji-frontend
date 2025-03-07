"use client"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Slide from './ui/slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import bannerData from '@/constant/banner';

function Banner() {
  return (
    <div className='container h-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className='h-full rounded-xl'
      >
        {
          bannerData.map((data, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "100% 100%",
                objectFit: "cover",
              }}
              className='h-full flex items-center justify-center cursor-grab'
            >
              <Slide
                title={data.title}
                description={data.description}
                isLeftToRight={data.isLeftToRight}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Banner