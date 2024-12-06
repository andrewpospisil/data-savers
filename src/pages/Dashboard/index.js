import DashboardCard from "../../components/DashboardCard";
import { useData } from "../../DataContext";
import { Box, Heading, Text, Grid, GridItem, Flex, Image, Link } from "@chakra-ui/react";
import search from "../../images/search.svg";
import plus from "../../images/plus.svg";
import { Link as RouterLink } from 'react-router-dom';

const Dashboard = () => {
  const { jsonData } = useData();

  return (
    <Box p="40px" backgroundColor="#f4f4f4">
      <Heading color="#3D4998">
        Your Research Hub: Insights at a Glance
      </Heading>
      <Text pb="24px" color="#1A1F45BF" fontWeight="bold">
        December 2024
      </Text>

  
      <Grid 
        templateColumns={{ base: "1fr", md: "2fr 1fr" }} 
        gap="20px" 
        mb="20px"
      >
     
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box 
            h="100%" 
            bg="white" 
            borderRadius="8px" 
            boxShadow="md" 
            display="flex" 
            flexDirection="column"
          >
            <DashboardCard 
              {...jsonData[0]} 
              flex="1"  
            />
          </Box>
        </GridItem>

       
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Box 
            h="100%" 
            bg="white" 
            borderRadius="8px" 
            boxShadow="md" 
            display="flex" 
            flexDirection="column"
          >
            <DashboardCard 
              {...jsonData[1]} 
              flex="1"  
            />
          </Box>
        </GridItem>
      </Grid>

     
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="20px">
        {jsonData.slice(2, 4).map((item) => (
          <GridItem key={item.id}>
            <Box 
              h="100%" 
              bg="white" 
              borderRadius="8px" 
              boxShadow="md" 
              display="flex" 
              flexDirection="column"
            >
              <DashboardCard 
                {...item} 
                flex="1"  
              />
            </Box>
          </GridItem>
        ))}
        <GridItem>
          <Flex direction="column" gap="20px" h="100%">
         
            <Box 
              flex="1" 
              bg="white" 
              borderRadius="8px" 
              boxShadow="md"
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
               <Link as={RouterLink} to={`/overview`}>
              <Flex direction={"column"} alignItems={"center"}>
                <Image w={"56px"} h={"56px"} src={search} />
                <Heading size={"24px"}>See all research</Heading>
              </Flex>
              </Link>
            </Box>
           
           
            <Box 
              flex="1" 
              bg="white" 
              borderRadius="8px" 
              boxShadow="md"
              display="flex" 
              alignItems="center" 
              justifyContent="center"
            >
                    <Link as={RouterLink} to={`/form`}>
              <Flex direction={"column"} alignItems={"center"}>
                <Image w={"56px"} h={"56px"} src={plus} />
                <Heading size={"24px"}>Add your own research</Heading>
              </Flex>
              </Link>
            </Box>
           
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
