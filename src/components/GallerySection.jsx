// import Swiper JS
import { useEffect, useRef } from 'preact/hooks';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/_gallerysection.sass'

const IMAGES = Array.from({length:8}, (_,i)=>`https://placehold.co/380x275?text=Logo+${i+1}`);

export default function GallerySection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const el = swiperRef.current;
    if (!el) return;

    // Instanciar Swiper sobre el contenedor raíz
    const swiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: el.querySelector('.galleryNext'),
        prevEl: el.querySelector('.galleryPrev'),
      },
      pagination: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
    });

    return () => swiper?.destroy(true, true);
  }, []);

  return (
    <section class="gallerySection" >
      <h2 class="text-center text-uppercase py-4 text-white bg-black">
        Visita nuestra galería
      </h2>
      <div class="swiper" ref={swiperRef} >
        <div class="swiper-wrapper">
          {IMAGES.map((src, i) => (
            <div class="swiper-slide gallerySection--item" key={i}>
              <div className="text-center">
                <img src={src} alt={`Logo ${i + 1}`}  />
              </div>
            </div>
          ))}
        </div>
        <div class="swiper-button-prev globalNavigation--circleNav galleryNext "></div>
        <div class="swiper-button-next globalNavigation--circleNav galleryPrev "></div>
      </div>
    </section>
  );
}