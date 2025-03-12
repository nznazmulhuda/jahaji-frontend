"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function ProductSwiper() {
  interface PaginationOptions {
    clickable: boolean;
    renderBullet: (index: number, className: string) => string;
  }

  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="mt-10 ' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            src="https://placehold.co/300.png"
            alt="Product 1"
            width={300}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductSwiper