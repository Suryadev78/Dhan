"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle, Wallet, Globe, Plus } from "lucide-react";

// Single Component for Wallet Display and Dashboard
function SolanaWalletComponent() {
  const wallets = [
    {
      number: "Wallet #1",
      publicKey: "0x1234567890123456789012345678901234567890",
    },
    {
      number: "Wallet #2",
      publicKey: "0x0987654321098765432109876543210987654321",
    },
    {
      number: "Wallet #3",
      publicKey: "0xABCDEF1234567890ABCDEF1234567890ABCDEF12",
    },
  ];

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (publicKey: string) => {
    navigator.clipboard.writeText(publicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Wallets</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wallets.map((wallet, index) => (
            <Card
              key={index}
              className="bg-gray-900 text-white border border-gray-800"
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg font-semibold flex items-center">
                    <Wallet className="mr-2 h-5 w-5" />
                    {wallet.number}
                  </span>
                  <Button
                    onClick={() => copyToClipboard(wallet.publicKey)}
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
                    Public
                  </span>
                </div>
                <div className="bg-black rounded-lg p-3 break-all font-mono text-sm">
                  {wallet.publicKey}
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
