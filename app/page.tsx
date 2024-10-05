"use client";
import Footer from "./components/footer";
// import Footer from "./components/footer";
import MnemonicDisplay from "./components/MnemonicDisplay";
import Header from "./components/Typewrite";
import { useState } from "react";

export default function Home() {
  const [mnemonic, setMnemonic] = useState("");
  const words = mnemonic.split(" ");

  return (
    <div className=" h-screen bg-black ">
      <div className="flex justify-center md:justify-end  ">
        <Footer />
      </div>
      <Header setMnemonic={setMnemonic} />
      {mnemonic.length > 0 && (
        <MnemonicDisplay words={words} Mnemonic={mnemonic} />
      )}
    </div>
  );
}
