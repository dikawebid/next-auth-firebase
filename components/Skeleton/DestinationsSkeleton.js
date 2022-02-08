import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

const DestinationsSkeleton = () => {
  return (
    <Flex width="100%" flexDirection="column">
      <Skeleton height="40px" mb="16px" borderRadius="14px" />
      <Skeleton height="52px" mb="16px" borderRadius="14px" />
      <Skeleton height="52px" mb="16px" borderRadius="14px" />
      <Skeleton height="52px" mb="16px" borderRadius="14px" />
      <Skeleton height="52px" mb="16px" borderRadius="14px" />
      <Skeleton height="52px" mb="16px" borderRadius="14px" />
    </Flex>
  );
};

export default DestinationsSkeleton;
