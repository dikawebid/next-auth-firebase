import moment from 'moment';
import React from 'react';
import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

const NotificationItem = ({ notification, onClick }) => {
  return (
    <Box
      py="24px"
      px="48px"
      backgroundColor={notification.status === 'unread' ? '#68cfef3b' : 'white'}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Flex w="100%" direction="column">
        <Text fontSize="14px" mb="16px">
          {notification.message}
        </Text>
        <HStack spacing="4px">
          <FaClock size="12px" color="gray" />
          <Text fontSize="12px" lineHeight="100%" color="gray.600">
            {moment(notification.created_at).fromNow()}
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NotificationItem;
