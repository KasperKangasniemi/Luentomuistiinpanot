import { useState } from "react";

function NotesList({ notes, courses, onDeleteNote }) {
  const [selectedCourseId, setSelectedCourseId] = useState("all");

  const filteredNotes =
    selectedCourseId === "all"
      ? notes
      : notes.filter((n) => n.course.id === Number(selectedCourseId));

  return (
    <div>
      <h2>Muistiinpanojen listaus</h2>

      <label>
        Suodata opintojakson mukaan:{" "}
        <select
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
        >
          <option value="all">Kaikki opintojaksot</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      {filteredNotes.length === 0 ? (
        <p>Ei muistiinpanoja!</p>
      ) : (
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id} style={{ marginBottom: "1rem" }}>
              <p>{note.text}</p>
              <p>
                Opintojakso: {note.course.name} (id: {note.course.id})
              </p>
              <p>Aikaleima: {note.timestamp}</p>
              <button onClick={() => onDeleteNote(note.id)}>Poista</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;
