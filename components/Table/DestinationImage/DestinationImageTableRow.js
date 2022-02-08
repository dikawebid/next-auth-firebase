import React from 'react';
import {
  Badge,
  Button,
  IconButton,
  Image,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const DestinationImageTableRow = ({
  image,
  index,
  onSetAsThumbnail,
  onDelete,
}) => {
  return (
    <Tr>
      <Td pl="0px" textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {index + 1}
        </Text>
      </Td>

      <Td>
        <a href={image.file_url} target="_blank">
          <Image src={image.file_url} height="120px" objectFit="contain" />
        </a>
      </Td>

      <Td textAlign="center">
        <Text fontSize="sm" color={'gray.700'}>
          {image.ori_filename}
        </Text>
      </Td>

      <Td textAlign="center">
        {image.is_thumbnail ? (
          <Badge
            minWidth="84px"
            variant="solid"
            colorScheme="primary"
            fontSize="12px"
            borderRadius="12px"
            textAlign="center"
            px="8px"
            py="2px"
            style={{ textTransform: 'unset' }}
          >
            Thumbnail
          </Badge>
        ) : (
          <Button
            size="xs"
            colorScheme="primary"
            variant="outline"
            onClick={() => onSetAsThumbnail(index)}
          >
            Set as Thumbnail
          </Button>
        )}
      </Td>

      <Td textAlign="center">
        <IconButton
          size="sm"
          variant="outline"
          colorScheme="red"
          aria-label="Detail"
          icon={<FaTrash />}
          onClick={() => onDelete(index)}
        />
      </Td>
    </Tr>
  );
};

export default DestinationImageTableRow;
