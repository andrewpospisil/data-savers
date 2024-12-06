import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useData } from "../../DataContext";
import { useParams } from "react-router-dom";
import thumbUp from "../../images/thumbs-up.svg";
import comment from "../../images/message-circle.svg";
import share from "../../images/share-2.svg";

const Report = () => {

  const { id } = useParams();
  const { jsonData } = useData();

  const data = jsonData.find((item) => item.id === parseInt(id));

  if (!data) {
    return <Text>No data found for this ID.</Text>;
  }

  return (
    <Box maxW="1200px" mx="auto">
      <Stack spacing={4}>
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold" color="#1A1F45BF">
            {data.topic}
          </Text>
          <Text fontWeight="medium" color="#1A1F45BF">
            {data.department},&nbsp;{data.market}
          </Text>
        </VStack>
        <Heading color={"#3D4998"} size="lg" fontWeight="bold">
          {data.title}
        </Heading>

        <Heading color={"#1A1F45BF"} size="sm" fontWeight="bold">
          Description
        </Heading>
        <Text fontSize="md" color="#1A1F45BF">
          {data.description}
        </Text>

        <Heading color={"#1A1F45BF"} size="sm" fontWeight="bold">
          Results/Outcome
        </Heading>
        <Text fontSize="md" color="green.600">
          {data.result}
        </Text>

        <Heading color={"#1A1F45BF"} size="sm" fontWeight="bold">
          Key Insights
        </Heading>
        <Text fontSize="md" color="#1A1F45BF">
          {data.keyInsights}
        </Text>
        <Flex direction={"column"}>
          <Heading p={"40px 0 16px"} color={"#3D4998"} size="md">
            Contact details
          </Heading>
          <Text fontSize="md" color="#1A1F45BF">
            {data.keyInsights}
          </Text>
          <Text fontSize="md" color="#1A1F45BF">
            {data.name}
          </Text>
          <Text fontSize="md" color="#1A1F45BF">
            {data.email}
          </Text>
        </Flex>
        <Flex direction={"column"} w="full">
          <Text mt={"4"} color={"#1A1F45BF"}>
            Share your opinion or share with colleagues!{" "}
          </Text>
          <Flex mt={"4"}>
            <Flex mr={"10"}>
              <Image mr={"1"} src={thumbUp} />
              <Text color={"#1A1F4580"}>{data.numberOfLikes}</Text>
            </Flex>
            <Flex mr={"10"}>
              <Image mr={"1"} src={comment} />{" "}
              <Text color={"#1A1F4580"}>{data.numberOfComments}</Text>
            </Flex>
            <Flex mr={"10"}>
              <Image mr={"1"} src={share} />{" "}
              <Text color={"#1A1F4580"}>{data.numberOfShares}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Report;
