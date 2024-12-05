// Render Prop
import React from "react";
import {
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

const DashboardCard = ({
  viewCount,
  author,
  topic,
  title,
  description,
  keyInsights,
  result,
  attachmentUrl,
  dateAdded,
  team,
  country,
}) => (
  <Card maxW="md">
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

          <Box>
            <Heading size="sm">{author}</Heading>
            <Text>{dateAdded}</Text>
          </Box>
          <Flex>
            <Text fontStyle={"italic"}>{topic}</Text>
          </Flex>
          <Flex>
            <Text>{viewCount} views</Text>
          </Flex>
        </Flex>
      </Flex>
    </CardHeader>
    <CardBody>
      <Heading size="sm">{title}</Heading>
      <Heading size="sm">Description</Heading>
      <Text>{description}</Text>
      <Heading size="sm">Key insights</Heading>
      <Text>{keyInsights}</Text>
      <Heading size="sm">Results:</Heading>
      <Text>{result}</Text>
    </CardBody>

    <CardFooter
     
      justify="space-between"
      flexWrap="wrap"
      sx={{
        "& > button": {
          minW: "136px",
        },
      }}
    >
    <Flex  direction={"column"}>
      <Button flex="1" variant="ghost">
        View full report
      </Button>
     <Text>{country}</Text>
     <Text>{team}</Text>
     
     </Flex>
    </CardFooter>
  </Card>
);

export default DashboardCard;
