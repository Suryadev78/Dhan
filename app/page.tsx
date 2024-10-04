"use client";
import Footer from "./components/footer";
import MnemonicDisplay from "./components/MnemonicDisplay";
import Header from "./components/Typewrite";
import { useState } from "react";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const words = mnemonic.split(" ");

  return (
    <div className=" h-full bg-black ">
      <Header setMnemonic={setMnemonic} />
      {mnemonic.length > 0 && (
        <MnemonicDisplay words={words} Mnemonic={mnemonic} />
      )}
      <Footer />
    </div>
  );
}
