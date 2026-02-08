import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchNotes = () => {
    axios.get("https://bakend-practice.onrender.com/api/notes")
      .then((res) => {
        setNotes(res.data.notes);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, []);


  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("https://bakend-practice.onrender.com/api/notes", {
      title, description
    }).then((res) => {
      console.log(res.data);
      fetchNotes();
      setTitle("");
      setDescription("");
    });
  }

  const deletHandler = (noteId) => {
    axios.delete("https://bakend-practice.onrender.com//api/notes/" + noteId)
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  };

  const updateNoteDescription = (Noteid) => {

    const description = prompt("Enter new description");

    if (!description) return;

    axios.patch("https://bakend-practice.onrender.com/api/notes/" + Noteid, {
      description: description
    }).then((res) => {
      console.log(res.data);
      fetchNotes();
    })
  };

  return (
    <>

      <form onSubmit={submitHandler} >
        <input type="text" placeholder='Enter title'
          value={title} onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="text" placeholder='Enter description'
          value={description} onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type='submit'>create note</button>
      </form>

      <div className="notes">
        {notes.map((note, idx) => {
          return <div key={idx} className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button
              onClick={() => {
                deletHandler(note._id)
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                updateNoteDescription(note._id)
              }}
            >
              update description
            </button>
          </div>
        })}
      </div>
    </>
  )
}

export default App
