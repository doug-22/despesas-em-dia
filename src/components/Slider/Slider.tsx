import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChartComponent } from "../Chart/Chart";
import styles from "./Slider.module.scss";

export function Slider() {
  const data1 = [
    ["Banco", "Quantidade"],
    ["BB", 718.79],
    ["Nu", 630.84],
    ["Inter", 416.48],
    ["C6", 95.02],
    ["Next", 139.9],
  ];

  const data2 = [
    ["Tipo", "Quantidade"],
    ["Aluguel", 750],
    ["Energia", 0],
    ["Internet", 0],
  ];
  const data3 = [
    ["Tipo", "Quantidade"],
    ["Sodexo", 886.85],
    ["Débito", 0],
    ["Crédito", 0],
  ];
  return (
    <Swiper pagination modules={[Pagination]} loop className="mySwiper">
      <SwiperSlide className={styles.slider}>
        <ChartComponent
          width={500}
          height={300}
          type="PieChart"
          data={data1}
          title="Faturas"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slider}>
        <ChartComponent
          width={500}
          height={300}
          type="PieChart"
          data={data2}
          title="Contas"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slider}>
        <ChartComponent
          width={500}
          height={300}
          type="PieChart"
          data={data3}
          title="Alimentação"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 4</SwiperSlide>
      <SwiperSlide className={styles.slider}>Slide 5</SwiperSlide>
    </Swiper>
  );
}
