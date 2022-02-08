import React from 'react';
import { IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import DestinationStatusBadge from '../../Badge/DestinationStatusBadge';
import { rupiahFormat } from '../../../utils/currency';

const SelectDestinationPackageTableRow = ({
  destination,
  index,
  onAdd,
}) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {destination.name ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {destination.address ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {destination.price ? rupiahFormat(destination.price) : '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        {destination.status ? (
          <DestinationStatusBadge status={destination.status} />
        ) : null}
      </Td>

      <Td textAlign="center">
        <IconButton
          size="xs"
          variant="outline"
          colorScheme="primary"
          aria-label="Detail"
          icon={<FaPlus />}
          onClick={() => onAdd(index)}
        />
      </Td>
    </Tr>
  );
};

export default SelectDestinationPackageTableRow;
