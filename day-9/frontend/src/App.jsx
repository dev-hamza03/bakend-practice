import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/notes")
      .then((res) => {
        setNotes(res.data.notes);
      });
  },[])


  return (
    <>
      <div className="notes">
        {notes.map((note, idx) => {
          return <div key={idx} className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
