import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slider.module.scss";

export function Slider() {
  return (
    <Swiper pagination modules={[Pagination]} loop className="mySwiper">
      <SwiperSlide className={styles.slider}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 4</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 5</SwiperSlide>
    </Swiper>
  );
}
