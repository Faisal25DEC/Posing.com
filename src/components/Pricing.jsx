import React from "react";
import { Box, Flex, Image, Text, Heading, Button } from "@chakra-ui/react";
import PriceIcon1 from "../assets/pricing_icon_1.svg";
import PriceIcon2 from "../assets/pricing_icon_2.svg";
import PriceIcon3 from "../assets/pricing_icon_3.svg";
import Tick from "../assets/tick.svg";
import { CrossIcon } from "../assets/Cross";
import { textPrimary } from "../assets/constants";

const Pricing = () => {
  const pricingCards = [
    {
      title: "Silver",
      icon: PriceIcon1,
      grandient: "linear-gradient(257.51deg, #F2FCFE 34.07%, #FAF1FE 100%)",
      price: 43,
      desc: [
        {
          title: "Unlimited users",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Unlimited customers",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Access from anywhere",
          icon: <CrossIcon />,
          color: "#bababa",
        },
        {
          title: "Accept payment 24/7",
          icon: <CrossIcon />,
          color: "#bababa",
        },
        {
          title: "Free Support",
          icon: <CrossIcon />,
          color: "#bababa",
        },
      ],
    },
    {
      title: "Bronze",
      icon: PriceIcon2,
      gradient: "linear-gradient(257.51deg, #F2FCFE 34.07%, #FAF1FE 100%)",
      price: 65,
      desc: [
        {
          title: "Unlimited users",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Unlimited customers",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Access from anywhere",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Accept payment 24/7",
          icon: <CrossIcon color="grey" />,
          color: "#bababa",
        },
        {
          title: "Free Support",
          icon: <CrossIcon />,
          color: "#bababa",
        },
      ],
    },
    {
      title: "Gold",
      icon: PriceIcon3,
      gradient: "linear-gradient(257.51deg, #F2FCFE 34.07%, #FAF1FE 100%)",
      price: 99,
      desc: [
        {
          title: "Unlimited users",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Unlimited customers",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Access from anywhere",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Accept payment 24/7",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
        {
          title: "Free Support",
          icon: <Image src={Tick} w="16px" h="16px" />,
          color: "black",
        },
      ],
    },
  ];
  return (
    <Flex
      className="inventory-wrapper"
      py="100px"
      flexDir={"column"}
      gap="30px"
    >
      <Box>
        <Text textAlign={"center"} color={textPrimary}>
          Our Plan
        </Text>
        <Heading
          mt="5px"
          textAlign={"center"}
          fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          fontFamily={"Poppins"}
          fontWeight={"600"}
        >
          The best choice for you
        </Heading>
      </Box>

      <Flex
        w={{ base: "97.5%", sm: "95%", md: "92.5%", lg: "87.5%" }}
        m="auto"
        justifyContent={"space-between"}
        gap="30px"
        flexDir={{ base: "column", lg: "row" }}
        py={{ base: "25px", lg: "0px" }}
      >
        {pricingCards.map((item) => (
          <Flex
            m="auto"
            py="50px"
            flexDir={"column"}
            alignItems={"start"}
            bg="white"
            rounded={"15px"}
            gap="30px"
            w={{ base: "95%", md: "75%", lg: "32%" }}
          >
            <Flex gap="20px" alignItems={"center"} px="55px">
              <Flex
                w="75px"
                h="75px"
                rounded={"50%"}
                bgGradient={
                  "linear-gradient(257.51deg, #F2FCFE 34.07%, #FAF1FE 100%)"
                }
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src={item.icon} />
              </Flex>
              <Text fontSize={"20px"} fontWeight={"600"}>
                {item.title}
              </Text>
            </Flex>
            <Flex flexDir={"column"} px="55px">
              <Flex gap="5px" alignItems={"flex-end"}>
                <Heading
                  color="#6990ff"
                  fontFamily={"Poppins"}
                  fontSize={"58px"}
                >
                  ${item.price}
                </Heading>
                <Text pb="12px">/month</Text>
              </Flex>
              <Text color={textPrimary}>Get 7 Days Free Trial</Text>
            </Flex>
            <Box border={"solid 1px #ececed"} w="100%"></Box>
            <Flex px="55px" flexDir={"column"} gap="15px">
              {item.desc.map((ele) => (
                <Flex alignItems={"center"} gap="7.5px">
                  {ele.icon}
                  <Text color={ele.color}>{ele.title}</Text>
                </Flex>
              ))}
              <Button bg="#6990ff" color="white" mt="15px" w="75%">
                Buy Now
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Pricing;
