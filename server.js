const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbPath = path.join(__dirname, "db", "db.json");


function readNotes() {
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
}

function writeNotes(notes) {
    fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2));
}

app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html")
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/api/notes", (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

app.post("/api/notes", (req, res) => {
    const notes = readNotes();
    const newNote = req.body;
    newNote.id = Date.now().toString();
    notes.push(newNote);
    writeNotes(notes);
    res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notes = readNotes();
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    writeNotes(updatedNotes);
    res.json({ success: true });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
