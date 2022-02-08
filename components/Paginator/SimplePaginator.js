import React from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

const PaginatorItem = ({ page, isActive = false, disabled, onClick }) => {
  return (
    <Button
      size="sm"
      width="36px"
      height="36px"
      variant={isActive ? 'solid' : 'outline'}
      colorScheme={isActive ? 'primary' : 'gray'}
      borderRadius={0}
      onClick={page > 0 ? onClick : null}
      disabled={disabled}
    >
      {page > 0 ? page : '...'}
    </Button>
  );
};

const PaginatorPrevPage = ({ disabled, onClick }) => {
  return (
    <Button
      size="sm"
      width="36px"
      height="36px"
      variant={'outline'}
      colorScheme={'gray'}
      borderRadius="6px 0px 0px 6px"
      onClick={onClick}
      disabled={disabled}
    >
      {'<'}
    </Button>
  );
};

const PaginatorNextPage = ({ disabled, onClick }) => {
  return (
    <Button
      size="sm"
      width="36px"
      height="36px"
      variant={'outline'}
      colorScheme={'gray'}
      borderRadius="0px 6px 6px 0px"
      onClick={onClick}
      disabled={disabled}
    >
      {'>'}
    </Button>
  );
};

const PaginatorList = ({ page, totalPage, onPaginationClick }) => {
  let pageNumbers = [];

  if (totalPage <= 10) {
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);
    pageNumbers.push(2);

    if (page < 7) {
      for (let i = 3; i <= 10; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(0);
      pageNumbers.push(totalPage - 1);
      pageNumbers.push(totalPage);
    }

    if (page >= 7 && page < totalPage - 5) {
      pageNumbers.push(0);
      for (let i = page - 3; i <= page + 3; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(0);
      pageNumbers.push(totalPage - 1);
      pageNumbers.push(totalPage);
    }

    if (page >= totalPage - 5) {
      pageNumbers.push(0);
      for (let i = totalPage - 6; i <= totalPage; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return (
    <>
      {pageNumbers.map((pageNumber, i) => {
        {
          return (
            <PaginatorItem
              key={`paginate-${i}`}
              page={pageNumber}
              isActive={page === pageNumber}
              onClick={() => onPaginationClick(pageNumber)}
            />
          );
        }
      })}
    </>
  );
};

const SimplePaginator = ({
  total,
  page = 1,
  limit,
  onPaginationPrev,
  onPaginationNext,
  onPaginationClick,
}) => {
  const totalPage = Math.ceil(total / limit);

  if (total <= limit) {
    return null;
  }

  return (
    <HStack spacing={0} float="right">
      <PaginatorPrevPage disabled={page === 1} onClick={onPaginationPrev} />

      <PaginatorList
        page={page}
        totalPage={totalPage}
        onPaginationClick={onPaginationClick}
      />

      <PaginatorNextPage
        disabled={page === totalPage}
        onClick={onPaginationNext}
      />
    </HStack>
  );
};

export default SimplePaginator;
