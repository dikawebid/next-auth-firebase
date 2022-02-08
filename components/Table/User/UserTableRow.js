import React from 'react';
import { Avatar, Badge, IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa';

const StatusBadge = ({ status }) => {
  let colorScheme = '';
  if (status === 'registered') {
    colorScheme = 'secondary';
  } else if (status === 'verified') {
    colorScheme = 'green';
  } else if (status === 'disabled') {
    colorScheme = 'gray';
  }

  return (
    <Text fontSize="sm" color={'gray.700'}>
      <Badge
        minWidth="84px"
        variant="solid"
        size="xs"
        colorScheme={colorScheme}
        fontSize="10px"
        borderRadius="12px"
        px="8px"
        py="2px"
        style={{ textTransform: 'unset' }}
      >
        {status}
      </Badge>
    </Text>
  );
};

const UserTableRow = ({ user, index, onOpenDetail }) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td textAlign="center">
        <Avatar size="sm" name={user.name} src={user.avatar} />
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {user.name ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {user.email ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {user.phone ?? '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        {user.status ? <StatusBadge status={user.status} /> : null}
      </Td>

      <Td textAlign="center">
        <IconButton
          size="xs"
          variant="outline"
          colorScheme="primary"
          aria-label="Detail"
          icon={<FaInfo />}
          onClick={() => onOpenDetail(index)}
        />
      </Td>
    </Tr>
  );
};

export default UserTableRow;
