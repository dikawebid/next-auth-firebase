import React from 'react';
import { Button, Flex, Text, Spacer } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

const ContactDetails = ({ contact, onEdit }) => {
  return (
    <Card overflowX={{ sm: 'scroll', xl: 'hidden' }} mb={4}>
      <CardHeader p="6px 0px 22px 0px" mb="16px">
        <Flex w="100%">
          <Text fontSize="md" color="gray.700" fontWeight="bold">
            Contact
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
        <Flex minHeight="200px" width="100%" flexDirection="column">
          <Text fontSize="14px" fontWeight="bold">
            Phone
          </Text>
          <Text fontSize="16px" mb="16px">
            {contact.phone !== '' ? contact.phone : '-'}
          </Text>
          <Text fontSize="14px" fontWeight="bold">
            WA
          </Text>
          <Text fontSize="16px" mb="16px">
            {contact.wa !== '' ? contact.wa : '-'}
          </Text>
          <Text fontSize="14px" fontWeight="bold">
            Email
          </Text>
          <Text fontSize="16px" mb="16px">
            {contact.email !== '' ? contact.email : '-'}
          </Text>
          <Text fontSize="14px" fontWeight="bold">
            Address
          </Text>
          <Text fontSize="16px" mb="16px">
            {contact.address !== '' ? contact.address : '-'}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ContactDetails;
