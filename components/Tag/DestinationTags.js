import React from 'react';
import {
  Text,
  Tag,
  TagLabel,
  TagCloseButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const DestinationTags = ({ destinations, onRemove }) => {
  if (destinations.length > 0) {
    return (
      <Wrap>
        {destinations.map((item, index) => {
          return (
            <WrapItem key={`selected-dest-${index}`}>
              <Tag
                size="md"
                borderRadius="full"
                variant="outline"
                colorScheme="primary"
              >
                <TagLabel>{item.name}</TagLabel>
                <TagCloseButton onClick={() => onRemove(index)} />
              </Tag>
            </WrapItem>
          );
        })}
      </Wrap>
    );
  }

  return <Text fontSize="md">There no selected destination</Text>;
};

export default DestinationTags;
