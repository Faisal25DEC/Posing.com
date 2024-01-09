import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import FAQImage from "../assets/faq_img.png";
import { textPrimary } from "../assets/constants";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQs = () => {
  const imageVariant = {
    initial: {
      x: -50,
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
  const accoridionItems = [
    {
      title: "What is a point of sale?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard sincethe 15000s, printer took a galley of type and scrambl.",
    },
    {
      title: " What is the best POS system?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard sincethe 15000s, printer took a galley of type and scrambl.",
    },
    {
      title: ". How does a POS system work? ",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard sincethe 15000s, printer took a galley of type and scrambl.",
    },
    {
      title: " How to use a POS System?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard sincethe 15000s, printer took a galley of type and scrambl.",
    },
    {
      title: " How can i make a payment?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard sincethe 15000s, printer took a galley of type and scrambl.",
    },
  ];
  return (
    <Box
      bgGradient={"linear-gradient(257.51deg, #F2FCFE 44.07%, #FAF1FE 100%)"}
      pt="90px"
      pb="60px"
    >
      <Flex flexDir={"column"} alignItems={"center"} gap="20px">
        <Text color={textPrimary} textAlign={"center"}>
          POS FAQ
        </Text>
        <Heading
          fontFamily={"Poppins"}
          fontSize={{ base: "36px", md: "42px", lg: "48px" }}
          fontWeight={"600"}
          textAlign={"center"}
        >
          Frequently asked questions
        </Heading>
        <Flex
          w={{ base: "95%", md: "87.5%" }}
          m="auto"
          mt="30px"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"flex-end"}
          gap="60px"
        >
          <Box w={{ base: "80%", lg: "40%" }} h="100%" m="auto">
            <motion.div
              variants={imageVariant}
              initial="initial"
              whileInView={"animate"}
            >
              <Image src={FAQImage} w="100%" h="100%" pt="40px" />
            </motion.div>
          </Box>
          <Accordion
            defaultIndex={[0]}
            w={{ base: "97.5%", lg: "50%" }}
            m={{ base: "auto", lg: "0" }}
          >
            {accoridionItems.map((item, idx) => (
              <AccordionItem
                mt={idx !== 0 ? "20px" : "0px"}
                border={"none"}
                py="15px"
                bg="white"
                rounded={"10 px"}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton border={"none"} _hover={{ bg: "none" }}>
                        <Box as="span" flex="1" textAlign="left">
                          <Heading
                            fontFamily={"Poppins"}
                            fontSize={"18px"}
                            fontWeight={"600"}
                          >
                            <span style={{ color: "#6c92ff" }}>
                              Q{idx + 1}.
                            </span>{" "}
                            {item.title}
                          </Heading>
                        </Box>
                        {isExpanded ? (
                          <FaChevronCircleUp fontSize="28px" color="#6c92ff" />
                        ) : (
                          <FaChevronCircleDown
                            fontSize="28px"
                            color="#6c92ff"
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel fontSize={"16px"} color="grey">
                      {item.desc}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FAQs;
