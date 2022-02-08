import React from 'react';
import { Center, HStack, IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { FaEdit, FaInfo, FaTrash } from 'react-icons/fa';
import PaymentMethodStatusBadge from '../../Badge/PaymentMethodStatusBadge';
import ImageWithPlaceholder from '../../Image/ImageWithPlaceholder';

const getPaymentMethod = (value) => {
  if (value === 'bank_transfer') {
    return 'Bank Transfer';
  }

  if (value === 'qris') {
    return 'QRIS';
  }

  return '-';
};

const PaymentMethodTableRow = ({
  paymentMethod,
  index,
  onOpenDetail,
  onEdit,
  onDelete,
}) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td>
        <ImageWithPlaceholder
          src={paymentMethod.thumbnail.file_url}
          width="40px"
          height="40px"
          imgW="80%"
          imgH="80%"
          objectFit="contain"
        />
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {paymentMethod.name ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {paymentMethod.description ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {paymentMethod.bank_name ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {paymentMethod.payment_type
            ? getPaymentMethod(paymentMethod.payment_type)
            : '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        {paymentMethod.status ? (
          <PaymentMethodStatusBadge status={paymentMethod.status} />
        ) : null}
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
            <IconButton
              size="xs"
              variant="outline"
              colorScheme="primary"
              aria-label="Detail"
              icon={<FaInfo />}
              onClick={() => onOpenDetail(index)}
            />
          </HStack>
        </Center>
      </Td>
    </Tr>
  );
};

export default PaymentMethodTableRow;
