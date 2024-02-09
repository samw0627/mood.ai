"use client";
import React, { useEffect, useState } from "react";
import { DeepChat } from "deep-chat-react";
import "./globals.css";
import ButtonAppBar from "./components/Header";
import '@fontsource/roboto/700.css';
import { BiodataContext } from "./BiodataContext";

function App() {
  const [initMsg, setInitMsg] = useState("Hi! How are you feeling today?");
  const { heartrate, temperature } = React.useContext(BiodataContext);
  const initialMessages = [
    { role: "ai", text: initMsg },
  ];


  const handleInitMsg = () => {
    if (heartrate > 100 && temperature > 37.5) {
      setInitMsg("It seems that your heart rate is " + heartrate +" bpm and your body temperature is "+temperature+ "which is higher than your average high rate, is everything okay?");
      return
    }
    if(heartrate > 100){
      setInitMsg("It seems that your heart rate is " + heartrate +" bpm, which is higher than your average high rate, is everything okay?");
      return
    }
    else{
      setInitMsg("Hi! How are you feeling today?")
      return
  }
  }
  
  useEffect(() => {
    handleInitMsg();
  }, [heartrate, temperature]);

return (
    <div className="App">
    <ButtonAppBar />
    <DeepChat
        style={{ borderRadius: "10px" , height: "calc(100vh - 70px)", width:"96vw"}}
        textInput={{ placeholder: { text: "Welcome to the demo!" } }}
        initialMessages={initialMessages}
        directConnection={{"openAI": {
          "key": "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",
          "assistant": {
            "assistant_id": "asst_XwOFUudpWkGu0qR1z2ISp7NG"
          }
        }}}
        textToSpeech={true}
    />
    </div>
);
}

export default App;
