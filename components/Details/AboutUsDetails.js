import React from 'react';
import { Button, Flex, Text, Spacer } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

const AboutUsDetails = ({ aboutUs, onEdit }) => {
  return (
    <Card overflowX={{ sm: 'scroll', xl: 'hidden' }} mb={4}>
      <CardHeader p="6px 0px 22px 0px" mb="16px">
        <Flex w="100%">
          <Text fontSize="md" color="gray.700" fontWeight="bold">
            About Us
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
            About
          </Text>
          <Text fontSize="16px" mb="16px">
            {aboutUs.about !== '' ? aboutUs.about : '-'}
          </Text>
          <Text fontSize="14px" fontWeight="bold">
            Version
          </Text>
          <Text fontSize="16px" mb="16px">
            {aboutUs.version !== '' ? aboutUs.version : '-'}
          </Text>
          <Text fontSize="14px" fontWeight="bold">
            License
          </Text>
          <Text fontSize="16px" mb="16px">
            {aboutUs.license !== '' ? aboutUs.license : '-'}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AboutUsDetails;
