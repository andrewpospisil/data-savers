import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Tfoot, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useData } from "../../DataContext";

const OverviewTable = () => {
  const { jsonData } = useData();

  return (
    <Box p={5}>
      <Table variant="simple" tableLayout="fixed" width="100%">
        <Thead backgroundColor={"#E5E5E5"}>
          <Tr>
            <Th width="14.28%">Topic</Th>
            <Th width="14.28%">Date</Th>
            <Th width="14.28%">Description</Th>
            <Th width="14.28%">Key Insights</Th>
            <Th width="14.28%">Results</Th>
            <Th width="14.28%">Department</Th>
            <Th width="14.28%">Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          {jsonData.map((item) => (
            <Tr key={item.id} _hover={{ backgroundColor: '#F5F5F5' }}>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.topic}
                </Link>
              </Td>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.date}
                </Link>
              </Td>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.description.split(' ').slice(0, 4).join(' ')}...
                </Link>
              </Td>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.keyInsights.split(' ').slice(0, 4).join(' ')}...
                </Link>
              </Td>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.result.split(' ').slice(0, 4).join(' ')}...
                </Link>
              </Td>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.department}
                </Link>
              </Td>
              <Td>
                <Link as={RouterLink} to={`/report/${item.id}`} _hover={{ textDecoration: 'none' }}>
                  {item.name}
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Td colSpan="7">End of Table</Td>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
};

export default OverviewTable;
