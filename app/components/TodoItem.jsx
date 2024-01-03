import React from 'react';
import { Box, Typography } from '@mui/material';

const TodoItem = (props) => {
  return (
    <>
      <Box
        onClick={() => props.setIsItemClick(false)}
        sx={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: '0',
          zIndex: 1,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          width: '400px',
          minHeight: '200px',
          color: '#fff',
          diplay: 'flex',
          flexWrap: 'wrap',
          bgcolor: '#922B21',
          borderRadius: '10px',
          zIndex: 2,
        }}
      >
        <Typography variant='h6' sx={{ padding: '20px', maxWidth: '300px' }}>
          {' '}
          {props.text}
        </Typography>
      </Box>
    </>
  );
};

export default TodoItem;
