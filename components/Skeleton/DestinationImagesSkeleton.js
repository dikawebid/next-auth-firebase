import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

const DestinationImagesSkeleton = () => {
  return (
    <Flex width="100%" flexDirection="column">
      <Skeleton width="100%" height="40px" mb="24px" />

      <Skeleton width="100%" height="80px" mb="16px" />
      <Skeleton width="100%" height="80px" mb="16px" />
      <Skeleton width="100%" height="80px" mb="16px" />
    </Flex>
  );
};

export default DestinationImagesSkeleton;
