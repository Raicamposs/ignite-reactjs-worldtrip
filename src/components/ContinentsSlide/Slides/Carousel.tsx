import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Continent } from "./Continents";
import { Slide } from "./Slide";


export const Carousel = (): ReactElement => {

  const router = useRouter();
  const [state, setState] = useState<Continent[]>([]);

  useEffect(() => {
    fetch('api/travel/continents')
      .then(response => response.json())
      .then(data => setState(data));
  }, [])

  const onClick = (id: number) => {
    router.push('/continents/' + id);
  }

  return (
    <Box
      _hover={{ cursor: 'pointer' }}
      px={[0, 8]} h={'lg'} w="full" >
      <Swiper

        pagination={{
          dynamicBullets: true,
        }}

        navigation={true}
        autoplay={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {state.map((continent: Continent) => <SwiperSlide onClick={() => onClick(continent.id)} key={continent.id}  ><Slide continent={continent} /></SwiperSlide>)}
      </Swiper>
    </Box >
  )
}