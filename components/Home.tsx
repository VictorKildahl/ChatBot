"use client";

import { useState } from "react";
import Alien from "../assets/alien.jpeg";
import Dog from "../assets/dog.jpeg";
import Goose from "../assets/goose.jpeg";
import Pirate from "../assets/pirate.jpeg";
import Yoda from "../assets/yoda.jpeg";
import ChatBot from "../components/chat-bot";
import { ModeToggle } from "../components/mode-toggle";
import ChatBotType from "./ChatBotType";
import Previous from "./Previous";

export default function Home() {
  const [chatBotType, setChatBotType] = useState("");

  return (
    <div className="p-8">
      <div className="flex justify-between">
        {chatBotType ? <Previous /> : <div />}
        <ModeToggle />
      </div>

      {!chatBotType && (
        <div className="flex justify-center pb-24 pt-16">
          <ChatBotType
            type="Pirate"
            icon={Pirate}
            setChatBotType={setChatBotType}
          />
          <ChatBotType type="Dog" icon={Dog} setChatBotType={setChatBotType} />
          <ChatBotType
            type="Alien"
            icon={Alien}
            setChatBotType={setChatBotType}
          />
          <ChatBotType
            type="Goose"
            icon={Goose}
            setChatBotType={setChatBotType}
          />
          <ChatBotType
            type="Yoda"
            icon={Yoda}
            setChatBotType={setChatBotType}
          />
        </div>
      )}

      {chatBotType ? (
        <ChatBot name={`ChatBot - ${chatBotType}`} type={chatBotType} />
      ) : (
        <div className="flex justify-center text-2xl">
          Choose a ChatBot type
        </div>
      )}
    </div>
  );
}
