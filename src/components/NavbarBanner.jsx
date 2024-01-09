import React from "react";

import { Button, Flex, Image } from "@chakra-ui/react";
import BannerLogo from "../assets/bannerlogo.svg";
const NavbarBanner = () => {
  return (
    <Flex w="100%" m="auto" bg="rgb(38,38,38)" p="3" h="60px">
      <Flex w="98%" m="auto" justifyContent={"space-between"}>
        <Image src={BannerLogo} alt="" w="150px" />
        <Button bg="#82b440" color={"white"} h="35px">
          Buy Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavbarBanner;
