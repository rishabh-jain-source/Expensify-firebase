import React, { useState,useEffect,useReducer} from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import AddNotes from './components/NoteApp'

// const App = (props) => {
//   const [count, setCount] = useState(0)
  
//   const [word, setWord] = useState(props.word);
//   useEffect(() => {
//     document.title= count + word
//   })
//   const increment = () => {
    
//       setCount(count+1)
    
//   }
//   const decrement = () => {
//     setCount(count-1)
//   }
//   const reset = () => {
//     setCount(props.count)
//   }
//   return (
//     <div>
//       <h1>This is {word} {count}</h1>
//       <button onClick={increment}>+1</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={decrement}>-1</button>
//       <input type='text' value={word} onChange={(e) => setWord(e.target.value)}></input>
//     </div>
//   )
// }
// App.defaultProps = {
//   count: 0,
//   word:'count'
// }



ReactDOM.render(
  <div><AddNotes /></div>,
  document.getElementById('root')
);

reportWebVitals();

// import React, { useState,useEffect,useReducer} from 'react';
// import ReactDOM from 'react-dom';


// import reportWebVitals from './reportWebVitals';


// const AddNotes = () => {

//    // const [notes,dipatch]=useReducer()
//   const notesReducer = (state, action) => {
//     switch (action.type) {
//       case 'POPULATE':
//         return action.notes
//       case 'ADD_NOTE':
//         return [
//           ...state,
//           {title:action.title,body:action.body}
//         ]
//       default:
//         return state
//       }
//     }
//     const [title, setTitle] = useState('hello')
//   const [body, setBody] = useState('world')
//   const [notes, dispatch] = useReducer(notesReducer, [])
  
//   useEffect(() => {
//     localStorage.setItem('mynotes',JSON.stringify(notes))
//   }, [notes])
//   useEffect(() => {
//     const localData = JSON.parse(localStorage.getItem('mynotes'))
//     if (localData) {
//       dispatch({
//         type: 'POPULATE',
//         notes:localData
//       })
//     }
//   })
//     const addNote = (e) => {
//       e.preventDefault()
//       dispatch({ type: 'POPULATE', title, body })
//       setTitle('')
//       setBody('')
      
//     }
//     return (
//       <div>
//         {notes.map((note) => {
//           <p>{ note.title}</p>
//           })}
//             <form onSubmit={addNote}>
//                 <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} />
//                 <textarea type='text' value={body} onChange={(e) => { setBody(e.target.value) }} />
//                 <button >Add</button>
//             </form>
//         </div>
//     )
    
// }

// ReactDOM.render(
//     <div><AddNotes /></div>,
//     document.getElementById('root')
// );
// reportWebVitals();