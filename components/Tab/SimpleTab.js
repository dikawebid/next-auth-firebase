import NextLink from 'next/link';
import React from 'react';
import { Box, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';

const TabItem = ({ item }) => {
  return (
    <NextLink href={item.isActive ? '#' : item.path} passHref>
      <ChakraLink textDecoration="none" _hover={{ textDecoration: 'none' }}>
        <Box
          minWidth="80px"
          px="16px"
          py="8px"
          borderWidth="0 0 2px 0"
          borderColor={item.isActive ? 'primary.500' : 'gray.300'}
        >
          <Text
            fontSize="16px"
            color={item.isActive ? 'primary.500' : 'gray.600'}
            fontWeight={item.isActive ? 'bold' : 'regular'}
          >
            {item.label}
          </Text>
        </Box>
      </ChakraLink>
    </NextLink>
  );
};

const SimpleTab = ({ items, mt = '16px', mb = '16px' }) => {
  return (
    <Flex direction="row" mt={mt} mb={mb}>
      {items.map((item, index) => {
        return <TabItem key={`tab-item-${index}`} item={item} />;
      })}
    </Flex>
  );
};

export default SimpleTab;
