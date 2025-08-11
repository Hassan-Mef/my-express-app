const express = require('express');
const app = express();

app.use(express.json()); // middleware to parse incoming JSON

let notes = [];

// GET: read notes
app.get('/notes', (req, res) => {
  res.json(notes); // send array of notes
});

// POST: create a new note
app.post('/notes', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    text: req.body.text // read JSON data
  };
  notes.push(newNote);
  res.status(201).json(newNote); // send back created note
});

// PUT: update a note
app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);

  if (!note) return res.status(404).send({ message: "Note not found" });

  note.text = req.body.text; // update from JSON
  res.json(note);
});

app.listen(3004, () => {
  console.log('Server running at http://localhost:3004');
});
