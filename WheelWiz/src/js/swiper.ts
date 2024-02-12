import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
});
