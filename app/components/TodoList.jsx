'use client';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
  IconButton,
  ListItemButton,
  Tooltip,
  Typography,
  MenuItem,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import TodoItem from './TodoItem';
import theme from './Theme';

const ToDoList = () => {
  const [note, setNote] = useState('');
  const [saveNote, setSaveNote] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isItemClick, setIsItemClick] = useState(false);
  const [item, setItem] = useState('');
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
    setSelectedItemIndex(null); // Clear selected item when deleting
  };

  const editNote = (index) => {
    setNote(saveNote[index]);
    setEditIndex(index);
    setSelectedItemIndex(null); // Clear selected item when editing
  };

  const handleItemClick = (index, item) => {
    setItem(item);
    setIsItemClick(true);
    // setSelectedItemIndex(selectedItemIndex === index ? null : index);
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
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#6c18a5' }}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            width: '300px',
            bgcolor: 'lightgreen',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <Typography variant='h4' center>
            Todo List
          </Typography>
          <TextField
            size='sm'
            id='outlined-basic'
            label='Note Text'
            variant='outlined'
            sx={{ width: '100%', marginTop: '10px' }}
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
                sx={{
                  marginTop: ' 16px',
                  display: ' flex',
                  justifyContent: ' center',
                  alignItems: ' center',
                }}
                onClick={addNote}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box
            sx={{
              overflowY: 'auto',
              bgcolor: 'lightgreen',
              height: '400px',
              wdith: '100%',
              borderRadius: '12px',
            }}
          >
            <ol>
              {Array.isArray(saveNote) &&
                saveNote.map((item, index) => (
                  <ListItemButton
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography onClick={() => handleItemClick(index, item)}>
                      {selectedItemIndex === index
                        ? item
                        : item.length > 15
                        ? `${item.slice(0, 15)}...`
                        : item}
                    </Typography>

                    <Box>
                      <Tooltip title='Edit Icon'>
                        <IconButton onClick={() => editNote(index)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Delete Icon'>
                        <IconButton onClick={() => deleteNote(index)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </ListItemButton>
                ))}
            </ol>
          </Box>
        </Box>
      </Box>
      {isItemClick ? (
        <TodoItem text={item} setIsItemClick={setIsItemClick} />
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
};

export default ToDoList;
