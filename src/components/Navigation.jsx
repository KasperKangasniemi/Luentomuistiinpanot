function Navigation({ setView }) {
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <button onClick={() => setView("courses")}>Opintojakson lisäys</button>
      <button onClick={() => setView("session")}>Muistiinpanojen lisäys</button>
      <button onClick={() => setView("list")}>Muistiinpanojen listaus</button>
    </nav>
  );
}

export default Navigation;
