// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import NavButton from '../UI/NavButton';

function Slider({
  children,
  slidesPerView = 2,
  spaceBetween = 30,
  autoplay = true,
}) {
  return (
    <div>
      <div className='flex items-center gap-4'>
        <NavButton
          className='btn-prev'
          flip
        />
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
          }}
          pagination={{
            el: '.pagination',
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} bg-brand-color w-3 h-3 rounded-full mx-1"></span>`,
          }}
          autoplay={
            autoplay ? { delay: 4000, disableOnInteraction: false } : false
          }
          loop={true}
          breakpoints={{
            300: { slidesPerView: 1 },
            1024: { slidesPerView: slidesPerView },
          }}
        >
          {children.map((slide, index) => (
            <SwiperSlide
              className='pt-3 transition-all duration-700 ease-in-out opacity-40 
                         flex justify-center
                         [&.swiper-slide-active]:opacity-100
                         lg:[&.swiper-slide-active]:justify-end
                         lg:[&.swiper-slide-next]:opacity-100
                         lg:[&.swiper-slide-next]:justify-start'
              key={index}
            >
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>

        <NavButton className='btn-next' />
      </div>
      <div className='pagination flex justify-center mt-4 md:mt-10'></div>
    </div>
  );
}

export default Slider;
