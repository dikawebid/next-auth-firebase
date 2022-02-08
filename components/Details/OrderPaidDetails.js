import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import ImageWithPlaceholder from '../Image/ImageWithPlaceholder';

const OrderPaidDetails = ({ order, isLoading }) => {
  if (!order.evidence || order.evidence === null) {
    return (
      <>
        <Text fontSize="16px" fontWeight="bold" color="red.700">
          payment evidence not yet uploaded
        </Text>
      </>
    );
  }

  return (
    <>
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
    </>
  );
};

export default OrderPaidDetails;
