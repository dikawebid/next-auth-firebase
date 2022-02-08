import React from 'react';
import { Box, Flex, Skeleton } from '@chakra-ui/react';

const NotifSkeleton = () => {
  return (
    <Box py="24px" px="48px" backgroundColor="white">
      <Flex w="100%" direction="column">
        <Skeleton width="100%" height="20px" borderRadius="4px" mb="4px" />
        <Skeleton width="100%" height="20px" borderRadius="4px" mb="8px" />
        <Skeleton width="140px" height="16px" borderRadius="4px" />
      </Flex>
    </Box>
  );
};

export default NotifSkeleton;
