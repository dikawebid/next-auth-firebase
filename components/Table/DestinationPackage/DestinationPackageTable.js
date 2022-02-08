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
import DestinationPackageTableRow from './DestinationPackageTableRow';
import SimplePaginator from '../../Paginator/SimplePaginator';

const DestinationPackageTable = ({
  destinationPackages,
  total,
  query,
  onSort,
  onFilterStatus,
  onSearch,
  onPaginationPrev,
  onPaginationNext,
  onPaginationClick,
  onOpenDetail,
}) => {
  const { page, limit, sort, status } = query;

  const [search, setSearch] = useState({ value: '', isValid: true });

  const onNameSort = () => {
    if (sort === 'name_asc') {
      onSort('name_desc');
    } else {
      onSort('name_asc');
    }
  };

  const onCreatedAtSort = () => {
    if (sort === 'created_at_asc') {
      onSort('created_at_desc');
    } else {
      onSort('created_at_asc');
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

      {destinationPackages.length > 0 ? (
        <>
          <Table size="sm" variant="simple" color="gray.700">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" pr={2} py={4} color="gray.400" textAlign="center">
                  No
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Image
                </Th>
                <Th
                  px={2}
                  py={4}
                  color="gray.400"
                  textAlign="center"
                  style={{ cursor: 'pointer' }}
                  onClick={onNameSort}
                >
                  <Center>
                    <HStack spacing="16px">
                      <Text>Name</Text>
                      {sort === 'name_asc' ? (
                        <FaSortAlphaDown size="14px" />
                      ) : sort === 'name_desc' ? (
                        <FaSortAlphaDownAlt size="14px" />
                      ) : null}
                    </HStack>
                  </Center>
                </Th>
                <Th px={2} py={4} color="gray.400" textAlign="center">
                  Description
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
              {destinationPackages.map((item, index) => {
                return (
                  <DestinationPackageTableRow
                    key={`destination-package-table-row-${index}`}
                    index={limit * (page - 1) + index}
                    destinationPackage={item}
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
              Total {status} Package : {total}
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

export default DestinationPackageTable;
