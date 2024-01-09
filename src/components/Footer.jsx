import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import FooterLogo from "../assets/logo_footer.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";

const Footer = () => {
  const footer1 = [
    {
      title: "Food Delivery",
    },
    {
      title: "Furniture Store",
    },
    {
      title: "Coffee Shop",
    },
    {
      title: "Clothing Store",
    },
    {
      title: "eCommerce",
    },
  ];
  const footer2 = [
    {
      title: "Features",
    },
    {
      title: "FAQ",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Terms of Use",
    },
  ];
  return (
    <footer style={{ backgroundColor: "#1c2528" }}>
      <section
        style={{
          padding: "120px 0px 60px 0px",
          width: "87.5%",
          margin: "auto",
          color: "lightgrey",
        }}
      >
        <Flex
          justifyContent={"space-between"}
          gap={{ base: "50px", lg: "0px" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex
            gap={{ base: "50px", lg: "100px" }}
            w={{ base: "100%", md: "50%", lg: "45%" }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Flex
              flexDir={"column"}
              gap={"20px"}
              w={{ base: "100%", lg: "50%" }}
            >
              <Box>
                <Image src={FooterLogo} />
              </Box>
              <Text w="90%">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so
              </Text>
              <Flex gap="10px" alignItems={"center"}>
                <Image src={Facebook} />
                <Image src={Twitter} />
                <Image src={Instagram} />
              </Flex>
            </Flex>
            <Flex flexDir={"column"} gap="20px">
              <Heading fontSize={"22px"} fontFamily={"Poppins"} color="white">
                Available POS
              </Heading>
              <Flex flexDir={"column"} gap="10px">
                {footer1.map((item) => (
                  <Text>{item.title}</Text>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="60px" flexDir={{ base: "column", lg: "row" }} w="50%">
            <Flex flexDir={"column"} gap="20px" w={{ base: "100%", lg: "40%" }}>
              <Heading fontFamily={"Poppins"} fontSize={"22px"} color="white">
                Company
              </Heading>
              <Flex flexDir={"column"} gap="10px">
                {footer2.map((item) => (
                  <Text>{item.title}</Text>
                ))}
              </Flex>
            </Flex>
            <Flex flexDir={"column"} gap="20px" w={{ base: "100%", lg: "50%" }}>
              <Heading fontFamily={"Poppins"} fontSize={"22px"} color="white">
                Subscribe Us
              </Heading>
              <Text>
                Get Business news, tip and solutions to your problems from our
                experts.
              </Text>
              <Flex flexDir={"column"} gap="10px">
                <Input placeholder="Email Address" bg="white" />
                <Button bg="#6990ff" h="50px" color="white">
                  Subscribe
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </section>
      <section
        style={{
          width: "100%",
          padding: "20px 0px",
          borderTop: "solid 1px grey",
        }}
      >
        <Text align={"center"} color="lightgrey">
          Copyright 2022. Created by Thememarch.
        </Text>
      </section>
    </footer>
  );
};

export default Footer;
