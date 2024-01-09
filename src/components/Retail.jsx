import React from "react";
import { Flex, Text, Heading, Image, Box } from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import RetailImage from "../assets/retail-store.png";
import RetailIcon1 from "../assets/retail_icon_1.svg";
import RetailIcon2 from "../assets/retail_icon_2.svg";
import RetailIcon3 from "../assets/retail_icon_3.svg";
import RetailIcon4 from "../assets/retail_icon_4.svg";
import RetailIcon5 from "../assets/retail_icon_5.svg";
import RetailIcon6 from "../assets/retail_icon_6.svg";
import { motion } from "framer-motion";

const Retail = () => {
  const cardVariants = {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  const imageVariant = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  const retailStoreCards = [
    {
      title: "Food Delivery",
      icon: RetailIcon1,
    },
    {
      title: "Cycle Store",
      icon: RetailIcon2,
    },
    {
      title: "Gift Shop",
      icon: RetailIcon3,
    },
    {
      title: "Furniture Store",
      icon: RetailIcon4,
    },
    {
      title: "Clothing Store",
      icon: RetailIcon5,
    },
    {
      title: "Coffee Shop",
      icon: RetailIcon6,
    },
  ];
  return (
    <section
      style={{
        padding: "120px 0px 60px 0px",
        background: "linear-gradient(257.51deg, #F2FCFE 44.07%, #FAF1FE 100%)",
      }}
    >
      <Flex w="92.5%" m="auto" flexDir={"column"} gap="50px">
        <Flex
          w={{ base: "95%", md: "80%", lg: "60%" }}
          alignItems={"center"}
          m="auto"
          flexDir={"column"}
          gap="10px"
        >
          <Text color={textPrimary}>Retail Stores</Text>
          <Heading
            fontSize={{ base: "36px", md: "42px", lg: "48px" }}
            fontFamily={"Poppins"}
            fontWeight={"600"}
            textAlign={"center"}
          >
            Perfect point of sale software for most retail stores
          </Heading>
        </Flex>
        <Flex
          gap={{ base: "70px", lg: "0px" }}
          justifyContent={"space-between"}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box w={{ base: "100%", lg: "45%" }}>
            <motion.div
              variants={imageVariant}
              initial="initial"
              whileInView="animate"
            >
              <Image src={RetailImage} />
            </motion.div>
          </Box>
          <Flex w={{ base: "100%", lg: "50%" }} gap="25px" flexDir={"column"}>
            <Flex
              w={{ base: "97.5%", md: "93%" }}
              m={{ base: "auto", lg: "0" }}
              justifyContent={{ base: "normal", lg: "flex-end" }}
              flexDir={{ base: "column", md: "row" }}
              alignItems={"center"}
              gap="25px"
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView={"animate"}
                className="card-style"
              >
                <Flex
                  w="100%"
                  py="37.5px"
                  px={{ base: "15px" }}
                  rounded="7.5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg="white"
                  gap="20px"
                >
                  <Image src={retailStoreCards[0].icon} />
                  <Text fontSize="24px" fontWeight={"600"}>
                    {retailStoreCards[0].title}
                  </Text>
                </Flex>
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView={"animate"}
                className="card-style"
              >
                <Flex
                  w="100%"
                  py="37.5px"
                  px="15px"
                  rounded="7.5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg="white"
                  gap="15px"
                >
                  <Image src={retailStoreCards[1].icon} />
                  <Text fontSize="24px" fontWeight={"600"}>
                    {retailStoreCards[1].title}
                  </Text>
                </Flex>
              </motion.div>
            </Flex>

            <Flex
              w={{ base: "97.5%", md: "93%" }}
              m={{ base: "auto", lg: "0" }}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", lg: "center" }}
              alignItems={"center"}
              gap="20px"
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView={"animate"}
                className="card-style"
              >
                <Flex
                  w="100%"
                  py="37.5px"
                  px="15px"
                  rounded="7.5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg="white"
                  gap="15px"
                >
                  <Image src={retailStoreCards[2].icon} />
                  <Text fontSize="24px" fontWeight={"600"}>
                    {retailStoreCards[2].title}
                  </Text>
                </Flex>
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView={"animate"}
                className="card-style"
              >
                <Flex
                  w="100%"
                  py="37.5px"
                  px="15px"
                  rounded="7.5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg="white"
                  gap="15px"
                >
                  <Image src={retailStoreCards[3].icon} />
                  <Text fontSize="24px" fontWeight={"600"}>
                    {retailStoreCards[3].title}
                  </Text>
                </Flex>
              </motion.div>
            </Flex>
            <Flex
              w={{ base: "97.5%", md: "93%" }}
              m={{ base: "auto", lg: "0" }}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", lg: "flex-end" }}
              alignItems={"center"}
              gap="25px"
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView={"animate"}
                className="card-style"
              >
                <Flex
                  w="100%"
                  py="37.5px"
                  px="15px"
                  rounded="7.5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg="white"
                  gap="15px"
                >
                  <Image src={retailStoreCards[4].icon} />
                  <Text fontSize="24px" fontWeight={"600"}>
                    {retailStoreCards[4].title}
                  </Text>
                </Flex>
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView={"animate"}
                className="card-style"
              >
                <Flex
                  w="100%"
                  py="37.5px"
                  px="15px"
                  rounded="7.5px"
                  justifyContent={"center"}
                  alignItems={"center"}
                  bg="white"
                  gap="15px"
                >
                  <Image src={retailStoreCards[5].icon} />
                  <Text fontSize="24px" fontWeight={"600"}>
                    {retailStoreCards[5].title}
                  </Text>
                </Flex>
              </motion.div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

export default Retail;
