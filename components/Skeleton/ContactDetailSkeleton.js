import React from 'react';
import { Flex, Text, Skeleton } from '@chakra-ui/react';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

const ContactDetailSkeleton = () => {
  return (
    <Card overflowX={{ sm: 'scroll', xl: 'hidden' }} mb={4}>
      <CardHeader p="6px 0px 22px 0px" mb="16px">
        <Flex w="100%">
          <Text fontSize="md" color="gray.700" fontWeight="bold">
            Contact
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex height="220px" width="100%" flexDirection="column">
          <Skeleton width="100px" height="14px" mb="4px" />
          <Skeleton height="16px" mb="24px" />
          <Skeleton width="100px" height="14px" mb="4px" />
          <Skeleton height="16px" mb="24px" />
          <Skeleton width="100px" height="14px" mb="4px" />
          <Skeleton height="16px" mb="24px" />
          <Skeleton width="100px" height="14px" mb="4px" />
          <Skeleton height="16px" mb="24px" />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ContactDetailSkeleton;
