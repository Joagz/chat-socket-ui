import React, { useContext, useState } from "react";
import "./App.css";
import { StompSessionProvider, useStompClient } from "react-stomp-hooks";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <StompSessionProvider
      url={"http://localhost:8080/gs-guide-websocket"}
      brokerURL="ws://localhost:8080/gs-guide-websocket"
    >
      <MainComponent></MainComponent>
    </StompSessionProvider>
  );
}

export default App;
