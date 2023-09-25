"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

type ChatBotTypeProps = {
  type: string;
  icon: StaticImageData;
  setChatBotType: (type: string) => void;
};

export default function ChatBotType({
  type,
  icon,
  setChatBotType,
}: ChatBotTypeProps) {
  return (
    <Button
      variant="link"
      className="rounded-full"
      onClick={() => setChatBotType(type)}
    >
      <Avatar className="h-24 w-24">
        <AvatarImage asChild src="/next.svg">
          <Image src={icon} alt="logo" className="rounded-full" />
        </AvatarImage>
        <AvatarFallback>Pirate</AvatarFallback>
      </Avatar>
    </Button>
  );
}
