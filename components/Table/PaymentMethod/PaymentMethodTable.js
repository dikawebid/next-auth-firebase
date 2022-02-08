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
  Center,
  Stack,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import PaymentMethodTableRow from './PaymentMethodTableRow';
import SimplePaginator from '../../Paginator/SimplePaginator';

const PaymentMethodTable = ({
  paymentMethods,
  total,
  query,
  onFilterStatus,
  onFilterPaymentType,
  onSearch,
  onPaginationPrev,
  onPaginationNext,
  onPaginationClick,
  onOpenDetail,
  onEdit,
  onDelete,
}) => {
  const { page, limit, status, paymentType } = query;

  const [search, setSearch] = useState({ value: '', isValid: true });

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
          <Stack spacing="4px" ml="24px">
            <Text fontSize="14px" fontWeight="600">
              Payment Type :
            </Text>
            <Select
              size="sm"
              width="200px"
              backgroundColor="white"
              onChange={onFilterPaymentType}
            >
              <option value="">All</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="qris">QRIS</option>
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

      {paymentMethods.length > 0 ? (
        <>
          <Table size="sm" variant="simple" color="gray.700">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" pr={2} py={4} color="gray.400" textAlign="center">
                  No
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Thumbnail
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Name
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Description
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Bank Name
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Payment Type
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
              {paymentMethods.map((item, index) => {
                return (
                  <PaymentMethodTableRow
                    key={`payment-method-table-row-${index}`}
                    index={limit * (page - 1) + index}
                    paymentMethod={item}
                    onOpenDetail={onOpenDetail}
                    onEdit={onEdit}
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
              Total {status} Payment Method : {total}
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

export default PaymentMethodTable;
