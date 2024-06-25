import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExampleView from "../views/ExampleView";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExampleView />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
