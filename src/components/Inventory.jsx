import React from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import CardIcon1 from "../assets/icon_box_1.svg";
import CardIcon2 from "../assets/icon_box_2.svg";
import CardIcon3 from "../assets/icon_box_3.svg";
import CardIcon4 from "../assets/icon_box_4.svg";
const Inventory = () => {
  const cards = [
    {
      title: "Recipe management & costing",
      icon: CardIcon1,
      desc: "Lorem Ipsum is simply dummy text of the printing and formal typesetting",
    },
    {
      title: "Stock management & inventory",
      icon: CardIcon2,
      desc: "Lorem Ipsum is simply dummy text of the printing and formal typesetting",
    },
    {
      title: "Purchase management systeme",
      icon: CardIcon3,
      desc: "Lorem Ipsum is simply dummy text of the printing and formal typesetting",
    },
    {
      title: "Powerful inventory reporting",
      icon: CardIcon4,
      desc: "Lorem Ipsum is simply dummy text of the printing and formal typesetting",
    },
  ];
  return (
    <Box w="100%" py="100px" className="inventory-wrapper">
      <Flex
        w="87.5%"
        m="auto"
        flexDir={"column"}
        gap="15px"
        alignItems={"center"}
      >
        <Text color={textPrimary} fontSize={"16px"}>
          Office & Inventory
        </Text>
        <Heading
          fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          fontWeight={"600"}
          textAlign={"center"}
        >
          Our best inventory
        </Heading>
        <Grid
          w={{ base: "97.5%", md: "80%", lg: "100%" }}
          gridTemplateColumns={{ md: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          gap="25px"
          minH="400px"
          pt="40px"
        >
          {cards.map((item, idx) => {
            return (
              <GridItem
                className="card"
                bg="white"
                rounded={"12px"}
                py="40px"
                px="20px"
                maxH="340px"
                mt={idx % 2 ? "auto" : "0px"}
              >
                <Flex gap="20px" flexDir={"column"}>
                  <Flex justifyContent={"space-between"} pos="relative">
                    <Flex className="card-icon" bg="white">
                      <Flex
                        bg="#6990ff"
                        rounded={"50%"}
                        h="75px"
                        w="75px"
                        alignItems="center"
                        justifyContent={"center"}
                      >
                        <Image src={item.icon} />
                      </Flex>
                    </Flex>
                    <Text
                      pos={"absolute"}
                      top="-40px"
                      right="0px"
                      className="inventory-text"
                    >
                      0{idx + 1}
                    </Text>
                  </Flex>
                  <Heading fontSize={"20px"} fontWeight={"600"}>
                    {item.title}
                  </Heading>
                  <Text fontSize={"18px"} color="grey">
                    {item.desc}
                  </Text>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Inventory;
