import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const AuthLayout = ({ head, children, ...props }) => (
  <>
    <Head>
      <title>{head.title ?? 'Undang Kamu'}</title>
      <meta name="description" content={head.desc ?? 'Undang Kamu'} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Box minH="100vh" {...props}>
      {children}
    </Box>
  </>
);

export default AuthLayout;
