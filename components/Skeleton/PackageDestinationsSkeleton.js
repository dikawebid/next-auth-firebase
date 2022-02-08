import React from 'react';
import { Box, Flex, Skeleton } from '@chakra-ui/react';

const PackageDestinationsSkeleton = () => {
  return (
    <Flex width="100%" flexDirection="row">
      <Skeleton height="24px" width="140px" mr="8px" borderRadius="14px" />
      <Skeleton height="24px" width="140px" mr="8px" borderRadius="14px" />
      <Skeleton height="24px" width="140px" mr="8px" borderRadius="14px" />
      <Box height="112px"></Box>
    </Flex>
  );
};

export default PackageDestinationsSkeleton;
