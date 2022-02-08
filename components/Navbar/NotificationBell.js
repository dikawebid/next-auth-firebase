import React from 'react';
import { MenuButton } from '@chakra-ui/react';
import { FaRegBell } from 'react-icons/fa';

const NotificationBell = ({ total }) => {
  return (
    <MenuButton>
      {total > 0 ? (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              background: 'red',
              borderRadius: '8px',
              color: 'white',
              fontSize: '10px',
              fontWeight: '600',
              minWidth: '20px',
              padding: '4px',
              margin: '0 0 0 0',
              lineHeight: '10px',
            }}
          >
            {total > 99 ? '99+' : total}
          </div>
        </div>
      ) : null}
      <FaRegBell color="gray" size="20px" />
    </MenuButton>
  );
};

export default NotificationBell;
