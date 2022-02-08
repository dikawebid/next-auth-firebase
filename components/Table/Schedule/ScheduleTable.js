import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Select,
  Spacer,
  HStack,
  Center,
  Stack,
} from '@chakra-ui/react';
import { FaSortAlphaDownAlt, FaSortAlphaDown, FaSearch } from 'react-icons/fa';
import ScheduleTableRow from './ScheduleTableRow';
import SimplePaginator from '../../Paginator/SimplePaginator';

const ScheduleTable = ({
  schedules,
  total,
  query,
  onSort,
  onFilterStatus,
  onPaginationPrev,
  onPaginationNext,
  onPaginationClick,
  onEdit,
  onDelete,
  onEditQuota,
}) => {
  const { page, limit, sort, status } = query;

  const onCreatedAtSort = () => {
    if (sort === 'created_at_asc') {
      onSort('created_at_desc');
    } else {
      onSort('created_at_asc');
    }
  };

  return (
    <Flex width="100%" flexDirection="column">
      <Box padding={4} backgroundColor="gray.50" borderRadius="8px" mb="24px">
        <Flex width="100%" flexDirection="row" alignItems="flex-end">
          <Stack spacing="4px">
            <Text fontSize="14px" fontWeight="600">
              Status :
            </Text>
            <Select
              size="sm"
              width="200px"
              backgroundColor="white"
              onChange={onFilterStatus}
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </Stack>
          <Spacer />
        </Flex>
      </Box>

      {schedules.length > 0 ? (
        <>
          <Table size="sm" variant="simple" color="gray.700">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" pr={2} py={4} color="gray.400" textAlign="center">
                  No
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Start Date
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  End Date
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Quota
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Status
                </Th>
                <Th
                  px={2}
                  py={4}
                  color="gray.400"
                  textAlign="center"
                  style={{ cursor: 'pointer' }}
                  onClick={onCreatedAtSort}
                >
                  <Center>
                    <HStack spacing="16px">
                      <Text>Created At</Text>
                      {sort === 'created_at_asc' ? (
                        <FaSortAlphaDown size="14px" />
                      ) : sort === 'created_at_desc' ? (
                        <FaSortAlphaDownAlt size="14px" />
                      ) : null}
                    </HStack>
                  </Center>
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {schedules.map((item, index) => {
                return (
                  <ScheduleTableRow
                    key={`schedule-table-row-${index}`}
                    index={limit * (page - 1) + index}
                    schedule={item}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onEditQuota={onEditQuota}
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
              Total {status} Schedule : {total}
            </Text>
            <Spacer />
            <SimplePaginator
              total={total}
              page={page}
              limit={limit}
              onPaginationPrev={onPaginationPrev}
              onPaginationNext={onPaginationNext}
              onPaginationClick={onPaginationClick}
            />
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

export default ScheduleTable;
