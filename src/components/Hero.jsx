import React from "react";
import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";
import HeroBg from "../assets/hero_bg.svg";
import HeroImgBg from "../assets/hero_img_bg.png";
import HeroImg from "../assets/hero_img.png";
import { motion } from "framer-motion";
const Hero = () => {
  const imageVariants = {
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
  return (
    <Box w="100%" mt={"140px"}>
      <Box w="100%" className="hero-bg" minH={"max-content"} py="30px">
        <Flex
          m="auto"
          flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
          h="100%"
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
          }}
          justifyContent={"space-between"}
          w={{ md: "95%", lg: "87.5%" }}
          gap={{ base: "20px", lg: "0px" }}
          pt={{ base: "30px", md: "0px", lg: "0px" }}
        >
          <Flex flexDir={"column"} gap="10px" pb="50px" pl="20px">
            <Box>
              <Text fontSize={"16px"} color="rgb(82,200,196)">
                Free Forever For All Users.
              </Text>
              <Heading
                fontSize={{ base: "40px", md: "60px", lg: "80px" }}
                fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Easy-to-use
              </Heading>
              <Heading
                fontSize={{ base: "40px", md: "60px", lg: "80px" }}
                fontWeight={"bold"}
                fontFamily={"Poppins"}
              >
                Point of Sale{" "}
              </Heading>
            </Box>

            <Flex flexDir={"column"} color="grey">
              <Text fontSize={{ base: "16px", lg: "18px" }}>
                You may start selling in a matter of minutes and easy to
              </Text>
              <Text fontSize={{ base: "16px", lg: "18px" }}>
                use. Appropriate for all devices.
              </Text>
            </Flex>
            <Button
              color="white"
              bg="#6990ff"
              w={{ base: "50%", md: "40%", lg: "35%" }}
              h="50px"
              mt="25px"
            >
              Start Free Trial
            </Button>
          </Flex>
          <Box
            alignSelf={{ base: "center", md: "center" }}
            pos="relative"
            h={{ base: "350px", md: "60%", lg: "95%" }}
            w={{ base: "350px", md: "60%", lg: "auto" }}
          >
            <Image src={HeroImgBg} h="95%" w={{ md: "100%", lg: "100%" }} />
            <motion.div
              variants={imageVariants}
              initial="initial"
              whileInView="animate"
              style={{
                position: "absolute",
                top: "0",
                right: "40px",
                width: "90%",
                height: "100%",
              }}
            >
              <Image src={HeroImg} w="97.5%" h="97.5%" />
            </motion.div>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
