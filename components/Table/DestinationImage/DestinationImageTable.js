import React from 'react';
import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Spacer,
  Center,
} from '@chakra-ui/react';
import DestinationImageTableRow from './DestinationImageTableRow';

const DestinationImageTable = ({
  images,
  total,
  onSetAsThumbnail,
  onDelete,
}) => {
  return (
    <Flex width="100%" flexDirection="column">
      {images.length > 0 ? (
        <>
          <Table size="sm" variant="simple" color="gray.700">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" pr={2} py={4} color="gray.400" textAlign="center">
                  No
                </Th>
                <Th px={2} py={4} color="gray.400">
                  Image
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Filename
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Thumbnail
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {images.map((item, index) => {
                return (
                  <DestinationImageTableRow
                    key={`destination-image-table-row-${index}`}
                    index={index}
                    image={item}
                    onSetAsThumbnail={onSetAsThumbnail}
                    onDelete={onDelete}
                  />
                );
              })}
            </Tbody>
          </Table>

          <Flex width="100%" px="8px" mt="24px">
            <Text
              size="lg"
              fontWeight="bold"
              style={{ textTransform: 'capitalize' }}
            >
              Total : {total}
            </Text>
            <Spacer />
          </Flex>
        </>
      ) : (
        <Center height="300px" width="100%">
          <Text>There is no data</Text>
        </Center>
      )}
    </Flex>
  );
};

export default DestinationImageTable;
