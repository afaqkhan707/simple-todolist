'use client';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IconButton, ListItemButton, Tooltip, Typography } from '@mui/material';

const ToDoList = () => {
  const [note, setNote] = useState('');
  const [saveNote, setSaveNote] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const noteText = (e) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    if (note.length > 0) {
      if (editIndex !== null) {
        // Editing existing note
        const updatedNotes = [...saveNote];
        updatedNotes[editIndex] = note;
        setSaveNote(updatedNotes);
        setEditIndex(null);
      } else {
        // Adding new note
        setSaveNote((prevNotes) => [...prevNotes, note]);
      }
      setNote('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...saveNote];
    newNotes.splice(index, 1);
    setSaveNote(newNotes);
  };

  const editNote = (index) => {
    setNote(saveNote[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    // You can uncomment and use localStorage if you want to persist data
    // localStorage.setItem('notes', JSON.stringify(saveNote));
  }, [saveNote]);

  useEffect(() => {
    // You can uncomment and use localStorage if you want to persist data
    // const getTodos = JSON.parse(localStorage.getItem('notes')) || [];
    // setSaveNote(getTodos);
  }, []);

  return (
    <>
      <Box className='hero'>
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
            <ol>
              {Array.isArray(saveNote) &&
                saveNote.map((item, index) => (
                  <ListItemButton key={index}>
                    {item}
                    <IconButton onClick={() => editNote(index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteNote(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemButton>
                ))}
            </ol>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ToDoList;
