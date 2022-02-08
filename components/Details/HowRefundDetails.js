import React from 'react';
import { Button, Flex, Text, Spacer } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

const HowRefundDetails = ({ howRefund, onEdit }) => {
  return (
    <Card overflowX={{ sm: 'scroll', xl: 'hidden' }} mb={4}>
      <CardHeader p="6px 0px 22px 0px" mb="16px">
        <Flex w="100%">
          <Text fontSize="md" color="gray.700" fontWeight="bold">
            How To Refund
          </Text>
          <Spacer />
          <Button
            width="100px"
            colorScheme="primary"
            size="sm"
            onClick={onEdit}
            leftIcon={<FaEdit />}
          >
            Edit
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <div dangerouslySetInnerHTML={{ __html: howRefund.content }}></div>
      </CardBody>
    </Card>
  );
};

export default HowRefundDetails;
