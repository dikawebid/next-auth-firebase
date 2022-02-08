import React from 'react';
import { HStack, IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { FaEdit, FaInfo, FaTrash } from 'react-icons/fa';
import ImageWithPlaceholder from '../../Image/ImageWithPlaceholder';

const OnboardingTableRow = ({
  onboarding,
  index,
  onOpenDetail,
  onEdit,
  onDelete,
}) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {onboarding.position ?? '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        <ImageWithPlaceholder src={onboarding.image} w="120px" h="120px" />
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {onboarding.title ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {onboarding.content ?? '-'}
        </Text>
      </Td>

      <Td>
        <HStack>
          <IconButton
            size="xs"
            variant="outline"
            colorScheme="primary"
            aria-label="Detail"
            icon={<FaInfo />}
            onClick={() => onOpenDetail(index)}
          />
          <IconButton
            size="xs"
            variant="outline"
            colorScheme="secondary"
            aria-label="Edit"
            icon={<FaEdit />}
            onClick={() => onEdit(index)}
          />
          <IconButton
            size="xs"
            variant="outline"
            colorScheme="red"
            aria-label="Delete"
            icon={<FaTrash />}
            onClick={() => onDelete(index)}
          />
        </HStack>
      </Td>
    </Tr>
  );
};

export default OnboardingTableRow;
