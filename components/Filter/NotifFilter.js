import React from 'react';
import { HStack, Tag } from '@chakra-ui/react';

const NotifFilter = ({
  status,
  unreadNotifTotal,
  onStatusChange,
  ...props
}) => {
  return (
    <HStack spacing="6px" {...props}>
      <Tag
        size="md"
        px="16px"
        borderRadius="12px"
        colorScheme="primary"
        variant={status === '' ? 'solid' : 'outline'}
        style={{ cursor: 'pointer' }}
        onClick={() => onStatusChange('')}
      >
        All {status === '' ? `(${unreadNotifTotal})` : ''}
      </Tag>
      <Tag
        size="md"
        px="16px"
        borderRadius="12px"
        colorScheme="primary"
        variant={status === 'unread' ? 'solid' : 'outline'}
        style={{ cursor: 'pointer' }}
        onClick={() => onStatusChange('unread')}
      >
        Unread {status === 'unread' ? `(${unreadNotifTotal})` : ''}
      </Tag>
      <Tag
        size="md"
        px="16px"
        borderRadius="12px"
        colorScheme="primary"
        variant={status === 'read' ? 'solid' : 'outline'}
        style={{ cursor: 'pointer' }}
        onClick={() => onStatusChange('read')}
      >
        Read
      </Tag>
    </HStack>
  );
};

export default NotifFilter;
