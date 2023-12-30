import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/components/router/router";
import { MisdemeanoursProvider } from "../src/components/hooks/useMisdemeanoursContext";

function App() {
  return (
    <>
      <MisdemeanoursProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MisdemeanoursProvider>
    </>
  );
}

export default App;
