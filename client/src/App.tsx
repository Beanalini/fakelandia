import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/components/router/router";
import { MisdemeanoursProvider } from "../src/components/hooks/useMisdemeanoursContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
