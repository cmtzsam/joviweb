// import Swiper JS
import { useEffect, useRef } from 'preact/hooks';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/_gallerysection.sass';

import client1 from '../assets/cliente-1.png';
// import client2 from '../assets/cliente-2.png';
import client3 from '../assets/cliente-3.png';
import client4 from '../assets/cliente-4.png';
import client5 from '../assets/cliente-5.png';
import client6 from '../assets/cliente-6.png';
import client7 from '../assets/cliente-7.png';

const IMAGES = [
  client1,
  // client2,
  client3,
  client4,
  client5,
  client6,
  client7,
];

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
    <section className="clientsGallery pb-5" id="scrollspyClientes">
      <h2 className="text-center text-uppercase pt-5 pb-1 color-primary">
        Nuestros clientes
      </h2>
      <div className="container">
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {IMAGES.map((imagen, i) => (
              <div className="swiper-slide" key={i}>
                <div className="clientsGallery--item text-center">
                  <img src={imagen.src} alt={`Logo ${i + 1}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="globalNavigation--navigation">
            <div className="globalNavigation--navBtns">
              <div className="globalNavigation--nav swiper-button-prev clientsPrev"></div>
              <div className="globalNavigation--nav swiper-button-next clientsNext"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}