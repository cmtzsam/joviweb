// import Swiper JS
import { useEffect, useRef } from 'preact/hooks';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/_gallerysection.sass';

import extintorPolvo from '../assets/extintor-polvo.png';
import extintorF50 from '../assets/extintor-f50.png';
import extintor5b from '../assets/extintor-5b.png';

const EXTINTORES_ARR = [
  {
    image: extintorPolvo,
    title: "EXTINTOR DE POLVO QUÍMICO SECO (ABC)",
    description: "Versátil y de amplio uso, combate fuegos clase A, B y C con alta eficacia y acción inmediata.",
    link: "#!"
  },
  {
    image: extintorF50,
    title: "EXTINTOR DE AGENTE ENCAPSULADOR F-500",
    description: "Apto para fuegos clase A, B y D Válvula fabricada en latón acabado el cromo. Manijas de acero inoxidable Cilindro de acero inoxidable 304L con prueba de fuga de helio al 100%...",
    link: "#!"
  },
  {
    image: extintor5b,
    title: "EXTINTOR DE FUEGO DE 5 LB CO2 MODEL: CO5LB",
    description: "Apto para fuegos clase B Y C. Válvula de material latón con mango de acero inoxidable...",
    link: "#!"
  },
];

export default function ClientsBlock() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const el = swiperRef.current;
    if (!el) return;

    // Instanciar Swiper sobre el contenedor raíz
    const swiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: el.querySelector('.extintoresNext'),
        prevEl: el.querySelector('.extintoresPrev'),
      },
      pagination: false,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });

    return () => swiper?.destroy(true, true);
  }, []);

  return (
    <section className="productsGallery pb-5" id="scrollspyClientes">
      <div className="container">
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {EXTINTORES_ARR.map((extintor, i) => (
              <div className="swiper-slide" key={i}>
                <div className="productsGallery--item text-center">
                  <div className="productsGallery--image text-center">
                    <img src={extintor.image.src} alt={extintor.title} width={extintor.image.width} height={extintor.image.height} class="d-block mx-auto img-fluid" />
                  </div>
                  <div className="productsGallery--data text-center">
                    <h2 className="text-uppercas fs-5">{extintor.title}</h2>
                    <p className="my-2">{extintor.description}</p>
                    <a href={extintor.link} class="btn btn-danger btn-sm shadow-sm text-uppercase rounded-pill px-3 fs-6">
                      Más información
                      <i class="bi bi-chevron-double-right ms-2"></i>
                    </a>                  
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="globalNavigation--navigation">
            <div className="globalNavigation--navBtns">
              <div className="globalNavigation--nav swiper-button-prev extintoresPrev"></div>
              <div className="globalNavigation--nav swiper-button-next extintoresNext"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}