import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import ImageWithPlaceholder from '../Image/ImageWithPlaceholder';
import { dateDMY } from '../../utils/dateFormat';

const OrderRefundDetails = ({ order, isLoading, onRefund }) => {
  return (
    <>
      {order.refunded_at ? (
        <>
          <Text fontSize="14px" fontWeight="bold">
            Refund Date
          </Text>
          <Text fontSize="16px" mb="16px">
            {dateDMY(order.refunded_at)}
          </Text>
        </>
      ) : null}

      <Text fontSize="14px" fontWeight="bold">
        Name
      </Text>
      <Text fontSize="16px" mb="16px">
        {order.refund.name}
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        Email
      </Text>
      <Text fontSize="16px" mb="16px">
        {order.refund.email}
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        Phone
      </Text>
      <Text fontSize="16px" mb="16px">
        {order.refund.phone}
      </Text>
      <Text fontSize="14px" fontWeight="bold">
        Reason
      </Text>
      <Text fontSize="16px" mb="16px">
        {order.refund.reason}
      </Text>

      <Text fontSize="14px" fontWeight="bold" mb="4px">
        Payment Evidence
      </Text>

      {order.evidence.file_type === 'application/pdf' ? (
        <a
          href={order.evidence.file_url}
          target="_blank"
          style={{ color: 'blue', fontSize: '14px' }}
        >
          {order.evidence.filename}
        </a>
      ) : null}

      {order.evidence.file_type === 'image/png' ||
      order.evidence.file_type === 'image/jpg' ||
      order.evidence.file_type === 'image/jpeg' ? (
        <Box width="120px">
          <ImageWithPlaceholder
            src={order.evidence.file_url}
            width="120px"
            height="120px"
            imgW="100%"
            imgH="100%"
            objectFit="contain"
            borderRadius="4px"
            mb="24px"
          />
        </Box>
      ) : null}

      {order.status === 'refund_request' ? (
        <Box>
          <Button
            float="right"
            size="md"
            type="submit"
            colorScheme="secondary"
            fontWeight="bold"
            fontSize="14px"
            float="right"
            isLoading={isLoading}
            onClick={onRefund}
          >
            Set Order as Refund
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default OrderRefundDetails;
