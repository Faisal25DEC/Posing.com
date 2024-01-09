import React from "react";
import { Box, Text, Flex, Heading, Image } from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import AboutImage1 from "../assets/about_img_1.png";
import AboutImage2 from "../assets/about_img_2.png";
import Tick from "../assets/tick.svg";
import { motion } from "framer-motion";
const About = () => {
  const textVariant = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };
  const leftImageVariant = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <Box
      bgGradient={"linear-gradient(257.51deg, #F2FCFE 44.07%, #FAF1FE 100%)"}
      pt="120px"
      pb="60px"
    >
      <Flex
        gap="50px"
        alignItems={"center"}
        w={{ base: "80%", lg: "95%" }}
        m="auto"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex>
          <Box>
            <motion.div
              variants={leftImageVariant}
              initial="initial"
              whileInView={"animate"}
            >
              <Image src={AboutImage1} />
            </motion.div>
          </Box>
        </Flex>
        <Flex flexDir={"column"} w={{ md: "100%", lg: "45%" }} gap="30px">
          <Flex flexDir="column" gap="5px">
            <motion.div
              variants={textVariant}
              initial="initial"
              whileInView={"animate"}
            >
              <Text color={textPrimary}>About POS</Text>
            </motion.div>
            <Flex flexDir={"column"} gap="5px">
              <Heading
                fontSize={{ base: "36px", md: "42px", lg: "48px" }}
                fontWeight={"600"}
                fontFamily={"Poppins"}
              >
                Best solution for point of sale
              </Heading>
              <Heading
                fontSize={{ base: "36px", md: "42px", lg: "48px" }}
                fontWeight={"600"}
                fontFamily={"Poppins"}
              >
                about details
              </Heading>
            </Flex>
          </Flex>

          <Text color="grey" fontSize={"16px"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum the & been the industry's. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages.
          </Text>
          <Flex
            gap="20px"
            alignItems={{ base: "normal", md: "center" }}
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Flex flexDir="column" w="79%" gap="15px">
              <Flex alignItems={"start"} gap="5px">
                <Image src={Tick} mt="1px" />
                <Flex flexDir="column" gap="10px">
                  <Heading fontSize="20px" fontWeight={"semibold"}>
                    Other point of sale information
                  </Heading>
                  <Text color="grey">
                    But I must explain to you how all this mistaken in
                    denouncing pleasure and praising pain was born and I will
                    give.
                  </Text>
                </Flex>
              </Flex>
              <Flex alignItems={"start"} gap="5px">
                <Image src={Tick} mt="1px" />
                <Flex flexDir="column" gap="10px">
                  <Heading fontSize="20px" fontWeight={"600"}>
                    Best process system POS
                  </Heading>
                  <Text color="grey" fontSize="16px">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti at.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <motion.div
              variants={textVariant}
              initial="initial"
              whileInView={"animate"}
            >
              <Image src={AboutImage2} w={{ base: "125px", md: "auto" }} />
            </motion.div>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
