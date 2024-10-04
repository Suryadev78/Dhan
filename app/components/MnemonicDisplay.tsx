"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

import SolanaWalletComponent from "./SolanaWallet";

export default function MnemonicDisplay({
  words,
  Mnemonic,
}: {
  words: string[];
  Mnemonic: string;
}) {
  const [copied, setCopied] = useState(false);
  const [mnemonic, setMnemonic] = useState<string[]>([]);
  const generatedMnemonic = Mnemonic;

  useEffect(() => {
    const storedmnemonic = localStorage.getItem("mnemonic");
    if (storedmnemonic) {
      setMnemonic(storedmnemonic.split(", "));
    } else if (words.length > 0) {
      localStorage.setItem("mnemonic", words.join(", "));
      setMnemonic(words);
    }
  }, [words]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(words.join(", ")); // Join array into a string
    setCopied(true);
  };

  return (
    <div className="bg-black h">
      <Card onClick={copyToClipboard} className=" w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Your 12-Word Mnemonic Phrase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3 mb-2">
            {words.map((word, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-gray-900 rounded-md"
              >
                <span className="text-secondary-foreground mr-1 font-mono">
                  {index + 1}.
                </span>
                <span className="font-mono text-slate-100 ">{word}</span>
              </div>
            ))}
          </div>
          <h3 className="text-center hover:cursor-pointer">
            {copied === true ? "Copied to clipboard!" : "Copy to clipboard"}
          </h3>
        </CardContent>
      </Card>
      <SolanaWalletComponent generatedMnemonics={generatedMnemonic} />
    </div>
  );
}
