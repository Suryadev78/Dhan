"use client";
import { Button } from "@/components/ui/button";
import MnemonicDisplay from "./components/MnemonicDisplay";
import Header from "./components/Typewrite";
import { useState } from "react";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const words = mnemonic.split(" ");

  console.log(mnemonic);
  return (
    <div className=" h-full bg-black ">
      <Header setMnemonic={setMnemonic} />
      {mnemonic.length > 0 && <MnemonicDisplay words={words} />}
    </div>
  );
}
