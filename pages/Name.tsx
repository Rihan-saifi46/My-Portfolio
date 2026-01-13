import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export default function EncryptedTextDemoSecond() {
  return (
    <p className="mx-auto max-w-lg py-10 text-left">
      <EncryptedText
        text="Hello, I'm Vinay Pandey"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-white"
        revealDelayMs={50}
      />
    </p>
  );
}
