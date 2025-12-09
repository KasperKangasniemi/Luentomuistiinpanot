import { useState } from "react";

function NoteSession({ courses, onAddNote }) {
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [currentSessionCourse, setCurrentSessionCourse] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [sessionNotes, setSessionNotes] = useState([]);

  function startNewSession() {
    setCurrentSessionCourse(null);
    setSessionNotes([]);
    setSelectedCourseId("");
    setNoteText("");
  }

  function handleSaveNote() {
    if (courses.length === 0) {
      alert("Lisää opintojakso ennen muistiinpanon tekoa.");
      return;
    }

    if (noteText.trim().length === 0) {
      alert("Muistiinpano ei voi olla tyhjä.");
      return;
    }

    const selectedIdNum = Number(selectedCourseId);
    const courseObj = courses.find((c) => c.id === selectedIdNum);

    if (!courseObj) {
      alert("Valitse opintojakso.");
      return;
    }

    if (currentSessionCourse === null) {
      // lukitaan sessio tähän kurssiin
      setCurrentSessionCourse(courseObj);
    } else {
      if (currentSessionCourse.id !== selectedIdNum) {
        alert(
          `Sessio on lukittu opintojaksoon '${currentSessionCourse.name}'.`
        );
        setSelectedCourseId(currentSessionCourse.id.toString());
        return;
      }
    }

    const newNote = {
      text: noteText,
      course: courseObj,
      timestamp: new Date().toISOString(),
    };

    onAddNote(newNote);
    setSessionNotes((prev) => [...prev, newNote]);
    setNoteText("");
  }

  return (
    <div>
      <h2>Muistiinpanojen lisäys</h2>

      <div>
        <select
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
          disabled={currentSessionCourse !== null}
        >
          <option value="">Valitse opintojakso</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <textarea
          placeholder="Kirjoita muistiinpano..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </div>

      <button onClick={handleSaveNote}>Tallenna muistiinpano</button>
      <button onClick={startNewSession}>Aloita uusi sessio</button>

      <h3>Tämän session muistiinpanot</h3>
      {sessionNotes.length === 0 ? (
        <p>Ei muistiinpanoja tässä sessiossa.</p>
      ) : (
        <ul>
          {sessionNotes.map((n, index) => (
            <li key={index}>{n.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoteSession;
