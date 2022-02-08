import { Box } from '@chakra-ui/react';

const CardHeader = ({ children, ...props }) => {
  return (
    <Box display="flex" width="100%" {...props}>
      {children}
    </Box>
  );
};

export default CardHeader;
