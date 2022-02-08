import { Box, Center, Image } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';

const ImageWithPlaceholder = ({
  src,
  imgW = '80%',
  imgH = '80%',
  objectFit = 'contain',
  borderRadius = '4px',
  ...props
}) => {
  if (!src) {
    return (
      <Box backgroundColor="gray.200" borderRadius={borderRadius} {...props}>
        <Center height="100%">
          <FaImage color="gray" size="10%" />
        </Center>
      </Box>
    );
  }

  return (
    <a href={src} target="_blank">
      <Box backgroundColor="none" {...props}>
        <Center height="100%">
          <Image width={imgW} height={imgH} objectFit={objectFit} src={src} />
        </Center>
      </Box>
    </a>
  );
};

export default ImageWithPlaceholder;
