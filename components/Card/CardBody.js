import { Box } from '@chakra-ui/react';

const CardBody = ({ children, ...props }) => {
  return (
    <Box display="flex" width="100%" {...props}>
      {children}
    </Box>
  );
};

export default CardBody;
