import moment from 'moment';
import React from 'react';
import { IconButton, Td, Text, Tr } from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa';
import DestinationPackageStatusBadge from '../../Badge/DestinationPackageStatusBadge';
import ImageWithPlaceholder from '../../Image/ImageWithPlaceholder';

const DestinationPackageTableRow = ({
  destinationPackage,
  index,
  onOpenDetail,
}) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td>
        <ImageWithPlaceholder
          src={destinationPackage.image.file_url}
          width="140px"
          height="140px"
          imgW="100%"
          imgH="100%"
          objectFit="cover"
        />
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {destinationPackage.name ?? '-'}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" color={'gray.700'}>
          {destinationPackage.description ?? '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        {destinationPackage.status ? (
          <DestinationPackageStatusBadge status={destinationPackage.status} />
        ) : null}
      </Td>

      <Td textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {destinationPackage.created_at
            ? moment(destinationPackage.created_at).format('DD/MM/YYYY HH:mm:ss')
            : '-'}
        </Text>
      </Td>

      <Td textAlign="center">
        <IconButton
          size="xs"
          variant="outline"
          colorScheme="primary"
          aria-label="Detail"
          icon={<FaInfo />}
          onClick={() => onOpenDetail(index)}
        />
      </Td>
    </Tr>
  );
};

export default DestinationPackageTableRow;
