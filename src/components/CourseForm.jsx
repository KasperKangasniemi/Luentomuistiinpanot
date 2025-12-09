import { useState } from "react";

function CourseForm({ onAddCourse }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim().length === 0) {
      alert("Nimi ei voi olla tyhjä.");
      return;
    }

    // Luodaan kurssi Appissa ja saadaan se takaisin
    const createdCourse = onAddCourse(name);

    setMessage(
      `opintojakso '${createdCourse.name}' lisätty id:llä ${createdCourse.id}`
    );

    setName("");
  }

  return (
    <div>
      <h2>Lisää opintojakso</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Opintojakson nimi"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Lisää</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default CourseForm;
