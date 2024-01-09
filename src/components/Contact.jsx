import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Input,
  Button,
} from "@chakra-ui/react";
import { textPrimary } from "../assets/constants";
import ContactIcon1 from "../assets/contact_icon_1.svg";
import ContactIcon2 from "../assets/contact_icon_2.svg";
import ContactIcon3 from "../assets/contact_icon_3.svg";

const Contact = () => {
  const contactInfo = [
    {
      title: "Address",
      desc: "4117 Leroy LaneHarold, KY 41635",
      icon: ContactIcon1,
    },
    {
      title: "Contract Number",
      desc: "+606-243-4966",
      icon: ContactIcon2,
    },
    {
      title: "Email Address",
      desc: "demo@gmail.com",
      icon: ContactIcon3,
    },
  ];
  return (
    <section
      style={{
        background: "linear-gradient(257.51deg, #F2FCFE 44.07%, #FAF1FE 100%)",
        width: "100%",
        padding: "120px 0px",
      }}
    >
      <Box w={{ base: "80%", md: "70%", lg: "87.5%" }} m="auto">
        <Flex
          justifyContent={"space-between"}
          gap={{ base: "50px", lg: "0px" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Flex flexDir={"column"} gap="20px" w={{ base: "100%", lg: "40%" }}>
            <Flex gap="5px" flexDir={"column"}>
              <Text color={textPrimary}>Contact Us</Text>
              <Flex flexDir="column" gap="-2px">
                <Heading
                  fontFamily={"Poppins"}
                  fontWeight={"600"}
                  fontSize={{ base: "28px", md: "32px", lg: "40px" }}
                >
                  If you have any queries, feel free to contact us
                </Heading>
              </Flex>
            </Flex>

            <Text color={"grey"} fontSize={{ sm: "16px", md: "18px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the Lorem Ipsum is
              simply dummy text of the printing and typesetting.
            </Text>
            <Flex flexDir={"column"} gap="25px">
              {contactInfo.map((item) => (
                <Flex gap="15px" alignItems={"center"}>
                  <Box>
                    <Image src={item.icon} />
                  </Box>
                  <Flex flexDir={"column"}>
                    <Heading
                      fontSize={"17px"}
                      fontFamily={"Poppins"}
                      fontWeight={"600"}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      color="grey"
                      fontWeight={"light"}
                      fontSize={{ sm: "16px", md: "18px" }}
                    >
                      {item.desc}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex w={{ base: "100%", lg: "50%" }} flexDir={"column"} gap="25px">
            <Heading
              fontSize={"20px"}
              fontFamily={"Poppins"}
              fontWeight={"600"}
            >
              Please Fill Up the Form
            </Heading>
            <Flex flexDir={"column"} gap="25px">
              <Flex gap="10px">
                <Input
                  bg={"white"}
                  placeholder="Name"
                  h="55px"
                  border={"none"}
                />
                <Input
                  bg="white"
                  placeholder="Email Address"
                  h="55px"
                  border={"none"}
                />
              </Flex>
              <Input
                placeholder="Phone Number"
                bg="white"
                h="55px"
                border={"none"}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="7.5"
                placeholder="Your Message"
                style={{
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
                className="textarea"
              ></textarea>
              <Button bg={"#6990ff"} color={"white"} w="200px">
                Send Message
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </section>
  );
};

export default Contact;
