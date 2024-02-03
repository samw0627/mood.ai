"use client";
import React, { useEffect, useState } from "react";
import { DeepChat } from "deep-chat-react";
import "./globals.css";
import ButtonAppBar from "./components/Header";
import '@fontsource/roboto/700.css';


function App() {
  const initialMessages = [
    { role: "user", text: "Hey, how are you today?" },
    { role: "ai", text: "I am doing very well!" },
  ];

return (
    <div className="App">
    <ButtonAppBar />
    <DeepChat
        demo={true}
        style={{ borderRadius: "10px" , height: "calc(100vh - 70px)", width:"96vw"}}
        textInput={{ placeholder: { text: "Welcome to the demo!" } }}
        initialMessages={initialMessages}
    />
    </div>
);
}

export default App;
