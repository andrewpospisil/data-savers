
import React from "react";
import {
  Flex,
  Avatar,
  Box,
  Heading,
  Image,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import thumbUp from "../../images/thumbs-up.svg";
import comment from "../../images/message-circle.svg";
import share from "../../images/share-2.svg";
import arrow from "../../images/Graph-Arrow-Increase--Streamline-Core 1.svg";
import arrowRight from "../../images/arrow-right (2).svg";

const DashboardCard = ({
  id,
  topic,
  title,
  keyInsight,
  name,
  department,
  market,
  numberOfLikes,
  numberOfComments,
  numberOfShares,
}) => (
  <Card p={"32px"} width="100%" display="flex" flexDirection="column" flex="1">
    <CardHeader p={"0"} flex="0">
      <Flex spacing="4">
        <Flex flex="1" gap="1" direction={"column"}>
          <Flex>
            <Text fontWeight={"500"} color={"#969696"}>
              {topic}
            </Text>
          </Flex>
          <Heading color={"#3D4998"} size="md">
            {title}
          </Heading>
        </Flex>
      </Flex>
    </CardHeader>

    <CardBody p={"16px 0 20px 0"} flex="1">
      <Flex>
        <Heading mr={"12px"} fontSize={"42px"} color={"#00C800"}>{keyInsight}% </Heading>
        <Image src={arrow} />
      </Flex>
    </CardBody>

    <CardFooter pt={"24px"} borderTop={"1px solid #1A1F4540"} p={"0"} flex="0">
      <Flex w={"100%"} justifyContent={"space-between"} align={"flex-end"}>
        <Flex direction={"column"}>
          <Text fontWeight={"bold"}>{name}</Text>
          <Text>
            {department}, {market}
          </Text>
          <Flex mt={"4"}>
            <Flex mr={"3"}>
              <Image mr={"1"} src={thumbUp} />
              <Text color={"#1A1F4580"}>{numberOfLikes}</Text>
            </Flex>
            <Flex mr={"3"}>
              <Image mr={"1"} src={comment} />{" "}
              <Text color={"#1A1F4580"}>{numberOfComments}</Text>
            </Flex>
            <Flex mr={"3"}>
              <Image mr={"1"} src={share} />{" "}
              <Text color={"#1A1F4580"}>{numberOfShares}</Text>
            </Flex>
          </Flex>
          <Text></Text>
        </Flex>

        <Link as={RouterLink} to={`/report/${id}`}>
          <Button
            m="0 auto"
            color="#fff"
            _hover={{ bg: "#1A1F45" }}
            backgroundColor="#1A1F45BF"
            variant="solid"
          >
            View full report <Image ml="2" src={arrowRight} />
          </Button>
        </Link>
      </Flex>
    </CardFooter>
  </Card>
);


export default DashboardCard;
