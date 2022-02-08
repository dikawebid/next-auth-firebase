import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import ImageWithPlaceholder from '../Image/ImageWithPlaceholder';

const OrderUnpaidDetails = ({ order, isLoading, onCancel, onPaid }) => {
  if (!order.evidence || order.evidence === null) {
    return (
      <>
        <Text fontSize="16px" fontWeight="bold" color="red.700">
          payment evidence not yet uploaded
        </Text>
        <Box>
          <Button
            float="right"
            size="md"
            type="submit"
            colorScheme="red"
            fontWeight="bold"
            fontSize="14px"
            float="right"
            isLoading={isLoading}
            onClick={onCancel}
          >
            Cancel Order
          </Button>
        </Box>
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

      <Box>
        <Button
          float="right"
          size="md"
          type="submit"
          colorScheme="primary"
          fontWeight="bold"
          fontSize="14px"
          float="right"
          isLoading={isLoading}
          onClick={onPaid}
        >
          Set as Paid Order
        </Button>
      </Box>
    </>
  );
};

export default OrderUnpaidDetails;
