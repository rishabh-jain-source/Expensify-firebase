import notesReducer from './../reducers/notesReducer'
import IterateNote from './Note'
import React, { useState,useEffect,useReducer} from 'react';
const AddNotes = () => {
    //const notesData=localStorage.getItem('notes')
    //const notesData=JSON.parse(localStorage.getItem('mynotes'))
    const [title, setTitle] = useState('');
    //const [notes, setNotes] = useState([]);
    const [notes, notedispatch] = useReducer(notesReducer, []);
    const [noteBody, setNoteBody] = useState('');
    useEffect(() => {
      const notesData=JSON.parse(localStorage.getItem('mynotes'))
      if (notesData) {
        notedispatch({type:'POPULATE_NOTES',notes:notesData})
      }
      
    },[])
    useEffect(() => {
      localStorage.setItem('mynotes',JSON.stringify(notes))
    },[notes])
  
    
    const addnote = (e) => {
      e.preventDefault()
  
      notedispatch({ type: 'ADD_NOTES', title, noteBody })
      //console.log(e.target.value)
      //console.log(title)
      // setNotes([
      //   ...notes,
      //   {title,noteBody}
      // ])
      setTitle('')
      setNoteBody('');
    }
    const removeNote = (title) => {
      //setNotes(notes.filter((note)=>note.title!==title))
      notedispatch({type:'REMOVE_NOTES',title})
    }
    return (
      <div>
        <h1>{notes.map((note) => (
  
          <IterateNote note={note} key={note.title} removeNote={removeNote}/>
        )) }</h1>
      <form onSubmit={addnote}>
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea type='text' value={noteBody} onChange={(e)=>setNoteBody(e.target.value)}/>
        <button>Add Note</button>
        </form>
  
  
        </div>
    )
  }
export default AddNotes;