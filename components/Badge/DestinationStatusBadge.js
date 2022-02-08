import React from 'react';
import { Badge } from '@chakra-ui/react';

const DestinationStatusBadge = ({ status, fontSize = '10px' }) => {
  let colorScheme = '';
  if (status === 'inactive') {
    colorScheme = 'gray';
  } else if (status === 'active') {
    colorScheme = 'green';
  }

  return (
    <Badge
      minWidth="84px"
      variant="solid"
      colorScheme={colorScheme}
      fontSize={fontSize}
      borderRadius="12px"
      textAlign="center"
      px="8px"
      py="2px"
      style={{ textTransform: 'unset' }}
    >
      {status}
    </Badge>
  );
};

export default DestinationStatusBadge;
