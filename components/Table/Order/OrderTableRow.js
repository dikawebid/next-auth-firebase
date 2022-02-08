import React from 'react';
import { IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa';
import OrderStatusBadge from '../../Badge/OrderStatusBadge';
import { rupiahFormat } from '../../../utils/currency';
import { dateDMY } from '../../../utils/dateFormat';

const OrderTableRow = ({ order, index, onOpenDetail }) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td width="180px">
        <Text fontSize="sm" color={'gray.700'}>
          {order.order_number}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {order.customer.name}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {order.destination.name}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {dateDMY(order.schedule.start_date)} -{' '}
          {dateDMY(order.schedule.end_date)}
        </Text>
      </Td>

      {/* <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {order.order_total} people
        </Text>
      </Td> */}

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {rupiahFormat(order.total)}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {dateDMY(order.ordered_at)}
        </Text>
      </Td>

      <Td textAlign="center">
        <OrderStatusBadge status={order.status} />
      </Td>

      <Td textAlign="center">
        <IconButton
          size="xs"
          variant="outline"
          colorScheme="primary"
          aria-label="Detail"
          icon={<FaInfo />}
          onClick={() => onOpenDetail(index)}
        />
      </Td>
    </Tr>
  );
};

export default OrderTableRow;
