import CharacterGrid from "./components/CharacterGrid.jsx";
import CharacterDetails from "./components/CharacterDetails.jsx";
import AddCharacterForm from "./components/AddCharacterForm.jsx";

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        // style={{
        //   backgroundImage:
        //     "url('https://i.pinimg.com/originals/b4/8f/2a/b48f2a8b493cf601f77f67e72261a8a4.gif')",
        // }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full max-w-screen-lg">
                <CharacterGrid />
              </div>
            }
          />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/characters/new" element={<AddCharacterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
