import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import List from "./List";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
