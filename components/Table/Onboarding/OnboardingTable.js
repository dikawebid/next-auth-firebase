import React from 'react';
import { Table, Thead, Tbody, Th, Tr } from '@chakra-ui/react';
import OnboardingTableRow from './OnboardingTableRow';

const OnboardingTable = ({ onboardings, onOpenDetail, onEdit, onDelete }) => {
  return (
    <Table size="sm" variant="simple" color="gray.700">
      <Thead>
        <Tr my=".8rem" pl="0px" color="gray.400">
          <Th pl="0px" color="gray.400" textAlign="center">
            Position
          </Th>
          <Th color="gray.400" textAlign="center">
            Image
          </Th>
          <Th color="gray.400" textAlign="center">
            Title
          </Th>
          <Th color="gray.400" textAlign="center">
            Content
          </Th>
          <Th color="gray.400" textAlign="center">
            Action
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {onboardings.map((item, index) => {
          return (
            <OnboardingTableRow
              onboarding={item}
              index={index}
              onOpenDetail={onOpenDetail}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          );
        })}
      </Tbody>
    </Table>
  );
};

export default OnboardingTable;
