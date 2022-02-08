import { Box, Center, Image } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';

const InputImageReview = ({
  src,
  imgW = '80%',
  imgH = '80%',
  objectFit = 'contain',
  ...props
}) => {
  if (!src) {
    return (
      <Box backgroundColor="gray.200" borderRadius="4px" {...props}>
        <Center height="100%">
          <FaImage color="gray" size="10%" />
        </Center>
      </Box>
    );
  }

  return (
    <Box backgroundColor="none" {...props}>
      <Center height="100%">
        <Image width={imgW} height={imgH} objectFit={objectFit} src={src} />
      </Center>
    </Box>
  );
};

export default InputImageReview;
