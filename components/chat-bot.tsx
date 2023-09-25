"use client";

import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

type ChatBotProps = {
  name: string;
  type: string;
};

export default function ChatBot({ name, type }: ChatBotProps) {
  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      // Prevent the default Enter key behavior (new line)
      e.preventDefault();
      // Submit the form
      handleSubmit(e);
    }
  }

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: "initialContextMessage",
        role: "system",
        content: `Pretend to be a ${type}`,
      },
    ],
  }); // test

  return (
    <div>
      <div className="flex justify-center">
        <div className="text-4xl">{name}</div>
      </div>

      <div className="flex flex-col items-center justify-between pb-32">
        <div className="flex flex-col w-full gap-4 pb-8 space-y-4">
          {messages
            .filter((m) => m.id !== "initialContextMessage")
            .map((m) =>
              m.role === "user" ? (
                <div
                  key={m.id}
                  className="max-w-[48%] px-3 py-2 ml-auto bg-gray-600 text-sm border rounded-lg text-white"
                >
                  {m.content}
                </div>
              ) : (
                <div
                  key={m.id}
                  className="max-w-[48%] w-fit px-3 py-2 text-sm  border rounded-lg"
                >
                  {m.content}
                </div>
              )
            )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="fixed bottom-0 flex w-full gap-4 px-8 pb-8"
        >
          <Textarea
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />

          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
