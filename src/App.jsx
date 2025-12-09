import { useEffect, useState } from "react";
import Navigation from "./components/Navigation.jsx";
import CourseForm from "./components/CourseForm.jsx";
import NoteSession from "./components/NoteSession.jsx";
import NotesList from "./components/NotesList.jsx";



function App() {
  const [view, setView] = useState("courses");
  const [courses, setCourses] = useState([]);
  const [notes, setNotes] = useState([]);

  const [nextCourseId, setNextCourseId] = useState(0);
  const [nextNoteId, setNextNoteId] = useState(0);



  useEffect(() => {
    async function loadData() {
      const coursesRes = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
      );
      const coursesData = await coursesRes.json();

      const notesRes = await fetch(
        "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"

      );
      const notesData = await notesRes.json();

      setCourses(coursesData);
      setNotes(notesData);

      setNextCourseId(
        coursesData.length ? Math.max(...coursesData.map((c) => c.id)) + 1 : 0
      );
      setNextNoteId(
        notesData.length ? Math.max(...notesData.map((n) => n.id)) + 1 : 0
      );
    }

    loadData();
  }, []);

  function handleAddCourse(name) {
    const newCourse = { id: nextCourseId, name };
    setCourses((prev) => [...prev, newCourse]);
    setNextCourseId((prev) => prev + 1);
    return newCourse; 
  }

  function handleAddNote(noteWithoutId) {
    const newNote = { ...noteWithoutId, id: nextNoteId };
    setNotes((prev) => [...prev, newNote]);
    setNextNoteId((prev) => prev + 1);
  }

  function handleDeleteNote(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Luentomuistiinpanot</h1>

      <Navigation setView={setView} />

      {view === "courses" && (
        <CourseForm onAddCourse={handleAddCourse} />
      )}

      {view === "session" && (
        <NoteSession courses={courses} onAddNote={handleAddNote} />
      )}

      {view === "list" && (
        <NotesList
          notes={notes}
          courses={courses}
          onDeleteNote={handleDeleteNote}
        />
      )}
    </div>
  );
}

export default App;
