import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

const PaymentMethodDetailSkeleton = () => {
  return (
    <Flex width="100%" flexDirection="column">
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton width="60px" height="60px" mb="24px" />
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
    </Flex>
  );
};

export default PaymentMethodDetailSkeleton;
