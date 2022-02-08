import React from 'react';
import { Badge } from '@chakra-ui/react';

const OrderStatusBadge = ({ status, fontSize = '10px' }) => {
  let colors = {
    unpaid: '#065770',
    paid: '#FBB327',
    done: '#319431',
    cancel: '#B00020',
    refund_request: '#F71EEC',
    refund: '#F7731E',
  };

  let labels = {
    unpaid: 'unpaid',
    paid: 'paid',
    done: 'done',
    cancel: 'cancel',
    refund_request: 'refund request',
    refund: 'refund',
  };

  return (
    <Badge
      minWidth="84px"
      variant="solid"
      backgroundColor={colors[status]}
      fontSize={fontSize}
      borderRadius="12px"
      textAlign="center"
      px="8px"
      py="2px"
      style={{ textTransform: 'unset' }}
    >
      {labels[status]}
    </Badge>
  );
};

export default OrderStatusBadge;
