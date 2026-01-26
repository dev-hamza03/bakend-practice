const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

/* creating note */
app.post("/notes", (req, res) => {
    console.log(req.body);

    notes.push(req.body);

    res.send("note created");
});

/* fetching notes */
app.get("/notes", (req, res) => {
    res.send(notes);
});

/* Deleting note using params */
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index];

    res.send("note deleted successfully")
});

/* updating notes description using PATCH */
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].description = req.body.description;

    res.send("note updated successfully");
});

module.exports = app;