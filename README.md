## Dhan

Dhan is a Solana wallet generator that allows you to generate your Solana wallets with just a few clicks. It's a simple and user-friendly tool that makes it easy to create and manage your Solana wallets.

## Features

- Generate your Solana wallets with just a few clicks
- Easily copy your wallets to your clipboard
- Display your wallets' balances

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS , TypeScript
- **BlockChain Interaction**: @solana/web3.js
- **API**:Alchemy API to interact with the Blockchain

## Installation

1.**Clone the repository**

```
git clone https://github.com/Suryadev-Pandey/Dhan.git
```

```
cd Dhan
```

2.**Install dependencies**

```
npm install
```

3.**Set up the environment variables:**

- Create a .env file in the root directory of the project
- Add the Alchemy API key of Solana blockchain in the .env file

```

ALCHEMY_RPC_URL=https://solana-mainnet.g.alchemy.com/v2/<your_alchemy_api_key>
```

4.**Start the development server**

```
npm run dev
```

5.**Open the application in your browser**

```
http://localhost:3000
```

## Usage

1. **Generate Your Mnemonic Phrase**: Click on the "Generate Mnemonics Phrase" button to generate your mnemonic phrase. 2. **Display Your Mnemonic Phrase**: Once you have generated your mnemonic phrase, you will see your mnemonic phrase displayed on the screen. 3. **Copy Your Mnemonic Phrase**: Click on the "Copy to clipboard" button to copy your mnemonic phrase to the clipboard. 4. **Add Your Wallet**: Click on the "Add New Wallet" button to add your wallet. 5. **Display Your Wallets**: Once you have added your wallet, you will see your wallet displayed on the screen. 6. **Copy Your Wallet**: Click on the "Copy public key" button to copy your wallet to the clipboard. 7. **Display Your Wallet Balance**: Let's you see your wallet balance.

## Future Enhancements

- **MultiChain Support**: Dhan will support multiple blockchains in the future.
- **Send Transactions**: Dhan will allow you to send transactions to different wallets.
- **Wallet Import**: Dhan will allow you to import existing wallets using private keys.
