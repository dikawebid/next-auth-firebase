import React from 'react';
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Center,
} from '@chakra-ui/react';
import PackageDestinationTableRow from './PackageDestinationTableRow';

const PackageDestinationTable = ({ destinations, onOpenDetail }) => {
  return (
    <Flex width="100%" flexDirection="column">
      {destinations.length > 0 ? (
        <Table size="sm" variant="simple" color="gray.700">
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              <Th pl="0px" pr={2} py={4} color="gray.400" textAlign="center">
                No
              </Th>
              <Th px={2} py={4} color="gray.400" textAlign="center">
                Name
              </Th>
              <Th px={2} py={4} color="gray.400" textAlign="center">
                Address
              </Th>
              <Th px={2} py={4} color="gray.400" textAlign="center">
                Price
              </Th>
              <Th px={2} py={4} color="gray.400" textAlign="center">
                Status
              </Th>
              <Th px={2} py={4} color="gray.400" textAlign="center">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {destinations.map((item, index) => {
              return (
                <PackageDestinationTableRow
                  key={`package-destination-table-row-${index}`}
                  index={index}
                  destination={item}
                  onOpenDetail={onOpenDetail}
                />
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Center height="300px" width="100%">
          <Text>There is no data</Text>
        </Center>
      )}
    </Flex>
  );
};

export default PackageDestinationTable;
