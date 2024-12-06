import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import searchSm from "../../images/search-sm.svg";
import plusSm from "../../images/plus-sm.svg";

const Nav = () => {
  return (
    <Box p={"32px 40px"} boxShadow="md">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
      
        <Flex gap={64}>
          <Link
            as={RouterLink}
            to="/"
            color="#1A1F45BF"
            fontWeight={"bold"}
            fontSize="lg"
            _hover={{ textDecoration: "underline", color: "teal.200" }}
          >
            Dashboard
          </Link>
          <Link
            as={RouterLink}
            to="/overview"
            color="#1A1F45BF"
            fontSize="lg"
            _hover={{ textDecoration: "underline", color: "teal.200" }}
          >
            <Flex>
              <Image mr={"8px"} src={searchSm} />
              All Research
            </Flex>
          </Link>
          <Link
            as={RouterLink}
            to="/form"
            color="#1A1F45BF"
            fontSize="lg"
            _hover={{ textDecoration: "underline", color: "teal.200" }}
          >
            <Flex>
              <Image mr={"8px"} src={plusSm} />
              Add Research
            </Flex>
          </Link>
        </Flex>
      
        <Text color="#1A1F45BF" fontSize="2xl">
          Lebara connected
        </Text>
      </Flex>
    </Box>
  );
};

export default Nav;
