import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import ClientIcon1 from "../assets/client_1.svg";
import ClientIcon2 from "../assets/client_2.svg";
import ClientIcon3 from "../assets/client_3.svg";
import ClientIcon4 from "../assets/client_4.svg";
import ClientIcon5 from "../assets/client_5.svg";
import ClientIcon6 from "../assets/client_6.svg";

const Clients = () => {
  const clients = [
    {
      icon: ClientIcon1,
    },
    {
      icon: ClientIcon2,
    },
    {
      icon: ClientIcon3,
    },
    {
      icon: ClientIcon4,
    },
    {
      icon: ClientIcon5,
    },
    {
      icon: ClientIcon1,
    },
    {
      icon: ClientIcon6,
    },
    {
      icon: ClientIcon1,
    },
    {
      icon: ClientIcon2,
    },
    {
      icon: ClientIcon3,
    },
    {
      icon: ClientIcon4,
    },
    {
      icon: ClientIcon5,
    },
  ];
  return (
    <Box className="inventory-wrapper" pt="120px" pb="60px">
      <Flex flexDir={"column"} gap="10px">
        <Text
          textAlign={"center"}
          fontFamily={"Poppins"}
          fontSize={"18px"}
          color={textPrimary}
        >
          Our Clients
        </Text>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          fontFamily={"Poppins"}
          fontWeight={"600"}
        >
          Who we partner with
        </Heading>
      </Flex>
      <Box id="" w="87.5%" m="auto" className="main-wrap" pt="50px">
        <Swiper
          id="clients"
          style={{
            "--swiper-pagination-color": "#00d6ce",
            "--swiper-pagination-bullet-inactive-color": "#00d6ce",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-width": "9px",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "2px",
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
              centeredSlides: true,
            },
            340: {
              slidesPerView: 1.5,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2.5,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
            },
            960: {
              slidesPerView: 3.5,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.5,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 20,
            },
            1225: {
              slidesPerView: 5.5,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 20,
            },
          }}
        >
          {clients.map((item) => (
            <SwiperSlide style={{ height: "270px" }}>
              <Flex
                w="200px"
                h="160px"
                bg="#6990ff"
                pt="10px"
                justifyContent={"center"}
                alignItems={"center"}
                rounded={"10px"}
              >
                <Image src={item.icon} w="70%" h="70%" />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Clients;
