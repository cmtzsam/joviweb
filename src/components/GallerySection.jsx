// import Swiper JS
import { useEffect, useRef } from 'preact/hooks';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/_gallerysection.sass'

import imgGalley_1 from '../assets/galeria-1.png';
import imgGalley_2 from '../assets/galeria-2.png';
import imgGalley_3 from '../assets/galeria-3.png';
import imgGalley_4 from '../assets/galeria-4.png';
import imgGalley_5 from '../assets/galeria-5.png';
import imgGalley_6 from '../assets/galeria-6.png';
import imgGalley_7 from '../assets/galeria-7.png';
import imgGalley_8 from '../assets/galeria-8.png';
import imgGalley_9 from '../assets/galeria-9.png';
import imgGalley_10 from '../assets/galeria-10.png';
import imgGalley_11 from '../assets/galeria-11.png';

const IMAGES_GALLERY = [
  imgGalley_1,
  imgGalley_2,
  imgGalley_3,
  imgGalley_4,
  imgGalley_5,
  imgGalley_6,
  imgGalley_7,
  imgGalley_8,
  imgGalley_9,
  imgGalley_10,
  imgGalley_11  
]

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
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: el.querySelector('.galleryNext'),
        prevEl: el.querySelector('.galleryPrev'),
      },
      pagination: false,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
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
          {IMAGES_GALLERY.map((imagen, i) => (
            <div class="swiper-slide gallerySection--item" key={i}>
              <div className="text-center">
                <img src={imagen.src} alt={`Logo ${i + 1}`}  />
              </div>
            </div>
          ))}
        </div>
        <div class="swiper-button-next globalNavigation--circleNav galleryNext "></div>
        <div class="swiper-button-prev globalNavigation--circleNav galleryPrev "></div>
      </div>
    </section>
  );
}