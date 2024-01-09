import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import FunFact1 from "../assets/funfact_icon_1.svg";
import FunFact2 from "../assets/funfact_icon_2.svg";
import FunFact3 from "../assets/funfact_icon_3.svg";
import FunFact4 from "../assets/funfact_icon_4.svg";
import AnimatedNumbers from "react-animated-numbers";
const FunFact = () => {
  const funFactCards = [
    {
      number: 320,
      title: "+",
      overview: "Retail Stores",
      image: FunFact1,
    },
    {
      number: 92,
      title: "k",
      overview: "Customer",
      image: FunFact2,
    },
    {
      number: 20,
      title: "k",
      overview: "Positive Rating",
      image: FunFact3,
    },
    {
      number: 20,
      title: "+",
      overview: "Award Winning",
      image: FunFact4,
    },
  ];
  return (
    <Box
      bgGradient={"linear-gradient(257.51deg, #F2FCFE 44.07%, #FAF1FE 100%)"}
      pt="80px"
      pb="40px"
    >
      <Box
        bg="#6990ff"
        py="75px"
        w={{ base: "100%", md: "92.5%", lg: "87.5%" }}
        m="auto"
        rounded={{ base: "0px", md: "15px" }}
      >
        <Flex
          justifyContent={"center"}
          gap="30px"
          flexDir={{ base: "column", md: "row" }}
        >
          {/* First Two */}
          <Flex
            alignItems={"center"}
            gap="30px"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Flex alignItems={"center"} gap="15px" py="25px">
              <Box
                bg="white"
                w="75px"
                h="75px"
                rounded={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={funFactCards[0].image} />
              </Box>
              <Flex
                flexDir={"column"}
                pr="35px"
                borderRight={{
                  base: "none",
                  md: "solid 0.1px rgb(232,232,232,0.5) !important",
                }}
                borderRightWidth={"0px"}
              >
                <Heading
                  color={"white"}
                  fontFamily={"Poppins"}
                  fontWeight={"bold"}
                  fontSize={"48px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <AnimatedNumbers
                    transitions={() => ({
                      type: "spring",
                      duration: 10,
                    })}
                    fontStyle={{
                      fontSize: 48,
                      color: "white",
                    }}
                    animateToNumber={funFactCards[0].number}
                  />
                  {funFactCards[0].title}
                </Heading>
                <Text color={"#ececec"}>{funFactCards[0].overview}</Text>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} gap="15px" py="25px">
              <Box
                bg="white"
                w="75px"
                h="75px"
                rounded={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={funFactCards[1].image} />
              </Box>
              <Flex
                flexDir={"column"}
                pr="35px"
                borderRight={{
                  base: "none",
                  md: "solid 0.1px rgb(232,232,232,0.5) !important",
                }}
              >
                <Heading
                  color={"white"}
                  fontFamily={"Poppins"}
                  fontWeight={"bold"}
                  fontSize={"48px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <AnimatedNumbers
                    transitions={() => ({
                      type: "spring",
                      duration: 10,
                    })}
                    fontStyle={{
                      fontSize: 48,
                      color: "white",
                    }}
                    animateToNumber={funFactCards[1].number}
                  />
                  {funFactCards[1].title}
                </Heading>
                <Text color={"#ececec"}>{funFactCards[1].overview}</Text>
              </Flex>
            </Flex>
          </Flex>
          {/* Last Two */}
          <Flex
            alignItems={"center"}
            gap="30px"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Flex alignItems={"center"} gap="15px" py="25px">
              <Box
                bg="white"
                w="75px"
                h="75px"
                rounded={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={funFactCards[2].image} />
              </Box>
              <Flex
                flexDir={"column"}
                pr="35px"
                borderRight={{
                  base: "none",
                  lg: "solid 0.1px rgb(232,232,232,0.5) !important",
                }}
                borderRightWidth={"0px"}
              >
                <Heading
                  color={"white"}
                  fontFamily={"Poppins"}
                  fontWeight={"bold"}
                  fontSize={"48px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <AnimatedNumbers
                    transitions={() => ({
                      type: "spring",
                      duration: 10,
                    })}
                    fontStyle={{
                      fontSize: 48,
                      color: "white",
                    }}
                    animateToNumber={funFactCards[2].number}
                  />
                  {funFactCards[2].title}
                </Heading>
                <Text color={"#ececec"}>{funFactCards[2].overview}</Text>
              </Flex>
            </Flex>
            <Flex alignItems={"center"} gap="15px" py="25px">
              <Box
                bg="white"
                w="75px"
                h="75px"
                rounded={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={funFactCards[3].image} />
              </Box>
              <Flex
                flexDir={"column"}
                pr="35px"
                borderRight="none"
                borderRightWidth={"0px"}
              >
                <Heading
                  color={"white"}
                  fontFamily={"Poppins"}
                  fontWeight={"bold"}
                  fontSize={"48px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <AnimatedNumbers
                    transitions={() => ({
                      type: "spring",
                      duration: 10,
                    })}
                    fontStyle={{
                      fontSize: 48,
                      color: "white",
                    }}
                    animateToNumber={funFactCards[3].number}
                  />
                  {funFactCards[3].title}
                </Heading>
                <Text color={"#ececec"}>{funFactCards[3].overview}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default FunFact;
