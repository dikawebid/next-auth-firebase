import React from 'react';
import moment from 'moment';
import {
  Badge,
  Button,
  Center,
  HStack,
  IconButton,
  Stack,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const StatusBadge = ({ status }) => {
  let colorScheme = '';
  if (status === 'active') {
    colorScheme = 'green';
  } else if (status === 'inactive') {
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

const ScheduleTableRow = ({
  schedule,
  index,
  onEdit,
  onDelete,
  onEditQuota,
}) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {schedule.start_date
            ? moment(schedule.start_date).format('DD/MM/YYYY')
            : '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {schedule.end_date
            ? moment(schedule.end_date).format('DD/MM/YYYY')
            : '-'}
        </Text>
      </Td>

      <Td>
        <Stack>
          <Text>Quota: {schedule.quota}</Text>
          <Text>Reserved: {schedule.reserved_quota}</Text>
          <Text
            color={schedule.available_quota > 0 ? 'green' : 'red'}
            fontWeight="bold"
          >
            Available: {schedule.available_quota}
          </Text>
          <Button
            variant="outline"
            colorScheme="primary"
            size="xs"
            onClick={() => onEditQuota(index)}
          >
            Manage
          </Button>
        </Stack>
      </Td>

      <Td textAlign="center">
        {schedule.status ? <StatusBadge status={schedule.status} /> : null}
      </Td>

      <Td textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {schedule.created_at
            ? moment(schedule.created_at).format('DD/MM/YYYY HH:mm:ss')
            : '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        <Center>
          <HStack spacing="8px">
            <IconButton
              size="xs"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<FaTrash />}
              onClick={() => onDelete(index)}
            />
            <IconButton
              size="xs"
              variant="outline"
              colorScheme="secondary"
              aria-label="Edit"
              icon={<FaEdit />}
              onClick={() => onEdit(index)}
            />
          </HStack>
        </Center>
      </Td>
    </Tr>
  );
};

export default ScheduleTableRow;
