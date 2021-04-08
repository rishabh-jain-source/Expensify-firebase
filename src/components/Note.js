import React, { useEffect } from 'react'

const IterateNote = ({ note, removeNote }) => {
  
    return (
      <div>
            {<div><h1>{note.title}  </h1><p>{ note.noteBody}</p></div>}
            
            <button onClick={()=>removeNote(note.title)}>Remove</button>
          </div>
    )
}
  export default IterateNote