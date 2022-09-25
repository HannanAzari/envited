import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Create from './pages/Create';
import Event from './pages/Event';

function App() {
  const [inputs, setInputs] = useState({
    eventName: '',
    hostName: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    eventImg: ''

  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="create" element={<Create 
          inputs={inputs}
          setInputs={setInputs}
        />}></Route>
        <Route path="event" element={<Event 
          inputs={inputs}
          setInputs={setInputs}
        />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
