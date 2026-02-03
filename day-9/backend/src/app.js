const express = require("express");
const noteModel = require("./models/note.model")

const app = express();

app.use(express.json());

/* POST API */
app.post("/notes", async (req, res) => {
    const { title, description } = req.body;

    const note = await noteModel.create({
        title, description
    });

    res.status(201).json({
        message: "note created successfully",
        note
    });
});

/* GET Api */
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "notes fetched successfully",
        notes
    });
});

/* DELETE Api */
app.delete("/notes/:id", async (req, res) => {
    const { id } = req.params

    await noteModel.findOneAndDelete(id);

    res.status(204).json({
        message: "note deleted successfully",
    });
});

/* PATCH Api */
app.patch("/notes/:id", async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    await noteModel.findByIdAndUpdate(id, { description });


    res.status(200).json({
        message: "note description updated successfully"
    });
});


module.exports = app;