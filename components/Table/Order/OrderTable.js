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
import OrderTableRow from './OrderTableRow';
import SimplePaginator from '../../Paginator/SimplePaginator';

const OrderTable = ({
  destinations,
  orders,
  total,
  query,
  onSort,
  onFilterStatus,
  onFilterDestination,
  onSearch,
  onPaginationPrev,
  onPaginationNext,
  onPaginationClick,
  onOpenDetail,
}) => {
  const { page, limit, sort, status, destinationId } = query;

  const [search, setSearch] = useState({ value: '', isValid: true });

  const statusList = [
    { value: 'unpaid', label: 'Unpaid' },
    { value: 'paid', label: 'Paid' },
    { value: 'done', label: 'Done' },
    { value: 'cancel', label: 'Cancel' },
    { value: 'refund_request', label: 'Refund Request' },
    { value: 'refund', label: 'Refund' },
  ];

  const onOrderedAtSort = () => {
    if (sort === 'ordered_at_asc') {
      onSort('ordered_at_desc');
    } else {
      onSort('ordered_at_asc');
    }
  };

  const onSearchChange = (e) => {
    search.value = e.target.value.toString();
    setSearch({ ...search });
  };

  const onSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      let qSearch = e.target.value.toString();
      search.value = qSearch;
      setSearch({ ...search });

      onSearch(qSearch);
    }
  };

  const onSearchClick = () => {
    onSearch(search.value);
  };

  return (
    <Flex width="100%" flexDirection="column">
      <Box padding={4} backgroundColor="gray.50" borderRadius="8px" mb="24px">
        <Flex width="100%" flexDirection="row" alignItems="flex-end">
          <Stack spacing="4px" mr="24px">
            <Text fontSize="14px" fontWeight="600">
              Destination :
            </Text>
            <Select
              size="sm"
              width="200px"
              backgroundColor="white"
              onChange={onFilterDestination}
            >
              <option value="">All</option>
              {destinations.map((item, index) => {
                return (
                  <option key={`select-destination-${index}`} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </Stack>
          <Stack spacing="4px" mr="24px">
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
              {statusList.map((item, index) => {
                return (
                  <option key={`select-status-${index}`} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </Select>
          </Stack>
          <Spacer />
          <InputGroup width="240px" size="md">
            <Input
              type="text"
              fontSize="sm"
              backgroundColor="white"
              focusBorderColor="primary.300"
              errorBorderColor="red.300"
              placeholder='order number'
              isInvalid={!search.isValid}
              onChange={onSearchChange}
              onKeyDown={onSearchKeyDown}
            />
            <InputRightElement>
              <IconButton
                size="xs"
                variant="ghost"
                aria-label="Search"
                icon={<FaSearch />}
                onClick={onSearchClick}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>

      {orders.length > 0 ? (
        <>
          <Table size="sm" variant="simple" color="gray.700">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" pr={2} py={4} color="gray.400" textAlign="center">
                  No
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Order No
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Name
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Destination
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Schedule
                </Th>
                {/* <Th px={2} py={4} color="gray.400" textAlign="center">
                  Traveler
                </Th> */}
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Grand Total
                </Th>
                <Th
                  px={2}
                  py={4}
                  color="gray.400"
                  textAlign="center"
                  style={{ cursor: 'pointer' }}
                  onClick={onOrderedAtSort}
                >
                  <Center>
                    <HStack spacing="16px">
                      <Text>Date</Text>
                      {sort === 'ordered_at_asc' ? (
                        <FaSortAlphaDown size="14px" />
                      ) : sort === 'ordered_at_desc' ? (
                        <FaSortAlphaDownAlt size="14px" />
                      ) : null}
                    </HStack>
                  </Center>
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
              {orders.map((item, index) => {
                return (
                  <OrderTableRow
                    key={`order-table-row-${index}`}
                    index={limit * (page - 1) + index}
                    order={item}
                    onOpenDetail={onOpenDetail}
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
              Total {status} : {total}
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

export default OrderTable;
