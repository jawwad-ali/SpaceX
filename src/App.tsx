import React, { useState, useCallback } from 'react';
import './App.css';
import { LaunchContainer } from './components/Launches';
import { LaunchDetailsContainer } from "./components/LaunchesDetails"
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "./firebase/firebase"

const App = () => {
  const [id, setId] = useState(2);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);

  const messaging = firebase.messaging()
  messaging.requestPermission().then(() =>{
    return messaging.getToken()
  }).then((token)=>{
    // alert(token)
    // prompt("token",token)
    console.log(token)
  })

  return (
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-lg-3">
            <LaunchContainer handleIdChange={handleIdChange} />
          </div>
          <div className="col-lg-9">
            <LaunchDetailsContainer id={id} />
          </div>
        </div>
      </div>
  );
};
export default App;
