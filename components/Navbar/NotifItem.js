import moment from 'moment';
import React from 'react';
import { Flex, HStack, MenuItem, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

const NotifItem = ({ item, onClick, ...props }) => {
  return (
    <MenuItem
      width="300px"
      px="18px"
      py="12px"
      backgroundColor={item.status === 'unread' ? '#157e9f0a' : 'white'}
      onClick={onClick}
      {...props}
    >
      <Flex flexDirection="column">
        <Text fontSize="11px" noOfLines={2} lineHeight={4} mb="5px">
          {item.message}
        </Text>
        <HStack spacing="4px">
          <FaClock size="9px" color="gray" />
          <Text fontSize="9px" lineHeight="100%" color="gray.600">
            {moment(item.created_at).fromNow()}
          </Text>
        </HStack>
      </Flex>
    </MenuItem>
  );
};

export default NotifItem;
