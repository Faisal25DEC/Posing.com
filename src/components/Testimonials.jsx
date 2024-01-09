import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import Avatar1 from "../assets/avatar_1.png";
import Avatar2 from "../assets/avatar_2.png";
import Avatar3 from "../assets/avatar_3.png";
import { FaStar } from "react-icons/fa";
import { textPrimary } from "./../assets/constants";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Edward Wolfe",
      desc: `With Thrive’s help, we were able to increase the
        functionality of our website dramatically while were able to
        increase the.`,
      avatar: Avatar1,
      title: "Customer",
      rating: 5,
    },
    {
      name: "Rodney Bryner",
      desc: `With Thrive’s help, we were able to increase the
        functionality of our website dramatically while were able to
        increase the.`,
      avatar: Avatar2,
      title: "Customer",
      rating: 4.5,
    },
    {
      name: "Jackque Askew",
      desc: `With Thrive’s help, we were able to increase the
        functionality of our website dramatically while were able to
        increase the.`,
      avatar: Avatar3,
      title: "Customer",
      rating: 4,
    },
    {
      name: "Edward Wolfe",
      desc: `With Thrive’s help, we were able to increase the
        functionality of our website dramatically while were able to
        increase the.`,
      avatar: Avatar1,
      title: "Customer",
      rating: 4,
    },
    {
      name: "Rodney Bryner  ",
      desc: `With Thrive’s help, we were able to increase the
        functionality of our website dramatically while were able to
        increase the.`,
      avatar: Avatar2,
      title: "Customer",
      rating: 4,
    },
    {
      name: "Edward Wolfe",
      desc: `With Thrive’s help, we were able to increase the
        functionality of our website dramatically while were able to
        increase the.`,
      avatar: Avatar3,
      title: "Customer",
      rating: 4.5,
    },
  ];
  return (
    <Box
      bgGradient={"linear-gradient(257.51deg, #F2FCFE 44.07%, #FAF1FE 100%)"}
      py="45px"
      className=".ExampleComponent"
    >
      <Flex flexDir={"column"} gap="10px">
        <Text color={textPrimary} textAlign={"center"}>
          Testimonials
        </Text>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          fontWeight={"600"}
        >
          What Our Client's Say
        </Heading>
      </Flex>
      <Box id="" w="87.5%" m="auto" className="main-wrap" pt="50px">
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
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide style={{ height: "330px" }}>
              <Flex
                bg="white"
                rounded="10px"
                px="25px"
                py="25px"
                flexDir={"column"}
                gap="30px"
              >
                <Text color={"grey"}>{item.desc}</Text>
                <Flex alignItems={"center"} gap="10px">
                  <Box maxW="100px" maxH="100px">
                    <Image src={item.avatar} rounded={"50%"} maxW="100%" />
                  </Box>
                  <Flex flexDir={"column"} gap="2px">
                    <Heading fontSize={"20px"} fontWeight={"600"}>
                      {item.name}
                    </Heading>
                    <Text color="grey">{item.title}</Text>
                    <Rating
                      initialRating={item.rating}
                      fractions={2}
                      fullSymbol={<FaStar color="#ffbe17" />}
                      emptySymbol={<FaStar color="#ffebb9" />}
                      readonly={true}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
