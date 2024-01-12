import React from "react";
import FeatureIcon1 from "../assets/icon_box_5.svg";
import FeatureIcon2 from "../assets/icon_box_6.svg";
import FeatureIcon3 from "../assets/icon_box_7.svg";
import FeatureIcon4 from "../assets/icon_box_8.svg";
import FeatureIcon5 from "../assets/icon_box_9.svg";
import FeatureIcon6 from "../assets/icon_box_10.svg";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/framer.utils";
const Features = () => {
  const featureCards = [
    {
      title: "Effortless Card",
      icon: FeatureIcon1,
      desc: "Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy",
    },
    {
      title: "Effortless Card",
      icon: FeatureIcon2,
      desc: "Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy",
    },
    {
      title: "Effortless Card",
      icon: FeatureIcon3,
      desc: "Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy",
    },
    {
      title: "Effortless Card",
      icon: FeatureIcon4,
      desc: "Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy",
    },
    {
      title: "Effortless Card",
      icon: FeatureIcon5,
      desc: "Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy",
    },
    {
      title: "Effortless Card",
      icon: FeatureIcon6,
      desc: "Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy",
    },
  ];
  return (
    <Box pt="100px" pb="50px" className="inventory-wrapper">
      <Flex
        w={{ base: "95%", sm: "90%", md: "80%", lg: "87.5%" }}
        m="auto"
        flexDir={"column"}
        gap="50px"
      >
        <Flex flexDir={"column"} gap="5px">
          <motion.div
            variants={textVariant}
            initial="initial"
            whileInView={"animate"}
          >
            <Text color={textPrimary} textAlign={"center"}>
              POS Features
            </Text>
          </motion.div>
          <Heading
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          >
            Available features
          </Heading>
        </Flex>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap="25px"
        >
          {featureCards.map((item) => (
            <GridItem className="card">
              <Flex
                alignItems={"start"}
                gap="20px"
                bg="white"
                rounded={"15px"}
                py="25px"
                px="20px"
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="65px"
                  h="65px"
                  rounded={"50%"}
                  bg="#6990ff"
                  className="card-icon"
                >
                  <Image src={item.icon} />
                </Flex>
                <Flex flexDir={"column"} gap="10px" w="80%">
                  <Heading
                    fontSize={"20px"}
                    fontFamily={"Poppins"}
                    fontWeight={"600"}
                  >
                    {item.title}
                  </Heading>
                  <Text color={"grey"} fontSize="16px">
                    {item.desc}
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Features;
