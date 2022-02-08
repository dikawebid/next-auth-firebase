import React from 'react';
import { Center, Flex, Skeleton } from '@chakra-ui/react';

const DestinationDetailSkeleton = () => {
  return (
    <Flex width="100%" flexDirection="column">
      <Center>
        <Skeleton width="300px" height="300px" mb="32px" />
      </Center>
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
      <Skeleton width="100px" height="14px" mb="4px" />
      <Skeleton height="16px" mb="24px" />
    </Flex>
  );
};

export default DestinationDetailSkeleton;
