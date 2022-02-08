import { Box } from '@chakra-ui/react';

const Card = ({ children, ...props }) => {
  return (
    <Box
      p="22px"
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      minWidth="0px"
      wordwrap="break-word"
      backgroundClip="border-box"
      bg="white"
      width="100%"
      boxShadow="0px 3.5px 5.5px rgba(0, 0, 0, 0.02)"
      borderRadius="15px"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
