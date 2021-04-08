import React, { useState,useEffect,useReducer} from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';


const AddNotes = () => {

   // const [notes,dipatch]=useReducer()
    const [title, setTitle] = useState('hello')
    const [body, setBody] = useState('world')
    addNote = () => {
        
    }
    return (
        <div>
            <form onSubmit={addNote}>
                <input type='text' value={title} onChange={() => { setTitle(title) }} />
                <textarea type='text' value={body} onChange={() => { setBody(body) }} />
                <button >Add</button>
            </form>
        </div>
    )
    
}

ReactDOM.render(
    <div><AddNotes /></div>,
    document.getElementById('root')
);
reportWebVitals();