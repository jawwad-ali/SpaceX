import React, { useState, useCallback } from 'react';
import './App.css';
import { LaunchContainer } from './components/Launches';
import { LaunchDetailsContainer } from "./components/LaunchesDetails"

const App = () => {
  const [id, setId] = useState(2);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchContainer handleIdChange={handleIdChange}  />
      <LaunchDetailsContainer id={id} />
    </div>
  );
};
export default App;
