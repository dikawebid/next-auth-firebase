import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

const CustomLink = ({ href = '#', children, activeProps, ...props }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <ChakraLink {...(isActive && activeProps)} {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default CustomLink;
