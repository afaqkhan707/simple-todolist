'use client';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IconButton, ListItemButton, Tooltip, Typography } from '@mui/material';

const ToDoList = () => {
  const [note, setNote] = useState('');
  const [saveNote, setSaveNote] = useState([]);

  const noteText = (e) => {
    setNote(e.target.value);
  };
  const addNote = () => {
    if (note.length > 0) {
      setSaveNote((pValue) => [...pValue, note]);
      setNote(' ');
    }
  };
  return (
    <>
      <Box className='box'>
        <Typography variant='h4'>Todo List</Typography>
        <TextField
          size='sm'
          id='outlined-basic'
          label='Note Text'
          variant='outlined'
          className='text'
          type='text'
          value={note}
          onChange={noteText}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip title='Add Icon'>
            <IconButton
              variant='contained'
              className='add-btn'
              onClick={addNote}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <ul>
            {Array.isArray(saveNote) &&
              saveNote.map((item, index) => (
                <ListItemButton key={index}> {item}</ListItemButton>
              ))}
          </ul>
        </Box>
      </Box>
    </>
  );
};
export default ToDoList;
