// import Swiper JS
import { useEffect, useRef } from 'preact/hooks';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/_gallerysection.sass'

const IMAGES = Array.from({length:8}, (_,i)=>`https://placehold.co/200?text=Logo+${i+1}`);

export default function ClientsBlock() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const el = swiperRef.current;
    if (!el) return;

    // Instanciar Swiper sobre el contenedor raíz
    const swiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: el.querySelector('.clientsNext'),
        prevEl: el.querySelector('.clientsPrev'),
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
    <section class="clientsGallery  pb-5" id="scrollspyClientes" >
      <h2 class="text-center text-uppercase py-4 color-primary">
        Nuestros clientes
      </h2>
      <div className="container">
        <div class="swiper" ref={swiperRef} >
          <div class="swiper-wrapper">
            {IMAGES.map((src, i) => (
              <div class="swiper-slide" key={i}>
                <div className="text-center">
                  <img src={src} alt={`Logo ${i + 1}`}  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="globalNavigation--navigation  ">
            <div className="globalNavigation--navBtns">
              <div class="globalNavigation--nav swiper-button-prev clientsPrev "></div>
              <div class="globalNavigation--nav swiper-button-next clientsNext "></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}