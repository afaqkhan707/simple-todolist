'use client';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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
        <h2>TodoList</h2>
        <TextField
        size='md'
          id='outlined-basic'
          label='NOTE TEXT'
          variant='outlined'
          className='text'
          type='text'
          value={note}
          placeholder='NOTE TEXT'
          onChange={noteText}
        />
  
        <Box sx={{display:'flex',justifyContent:'center',}}>
        <Button variant='contained' className='add-btn' onClick={addNote}>
          <AddIcon />
        </Button>
        </Box>
        <Box>
        <ul>
          {Array.isArray(saveNote) &&
            saveNote.map((item, index) => <li key={index}> {item}</li>)}
        </ul>
        </Box>
      </Box>
    </>
  );
};
export default ToDoList;
