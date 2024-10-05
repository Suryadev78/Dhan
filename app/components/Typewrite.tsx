"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { generateMnemonic } from "bip39";
import React, { useState } from "react";

export default function Header({
  setMnemonic,
}: {
  setMnemonic: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const generateMnemonicPhrase = async () => {
    //generate a 12 word mnemonic
    const mnemonic = await generateMnemonic();
    setMnemonic(mnemonic);

    setButtonClicked(true);
  };
  const words = [
    {
      text: "Generate",
      className: "text-white dark:text-white",
    },
    {
      text: "Your",
      className: "text-white dark:text-white",
    },

    {
      text: "Wallets",
      className: "text-white dark:text-white",
    },
    {
      text: "with",
      className: "text-white dark:text-white",
    },
    {
      text: "Dhan",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center p-10 md:p-20 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Begin your journey with Dhan: Generate Your Solana Wallets
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {!buttonClicked && (
          <button
            onClick={generateMnemonicPhrase}
            className="inline-flex h-12 mt-5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Generate Mnemonics Phrase
          </button>
        )}
      </div>
    </div>
  );
}

// Button code

// tailwind.config.js code
