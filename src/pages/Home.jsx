import { useState } from "react";
import Tasks from "../components/Tasks";

const Home = () => {
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  return (
    <header className="app">
      <Tasks
        showEmptyMessage={showEmptyMessage}
        setShowEmptyMessage={setShowEmptyMessage}
      />

      {showEmptyMessage && (
        <div className="empty-message">Agrega Contenido</div>
      )}
    </header>
  );
};

export default Home;
