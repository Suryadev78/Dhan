"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle, Wallet, Globe, Plus } from "lucide-react";
import { mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import axios from "axios";
import { PublicKey } from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

// Single Component for Wallet Display and Dashboard
function SolanaWalletComponent({
  generatedMnemonics,
}: {
  generatedMnemonics: string;
}) {
  const rpcUrl: string = process.env.ALCHEMY_RPC_URL || ""; // Provide a default value
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState<(string | PublicKey)[]>([]);
  const [seed, setSeed] = useState("");
  const [accountBalance, setAccountBalance] = useState<number[]>([]);

  useEffect(() => {
    if (!seed) {
      setSeed(mnemonicToSeedSync(generatedMnemonics).toString("hex")); // Changed to mnemonicToSeedSync
    }
  }, [seed, generatedMnemonics]);

  const onClick = () => {
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, keypair.publicKey]);
    getAccountBalance(keypair.publicKey); // Pass the new publicKey instead of the array
  };
  const getAccountBalance = async (publicKey: PublicKey) => {
    try {
      const result = await axios.post(rpcUrl, {
        jsonrpc: "2.0",
        id: 1,
        method: "getBalance",
        params: [publicKey.toString()], // Convert PublicKey to string
      });
      if (result.data && result.data.result !== undefined) {
        const balance = result.data.result / LAMPORTS_PER_SOL;
        const formattedBalance = parseFloat(balance.toFixed(4));
        setAccountBalance((prev) => [...prev, formattedBalance]); // Append to existing balances
      } else {
        console.log("Account balance is not available");
        setAccountBalance((prev) => [...prev, 0]); // Set to 0 if balance is not available
      }
    } catch (error) {
      console.error("Error fetching account balance:", error);
      setAccountBalance((prev) => [...prev, 0]); // Set to 0 on error
    }
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (publicKey: string) => {
    navigator.clipboard.writeText(publicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Your Solana Wallets
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publicKeys.map((wallet, index) => (
            <Card
              key={index}
              className="bg-gray-900 text-white border border-gray-800"
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg font-semibold flex items-center">
                    <Wallet className="mr-2 h-5 w-5" />
                    {index + 1}
                  </span>
                  <Button
                    onClick={() => copyToClipboard(wallet.toString())}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white hover:bg-gray-800"
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {copied ? "Copied" : "Copy public key"}
                    </span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-center">
                  <Globe className="mr-2 h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-400">
                    Public Id
                  </span>
                </div>
                <div className="bg-black rounded-lg p-3 break-all font-mono text-sm">
                  {wallet.toString()}
                </div>
                <div className="mt-1 flex justify-center">
                  <span className="bg-black p-1 rounded-md">
                    Balance:{" "}
                    {accountBalance[index] !== undefined
                      ? accountBalance[index].toFixed(2)
                      : "Loading..."}{" "}
                    SOL
                  </span>
                </div>
                {copied && (
                  <p className="text-xs mt-2 text-center animate-fade-in-down text-green-400">
                    Public key copied to clipboard!
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
          <Card className="bg-gray-900 border border-gray-800 flex items-center justify-center">
            <Button
              onClick={onClick}
              variant="ghost"
              className="h-full w-full text-white hover:text-white hover:bg-gray-800"
            >
              <Plus className="mr-2 h-6 w-6" />
              Add New Wallet
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SolanaWalletComponent;
