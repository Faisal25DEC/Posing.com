import React, { useState } from "react";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import NavbarBanner from "./NavbarBanner";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const navItems = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Feature",
    },
    {
      title: "Pricing",
    },
    {
      title: "News",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <Box pos={"fixed"} top="0" left="0" width={"100%"} zIndex={"99"}>
      <NavbarBanner />
      <Box bg="white" w="100%" h="80px" m="0">
        <Flex
          bg="white"
          h="100%"
          width={{ base: "97%", lg: "87.5%" }}
          fontSize={"18px"}
          gap="6"
          m={"auto"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Image src={Logo} alt="" w="125px" />
          </Box>

          <Flex
            className={showNavItems ? "nav-items" : "nav-items-shrink"}
            alignItems={{ base: "start", lg: "center" }}
            px={{ base: "25px", lg: "0px" }}
            gap={"30px"}
            pos={{ base: "fixed", lg: "static" }}
            w={{ base: "100%", lg: "auto" }}
            bg={{ base: "white", lg: "inherit" }}
            flexDir={{ base: "column", lg: "row" }}
            zIndex={{ base: 100, lg: "inherit" }}
            top="140px"
            left="0px"
            py={{ base: "30px", lg: "0px" }}
            display={{ base: showNavItems ? "flex" : "none", lg: "flex" }}
          >
            {navItems.map((item) => (
              <Text>{item.title}</Text>
            ))}
          </Flex>
          <Flex alignItems={"center"} gap={{ base: "15px", lg: "30px" }}>
            <Text colorScheme="teal">Login</Text>
            <Flex alignItems={"center"} gap="5px">
              <Button
                bg={"rgb(82,200,196)"}
                color={"white"}
                h={{ base: "40px", md: "30px", lg: "50px" }}
                px={{ base: "15px", lg: "25px" }}
              >
                Start For Free
              </Button>
              <Box
                display={{ base: "block", lg: "none" }}
                onClick={() => {
                  setShowNavItems((prev) => !prev);
                }}
              >
                <GiHamburgerMenu size={"24px"} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
