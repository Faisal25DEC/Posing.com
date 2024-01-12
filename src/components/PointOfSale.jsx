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
import { Box, Text, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import PostImage1 from "../assets/post_1.jpeg";
import PostImage2 from "../assets/post_2.jpeg";
import PostImage3 from "../assets/post_3.jpeg";
import PostImage4 from "../assets/post_4.jpeg";
import {
  FaCalendar,
  FaRegCalendar,
  FaRegUser,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";

const PointOfSale = () => {
  const posCards = [
    {
      image: PostImage1,
      role: "admin",
      title: "Point of Sale software card usage",
      date: "12.09.2022",
    },
    {
      image: PostImage2,
      role: "admin",
      title: "Best super shop point of sale setup",
      date: "12.09.2022",
    },
    {
      image: PostImage3,
      role: "admin",
      title: "Computer new point of sale working good",
      date: "12.09.2022",
    },
    {
      image: PostImage4,
      role: "admin",
      title: "Connectin pos to phone payment option",
      date: "12.09.2022",
    },
    {
      image: PostImage1,
      role: "admin",
      title: "Computer new point of sale working good",
      date: "12.09.2022",
    },
    {
      image: PostImage2,
      role: "admin",
      title: "Connectin pos to phone payment option",
      date: "12.09.2022",
    },
    {
      image: PostImage3,
      role: "admin",
      title: "Point of Sale software card usage",
      date: "12.09.2022",
    },
  ];
  return (
    <Box className="inventory-wrapper" pt="100px" pb="50px">
      <Flex flexDir={"column"} gap="15px">
        <Text color={textPrimary} textAlign={"center"}>
          Letest News
        </Text>
        <Heading
          textAlign={"center"}
          fontFamily={"Poppins"}
          fontSize={{ base: "36px", md: "48px" }}
          fontWeight={"600"}
        >
          Point of sale latest news
        </Heading>
      </Flex>
      <Box
        id=""
        w={{ base: "97.5%", sm: "75%", md: "87.5%" }}
        m="auto"
        className="main-wrap"
        pt="50px"
      >
        <Swiper
          id="testimonials"
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
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          breakpoints={{
            500: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 4,
              slidesPerGroup: 1,
              delay: 1000,
              spaceBetween: 20,
            },
          }}
        >
          {posCards.map((item) => (
            <SwiperSlide style={{ height: "500px" }}>
              <Flex
                flexDir={"column"}
                gap="10px"
                bg="white"
                pb="20px"
                minH={"360px"}
                roundedBottom={"5px"}
              >
                <Box overflow={"hidden"} rounded={"10px"}>
                  <Image
                    src={item.image}
                    className="pos-image"
                    objectFit={"cover"}
                    w="100%"
                    maxH={"250px"}
                  />
                </Box>
                <Flex
                  pt="20px"
                  flexDir="column"
                  gap={{ base: "10px", md: "20px" }}
                  w="80%"
                  m="auto"
                >
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Flex alignItems={"center"} gap="5px">
                      <FaRegUser color={textPrimary} />
                      <Text color={"grey"} pt="1px">
                        {item.role}
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="5px">
                      <FaRegCalendar color={textPrimary} />
                      <Text color={"grey"}>{item.date}</Text>
                    </Flex>
                  </Flex>
                  <Heading
                    className="pos-heading"
                    fontSize={{
                      base: "14px",
                      sm: "15px",
                      md: "16px",
                      lg: "20px",
                    }}
                    fontWeight={"600"}
                  >
                    {item.title}
                  </Heading>
                  <Box>
                    <Text className="pos-readmore">Read More</Text>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default PointOfSale;
