   // ═══════════════════════════════════════════════════════════════
        // DATA
        // ═══════════════════════════════════════════════════════════════
        const COURSES = [
            {
                id: 0, emoji: '🔗', title: 'Blockchain Basics',
                desc: 'What a blockchain actually is, how it works, and why it matters.',
                lessons: [
                    {
                        id: '0-0', title: 'What is a Blockchain?',
                        tag: 'Fundamentals',
                        desc: 'The core idea behind the technology powering everything in Web3.',
                        content: `
<h3>The simplest explanation</h3>
<p>A <strong>blockchain</strong> is a database — but one that nobody owns and everyone can verify. Instead of one company storing your data on their server, the data is copied across thousands of computers worldwide called <em>nodes</em>.</p>
<p>Each group of new data is bundled into a <strong>block</strong>. Each block is stamped with a unique fingerprint (a <em>hash</em>) that includes the fingerprint of the block before it. Chain the blocks together and you get a blockchain.</p>
<div class="callout tip"><div class="callout-label">💡 Think of it like this</div><p>Imagine a Google Doc that everyone can read, nobody can secretly edit, and every change is permanently recorded — even who made it and when.</p></div>
<h3>Why the chain matters</h3>
<p>Because each block contains the hash of the previous one, changing any old block would break every block that comes after it. This makes tampering nearly impossible — the network would immediately reject the altered version.</p>
<div class="code-block"><span class="comment">// Simplified block structure</span>
<span class="kw">Block</span> {
  index: 4821,
  timestamp: <span class="str">"2024-01-15T09:22:11Z"</span>,
  data: <span class="str">"Alice sent Bob 1 ETH"</span>,
  previousHash: <span class="str">"0000a8f3c2..."</span>,
  hash: <span class="str">"0000b7e9d1..."</span>
}</div>
<h3>Key properties</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">Decentralised</div><div class="term-def">No single company or government controls it. Thousands of nodes hold copies.</div></div>
  <div class="term-item"><div class="term-name">Immutable</div><div class="term-def">Once data is confirmed, it cannot be altered or deleted.</div></div>
  <div class="term-item"><div class="term-name">Transparent</div><div class="term-def">Anyone can inspect the full history of transactions on most blockchains.</div></div>
  <div class="term-item"><div class="term-name">Trustless</div><div class="term-def">You don't need to trust a middleman — the code enforces the rules.</div></div>
</div>
<div class="callout warn"><div class="callout-label">⚠️ Common misconception</div><p>Blockchain is not the same as Bitcoin. Bitcoin is one application built on blockchain technology. Many different blockchains exist for many different purposes.</p></div>
`,
                        xp: 20, quiz: 0
                    },
                    {
                        id: '0-1', title: 'How Consensus Works',
                        tag: 'Mechanism',
                        desc: 'How thousands of strangers agree on one version of the truth without a referee.',
                        content: `
<h3>The double-spend problem</h3>
<p>Digital money has a fundamental problem: you could copy a file and spend it twice. Cash can't be copied — but a digital file can. Blockchain solves this with <strong>consensus mechanisms</strong>: rules that force all nodes to agree on which transactions are valid.</p>
<h3>Proof of Work (PoW)</h3>
<p>Used by <em>Bitcoin</em>. Miners compete to solve a complex mathematical puzzle. The winner adds the next block and earns a reward. This puzzle requires enormous computational power — making it expensive to cheat.</p>
<div class="callout"><div class="callout-label">How PoW works</div><p>The puzzle: find a number that, when combined with block data and hashed, produces a result starting with many zeros. This is easy to verify but hard to find — like guessing a combination lock.</p></div>
<h3>Proof of Stake (PoS)</h3>
<p>Used by <em>Ethereum</em> since 2022. Instead of burning electricity, validators <strong>stake</strong> (lock up) their crypto as collateral. They're randomly chosen to validate blocks. Bad actors lose their stake — a financial penalty called <em>slashing</em>.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Proof of Work</div><div class="term-def">Security through computational effort. Energy-intensive but battle-tested (Bitcoin).</div></div>
  <div class="term-item"><div class="term-name">Proof of Stake</div><div class="term-def">Security through economic stake. More efficient. Used by Ethereum, Solana, Cardano.</div></div>
  <div class="term-item"><div class="term-name">Validator</div><div class="term-def">A node that participates in block creation under PoS by locking up collateral.</div></div>
  <div class="term-item"><div class="term-name">Slashing</div><div class="term-def">Punishment mechanism — a validator loses part of their stake for behaving dishonestly.</div></div>
</div>
`,
                        xp: 25, quiz: 1
                    },
                    {
                        id: '0-2', title: 'Public vs Private Blockchains',
                        tag: 'Architecture',
                        desc: 'Not all blockchains are open to everyone. Here is the difference.',
                        content: `
<h3>Public blockchains</h3>
<p>Anyone can join, read, and transact on a <strong>public blockchain</strong>. They are fully permissionless — no ID, no application, no approval needed. Bitcoin and Ethereum are public blockchains. They are the most censorship-resistant and transparent.</p>
<h3>Private blockchains</h3>
<p>A <strong>private blockchain</strong> is controlled by one organisation. Only approved participants can join. They are faster and cheaper to run but sacrifice decentralisation. Banks and corporations use these for internal record-keeping.</p>
<h3>Consortium blockchains</h3>
<p>A middle ground: multiple organisations share control. Common in supply chain, healthcare, and finance. Examples include <em>Hyperledger Fabric</em> and <em>R3 Corda</em>.</p>
<div class="callout tip"><div class="callout-label">💡 Real-world analogy</div><p>Public blockchain = public road (anyone can drive). Private blockchain = private driveway (invite only). Consortium = gated community road (shared between residents).</p></div>
<div class="term-list">
  <div class="term-item"><div class="term-name">Permissionless</div><div class="term-def">No approval required to participate. Anyone with internet can join.</div></div>
  <div class="term-item"><div class="term-name">Permissioned</div><div class="term-def">Participants must be vetted and approved before joining.</div></div>
</div>
`,
                        xp: 20, quiz: 2
                    },
                    {
                        id: '0-3', title: 'Layer 1 vs Layer 2',
                        tag: 'Scaling',
                        desc: 'Why blockchains are slow and how Layer 2 solutions fix it.',
                        content: `
<h3>The scalability trilemma</h3>
<p>Every blockchain must balance three things: <strong>security</strong>, <strong>decentralisation</strong>, and <strong>scalability</strong>. The catch — improving one usually weakens another. This is known as the <em>blockchain trilemma</em>.</p>
<h3>Layer 1 — the base chain</h3>
<p><strong>Layer 1 (L1)</strong> is the main blockchain itself. Ethereum processes ~15 transactions per second. Visa handles ~24,000 per second. That gap is why blockchains feel slow and expensive during peak demand.</p>
<h3>Layer 2 — built on top</h3>
<p><strong>Layer 2 (L2)</strong> networks process transactions off the main chain and post a summary back to L1 for security. They inherit Ethereum's security but run at a fraction of the cost.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Optimistic Rollups</div><div class="term-def">Assume transactions are valid by default. Only verify if challenged. Examples: Optimism, Arbitrum.</div></div>
  <div class="term-item"><div class="term-name">ZK Rollups</div><div class="term-def">Use cryptographic proofs to instantly verify transaction batches. Faster finality. Examples: zkSync, StarkNet.</div></div>
  <div class="term-item"><div class="term-name">Gas Fees</div><div class="term-def">The cost to execute a transaction on a blockchain. Measured in gwei on Ethereum.</div></div>
  <div class="term-item"><div class="term-name">Finality</div><div class="term-def">The point at which a transaction is considered permanent and irreversible.</div></div>
</div>
<div class="callout"><div class="callout-label">Popular L2s today</div><p>Arbitrum, Optimism, Base, zkSync Era, Polygon zkEVM, and StarkNet are the leading Ethereum L2s, collectively handling billions in daily transactions.</p></div>
`,
                        xp: 30, quiz: 3
                    }
                ]
            },
            {
                id: 1, emoji: '💰', title: 'Crypto & Wallets',
                desc: 'Understand cryptocurrencies, how wallets work, and how to stay safe.',
                lessons: [
                    {
                        id: '1-0', title: 'What is Cryptocurrency?',
                        tag: 'Basics',
                        desc: 'Digital money that nobody controls — how it came to exist and what makes it different.',
                        content: `
<h3>Money, reimagined</h3>
<p><strong>Cryptocurrency</strong> is digital money secured by cryptography and running on a blockchain. Unlike traditional money, no central bank or government creates or controls it. Rules are enforced by code, not institutions.</p>
<p>Bitcoin, created in 2009 by the pseudonymous <em>Satoshi Nakamoto</em>, was the first. Its purpose: let two people transact directly without a bank in the middle.</p>
<h3>Types of crypto assets</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">Coins</div><div class="term-def">Native assets of a blockchain. BTC lives on Bitcoin. ETH lives on Ethereum. Used to pay transaction fees.</div></div>
  <div class="term-item"><div class="term-name">Tokens</div><div class="term-def">Created on top of existing blockchains (e.g. ERC-20 tokens on Ethereum). UNI, LINK, USDC are tokens.</div></div>
  <div class="term-item"><div class="term-name">Stablecoins</div><div class="term-def">Pegged to a real-world asset (usually USD). USDC, USDT, DAI. Designed to hold a steady value.</div></div>
  <div class="term-item"><div class="term-name">Altcoins</div><div class="term-def">Any cryptocurrency that isn't Bitcoin. Ethereum, Solana, BNB, and thousands more.</div></div>
</div>
<div class="callout tip"><div class="callout-label">💡 Bitcoin vs Ethereum</div><p>Bitcoin is digital gold — a store of value with a fixed supply of 21 million coins. Ethereum is a programmable platform — a world computer that runs decentralised applications.</p></div>
`,
                        xp: 20, quiz: 4
                    },
                    {
                        id: '1-1', title: 'How Crypto Wallets Work',
                        tag: 'Wallets',
                        desc: 'Your wallet doesn\'t store coins. Here\'s what it actually does.',
                        content: `
<h3>A wallet holds keys, not coins</h3>
<p>Your crypto doesn't live in your wallet — it lives on the blockchain. Your wallet stores the <strong>private key</strong> that proves you own a certain address and lets you authorise transactions.</p>
<p>Think of your <em>wallet address</em> as your bank account number — public and shareable. Your <em>private key</em> is the PIN — secret and never to be shared.</p>
<div class="code-block"><span class="comment">// Example Ethereum address (public — safe to share)</span>
<span class="str">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</span>

<span class="comment">// Private key (NEVER share this — controls all funds)</span>
<span class="str">a8098c1a-f86e-11da-bd1a-00112444be1e...</span></div>
<h3>Wallet types</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">Hot Wallet</div><div class="term-def">Connected to the internet. Convenient for daily use. MetaMask, Phantom, Trust Wallet. More exposed to hacks.</div></div>
  <div class="term-item"><div class="term-name">Cold Wallet</div><div class="term-def">Offline hardware device. Ledger, Trezor. Most secure option for large holdings.</div></div>
  <div class="term-item"><div class="term-name">Custodial</div><div class="term-def">A third party (like Coinbase) holds your keys. Convenient but you don't truly own your crypto.</div></div>
  <div class="term-item"><div class="term-name">Non-Custodial</div><div class="term-def">You hold your own keys. True ownership. Your seed phrase is your backup.</div></div>
</div>
<h3>Seed phrases — your master key</h3>
<p>When you create a non-custodial wallet, you get a <strong>seed phrase</strong> — 12 or 24 random words. This is the master key to everything. Write it on paper, store it offline, never photograph it or type it online.</p>
<div class="callout danger"><div class="callout-label">🚨 Critical security rule</div><p>No legitimate app, exchange, or support team will EVER ask for your seed phrase. Anyone who does is trying to steal your funds.</p></div>
`,
                        xp: 30, quiz: 5
                    },
                    {
                        id: '1-2', title: 'How to Read a Transaction',
                        tag: 'On-Chain',
                        desc: 'Every blockchain transaction is public. Learn to decode what you\'re seeing.',
                        content: `
<h3>Transactions are public records</h3>
<p>Every transaction on a public blockchain is visible to anyone, forever. Block explorers like <em>Etherscan</em> (Ethereum) or <em>Solscan</em> (Solana) let you search any wallet address or transaction hash.</p>
<div class="code-block"><span class="comment">// What a transaction contains:</span>
From:     <span class="str">0xAlice...742a</span>
To:       <span class="str">0xBob...9f31</span>
Value:    <span class="fn">1.5 ETH</span>
Gas Fee:  <span class="fn">0.002 ETH</span>  <span class="comment">// paid to validators</span>
Status:   <span class="fn">✓ Success</span>
Block:    <span class="fn">#19,482,210</span>
Hash:     <span class="str">0x8f3c2b...</span></div>
<h3>Gas fees explained</h3>
<p><strong>Gas</strong> is the unit that measures computational effort on Ethereum. Every transaction requires gas. The fee you pay = gas used × gas price (in gwei). Fees go to validators, not to Ethereum the organisation.</p>
<div class="callout tip"><div class="callout-label">💡 Saving on gas</div><p>Gas is cheapest on weekends and late nights (UTC). Use L2 networks like Arbitrum or Base for 10–100x cheaper transactions with the same security.</p></div>
`,
                        xp: 25, quiz: 6
                    },
                    {
                        id: '1-3', title: 'Keeping Your Crypto Safe',
                        tag: 'Security',
                        desc: 'The most common ways people lose their crypto — and exactly how to avoid them.',
                        content: `
<h3>The threat landscape</h3>
<p>In Web3, you are your own bank. That means the security responsibilities that banks handle for you — fraud protection, customer service, chargebacks — fall entirely on you. There's no "forgot password" for a private key.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Phishing</div><div class="term-def">Fake websites or messages designed to trick you into entering your seed phrase or private key.</div></div>
  <div class="term-item"><div class="term-name">Rug Pull</div><div class="term-def">Developers launch a project, attract investment, then drain the funds and disappear.</div></div>
  <div class="term-item"><div class="term-name">Social Engineering</div><div class="term-def">Manipulating you psychologically — "customer support" DMs, fake giveaways, urgency tactics.</div></div>
  <div class="term-item"><div class="term-name">Malicious dApps</div><div class="term-def">Signing a malicious transaction that grants unlimited access to your wallet's assets.</div></div>
</div>
<h3>Your security checklist</h3>
<div class="callout"><div class="callout-label">🛡 Essential habits</div><p>1. Store seed phrase offline on paper or steel backup, never digitally. 2. Bookmark real sites — never click links. 3. Use a hardware wallet for large holdings. 4. Always verify contract addresses. 5. Revoke unused token approvals at revoke.cash.</p></div>
<div class="callout danger"><div class="callout-label">🚨 Red flags</div><p>Unsolicited DMs. Guaranteed returns. "Limited time" pressure. Requests for your seed phrase. Sending crypto "to verify" your wallet. These are always scams.</p></div>
`,
                        xp: 30, quiz: 7
                    }
                ]
            },
            {
                id: 2, emoji: '🏦', title: 'DeFi Deep Dive',
                desc: 'Decentralised finance — lending, trading, and earning without banks.',
                lessons: [
                    {
                        id: '2-0', title: 'What is DeFi?', tag: 'Overview',
                        desc: 'Financial services that run on code, not companies.',
                        content: `
<h3>Finance without gatekeepers</h3>
<p><strong>Decentralised Finance (DeFi)</strong> recreates traditional financial services — lending, borrowing, trading, earning yield — using smart contracts on blockchains. Anyone with a wallet and internet access can participate. No credit check. No bank account. No business hours.</p>
<p>In 2020–2021, DeFi exploded from under $1B to over $100B in total value locked (TVL). As of 2024, major protocols like Aave, Uniswap, and Compound collectively manage tens of billions.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">DEX</div><div class="term-def">Decentralised Exchange. Trade tokens directly from your wallet. Uniswap, Curve, dYdX.</div></div>
  <div class="term-item"><div class="term-name">Lending Protocol</div><div class="term-def">Deposit crypto to earn interest, or borrow against collateral. Aave, Compound, MakerDAO.</div></div>
  <div class="term-item"><div class="term-name">TVL</div><div class="term-def">Total Value Locked — the dollar amount of assets currently deposited in a DeFi protocol.</div></div>
  <div class="term-item"><div class="term-name">Yield Farming</div><div class="term-def">Moving capital between protocols to maximise returns. High reward but complex and risky.</div></div>
</div>
`,
                        xp: 25, quiz: 8
                    },
                    {
                        id: '2-1', title: 'Automated Market Makers', tag: 'DEX',
                        desc: 'How Uniswap trades tokens without an order book.',
                        content: `
<h3>Traditional trading vs AMM</h3>
<p>Stock exchanges match buyers with sellers using an order book. DEXs use a different model: the <strong>Automated Market Maker (AMM)</strong>. Instead of orders, liquidity is pooled in smart contracts. A mathematical formula sets the price.</p>
<h3>The constant product formula</h3>
<div class="code-block"><span class="comment">// Uniswap V2 pricing formula</span>
x × y = k

<span class="comment">// x = amount of Token A in pool</span>
<span class="comment">// y = amount of Token B in pool</span>
<span class="comment">// k = constant (never changes)</span>

<span class="comment">// If you buy Token A, x decreases → price of A rises</span>
<span class="comment">// Large trades cause more "slippage"</span></div>
<h3>Liquidity providers (LPs)</h3>
<p>Anyone can supply equal values of two tokens to a pool and become a <strong>Liquidity Provider</strong>. LPs earn a share of every swap fee (typically 0.3%). In return they accept <em>impermanent loss</em> — the risk that holding separately would have been more profitable than providing liquidity.</p>
<div class="callout warn"><div class="callout-label">⚠️ Impermanent loss</div><p>If the price ratio between your two deposited tokens changes significantly, you may end up with less value than if you had simply held them. Always calculate IL before providing liquidity.</p></div>
`,
                        xp: 30, quiz: 9
                    },
                    {
                        id: '2-2', title: 'Lending & Borrowing', tag: 'Lending',
                        desc: 'Earn yield on idle crypto and borrow without a credit check.',
                        content: `
<h3>Over-collateralised lending</h3>
<p>DeFi lending works on <strong>over-collateralisation</strong>. To borrow $100 in USDC, you might need to deposit $150 in ETH as collateral. Why? There's no identity verification or credit score — the smart contract needs a buffer to liquidate if your collateral value drops.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Collateral Factor</div><div class="term-def">The max percentage of your collateral value you can borrow. ETH might be 80% on Aave.</div></div>
  <div class="term-item"><div class="term-name">Liquidation</div><div class="term-def">If collateral value drops below a threshold, anyone can repay your loan and claim your collateral at a discount.</div></div>
  <div class="term-item"><div class="term-name">Health Factor</div><div class="term-def">A number above 1.0 means your position is safe. Below 1.0 = liquidatable.</div></div>
  <div class="term-item"><div class="term-name">Flash Loans</div><div class="term-def">Uncollateralised loans that must be borrowed and repaid in a single transaction block.</div></div>
</div>
<div class="callout tip"><div class="callout-label">💡 Flash loans</div><p>Flash loans are one of DeFi's most innovative primitives. They enable arbitrage, collateral swaps, and self-liquidations — but if the loan isn't repaid in the same transaction, the whole thing reverts like it never happened.</p></div>
`,
                        xp: 30, quiz: 10
                    },
                    {
                        id: '2-3', title: 'Stablecoins & Bridges', tag: 'Infrastructure',
                        desc: 'Price-stable assets and how value moves between chains.',
                        content: `
<h3>Why stablecoins exist</h3>
<p>Crypto volatility makes it impractical for everyday payments or lending. <strong>Stablecoins</strong> solve this by pegging to stable assets — usually the US dollar. They're the backbone of DeFi, used as the "safe" side of trading pairs and lending pools.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Fiat-backed</div><div class="term-def">Backed 1:1 by dollars in a bank. USDC (Circle), USDT (Tether). Centralised but reliable.</div></div>
  <div class="term-item"><div class="term-name">Crypto-backed</div><div class="term-def">Backed by over-collateralised crypto. DAI by MakerDAO — governed by token holders.</div></div>
  <div class="term-item"><div class="term-name">Algorithmic</div><div class="term-def">Use algorithms to maintain peg. High risk — Terra/LUNA collapsed in 2022 losing $40B+.</div></div>
  <div class="term-item"><div class="term-name">Bridge</div><div class="term-def">Protocol that moves assets between blockchains. Lock on Chain A, mint wrapped version on Chain B.</div></div>
</div>
<div class="callout danger"><div class="callout-label">🚨 Bridge risks</div><p>Bridges hold billions in locked assets and are prime hack targets. Over $2.5 billion was stolen from bridges in 2022 alone. Use audited, established bridges and avoid keeping assets on bridges longer than necessary.</p></div>
`,
                        xp: 25, quiz: 11
                    }
                ]
            },
            {
                id: 3, emoji: '🖼', title: 'NFTs Explained',
                desc: 'What non-fungible tokens actually are, how they work, and what they\'re for.',
                lessons: [
                    {
                        id: '3-0', title: 'What Makes a Token Non-Fungible?', tag: 'Basics',
                        desc: 'Fungibility is a property of money. NFTs deliberately break it.',
                        content: `
<h3>Fungibility explained</h3>
<p>A <strong>fungible</strong> asset is interchangeable. One Bitcoin equals any other Bitcoin. A $20 bill equals any other $20 bill. <strong>Non-fungible</strong> means each unit is unique and cannot be swapped 1:1.</p>
<p>An NFT is a token on a blockchain with a unique identifier. The contract records: who owns this specific token, its metadata (name, image link, attributes), and the full ownership history.</p>
<div class="code-block"><span class="comment">// ERC-721 NFT token standard (simplified)</span>
<span class="kw">mapping</span>(uint256 tokenId → address owner)
<span class="kw">mapping</span>(uint256 tokenId → string metadataURI)

tokenId 0001 → <span class="str">0xAlice...</span>  <span class="comment">// Alice owns Bored Ape #1234</span>
tokenId 0002 → <span class="str">0xBob...</span>    <span class="comment">// Bob owns a different Ape</span></div>
<h3>What NFTs can represent</h3>
<p>NFTs can represent anything unique and ownable: digital art, music, game items, event tickets, real estate deeds, domain names, sports moments, and more. The token is the proof of ownership; the item itself is whatever the creator decides.</p>
<div class="callout warn"><div class="callout-label">⚠️ The image isn't stored on-chain</div><p>Most NFT images are stored on IPFS or external servers, not the blockchain itself. If the server shuts down, the image disappears — though the ownership record remains. "On-chain" NFTs (where the image itself is stored as code on the blockchain) are considered more permanent.</p></div>
`,
                        xp: 20, quiz: 12
                    },
                    {
                        id: '3-1', title: 'NFT Standards & Marketplaces', tag: 'Technical',
                        desc: 'The token standards that make NFTs work and where they trade.',
                        content: `
<h3>Token standards</h3>
<p>Ethereum's NFT ecosystem is built on two key standards:</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">ERC-721</div><div class="term-def">Each token is completely unique. One token per NFT. The original NFT standard. Used by most PFP collections.</div></div>
  <div class="term-item"><div class="term-name">ERC-1155</div><div class="term-def">Multi-token standard. One contract can hold fungible AND non-fungible tokens. Efficient for gaming (weapons, potions, skins).</div></div>
  <div class="term-item"><div class="term-name">Royalties</div><div class="term-def">Smart contracts can encode automatic royalty payments to creators on every secondary sale. Typically 5–10%.</div></div>
  <div class="term-item"><div class="term-name">Floor Price</div><div class="term-def">The cheapest available NFT in a collection. A key metric for collection health.</div></div>
</div>
<h3>Major marketplaces</h3>
<p><em>OpenSea</em> was the dominant NFT marketplace for years. <em>Blur</em> disrupted it in 2023 with a professional trading focus. <em>Magic Eden</em> leads on Solana. <em>Foundation</em> and <em>SuperRare</em> cater to curated fine digital art.</p>
`,
                        xp: 25, quiz: 13
                    },
                    {
                        id: '3-2', title: 'Real-World NFT Use Cases', tag: 'Applications',
                        desc: 'Beyond profile pictures — where NFTs are actually solving real problems.',
                        content: `
<h3>Gaming & virtual worlds</h3>
<p>NFT-based games like <em>Axie Infinity</em> and <em>Gods Unchained</em> let players truly own in-game assets. A sword earned in a game can be sold on an open market — something impossible in traditional games where items are controlled by the developer.</p>
<h3>Event tickets & access</h3>
<p>NFT tickets eliminate scalping by encoding rules into the token (e.g. max resale price, original buyer verification). They also become permanent collectibles. Artists like Coachella have used NFT passes for lifetime festival access.</p>
<h3>Creator monetisation</h3>
<p>Musicians, artists, and writers mint NFTs directly to their fans — cutting out Spotify, labels, and galleries. Royalties are automatic and permanent on every resale.</p>
<h3>Identity & credentials</h3>
<p><strong>Soulbound tokens (SBTs)</strong> are non-transferable NFTs proposed by Vitalik Buterin for representing credentials, diplomas, memberships, and reputation on-chain — a form of decentralised identity.</p>
<div class="callout tip"><div class="callout-label">💡 NFTs ≠ speculation</div><p>The 2021–2022 NFT boom was largely speculative. The long-term value of NFTs lies in utility and provable ownership, not in paying $200K for a JPEG because someone else might pay more.</p></div>
`,
                        xp: 20, quiz: 14
                    }
                ]
            },
            {
                id: 4, emoji: '📜', title: 'Smart Contracts',
                desc: 'Self-executing code that runs on the blockchain — the engine of Web3.',
                lessons: [
                    {
                        id: '4-0', title: 'What is a Smart Contract?', tag: 'Basics',
                        desc: 'Code that runs itself when conditions are met — no middlemen required.',
                        content: `
<h3>Code as agreement</h3>
<p>A <strong>smart contract</strong> is a program stored on a blockchain that automatically executes when predetermined conditions are met. No lawyer, no escrow service, no bank needed — the code is the contract.</p>
<p>Nick Szabo described the concept in 1994 — before blockchains existed. Ethereum made it practical in 2015.</p>
<div class="callout tip"><div class="callout-label">💡 Vending machine analogy</div><p>A vending machine is a simple smart contract. Insert money + select item → machine delivers item automatically. No human cashier. The logic is encoded in the machine itself. Smart contracts work the same way, but for financial and data operations on a blockchain.</p></div>
<h3>Properties of smart contracts</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">Deterministic</div><div class="term-def">Same inputs always produce same outputs. Every node running it gets identical results.</div></div>
  <div class="term-item"><div class="term-name">Immutable</div><div class="term-def">Once deployed, the code cannot be changed (unless an upgrade mechanism was built in).</div></div>
  <div class="term-item"><div class="term-name">Permissionless</div><div class="term-def">Anyone can call a smart contract. No sign-up or approval needed.</div></div>
  <div class="term-item"><div class="term-name">Transparent</div><div class="term-def">Source code is typically public and verifiable on block explorers like Etherscan.</div></div>
</div>
`,
                        xp: 20, quiz: 15
                    },
                    {
                        id: '4-1', title: 'Introduction to Solidity', tag: 'Code',
                        desc: 'The programming language of Ethereum smart contracts.',
                        content: `
<h3>Solidity basics</h3>
<p><strong>Solidity</strong> is Ethereum's primary smart contract language. It's statically typed and designed specifically for writing contracts that run on the EVM (Ethereum Virtual Machine).</p>
<div class="code-block"><span class="comment">// SPDX-License-Identifier: MIT</span>
<span class="kw">pragma solidity</span> ^0.8.0;

<span class="kw">contract</span> <span class="fn">SimpleStorage</span> {
    uint256 <span class="kw">private</span> storedNumber;

    <span class="kw">function</span> <span class="fn">store</span>(uint256 _number) <span class="kw">public</span> {
        storedNumber = _number;
    }

    <span class="kw">function</span> <span class="fn">retrieve</span>() <span class="kw">public view returns</span> (uint256) {
        <span class="kw">return</span> storedNumber;
    }
}</div>
<h3>Key Solidity concepts</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">State Variables</div><div class="term-def">Permanently stored in blockchain storage. Reading is free; writing costs gas.</div></div>
  <div class="term-item"><div class="term-name">Functions</div><div class="term-def">view = read-only (free). pure = no state access. Payable = can receive ETH.</div></div>
  <div class="term-item"><div class="term-name">Events</div><div class="term-def">Logged to the blockchain and cheaply readable by frontends. Used to signal state changes.</div></div>
  <div class="term-item"><div class="term-name">Modifiers</div><div class="term-def">Reusable code conditions attached to functions. e.g. onlyOwner checks caller is the deployer.</div></div>
</div>
<div class="callout"><div class="callout-label">Learning resources</div><p>CryptoZombies.io is the best free interactive Solidity tutorial. Hardhat and Foundry are the go-to development frameworks for testing and deploying contracts.</p></div>
`,
                        xp: 35, quiz: 16
                    },
                    {
                        id: '4-2', title: 'dApps & the Web3 Stack', tag: 'Architecture',
                        desc: 'How smart contracts connect to user interfaces.',
                        content: `
<h3>What is a dApp?</h3>
<p>A <strong>dApp (decentralised application)</strong> combines a normal web frontend with smart contracts as its backend. The key difference from traditional apps: the business logic and data live on the blockchain, not on a company's server.</p>
<div class="code-block"><span class="comment">// Web2 vs Web3 architecture</span>

<span class="comment">// Web2:</span>
Browser → HTTP → Company Server → Database

<span class="comment">// Web3 dApp:</span>
Browser → Web3.js/ethers.js → Blockchain RPC → Smart Contract</div>
<h3>The Web3 stack</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">ethers.js / web3.js</div><div class="term-def">JavaScript libraries that let frontends talk to Ethereum nodes and smart contracts.</div></div>
  <div class="term-item"><div class="term-name">RPC Node</div><div class="term-def">Gateway to the blockchain. Infura, Alchemy, QuickNode provide hosted RPC endpoints.</div></div>
  <div class="term-item"><div class="term-name">IPFS</div><div class="term-def">InterPlanetary File System — decentralised file storage for NFT metadata, images, app frontends.</div></div>
  <div class="term-item"><div class="term-name">TheGraph</div><div class="term-def">Indexing protocol — efficiently queries blockchain data for frontends (like a blockchain search engine).</div></div>
</div>
`,
                        xp: 25, quiz: 17
                    },
                    {
                        id: '4-3', title: 'Common Contract Vulnerabilities', tag: 'Security',
                        desc: 'The bugs that have lost billions — and how developers prevent them.',
                        content: `
<h3>Smart contracts are immutable — bugs are permanent</h3>
<p>Once a contract is deployed, its code cannot be changed (unless upgradeable patterns were used). This makes bugs catastrophically expensive. The <em>DAO hack</em> of 2016 drained $60M from Ethereum. <em>Ronin bridge hack</em> lost $625M in 2022. All from code errors.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Reentrancy</div><div class="term-def">A contract calls external code that calls back before the first call finishes. The DAO hack. Fix: checks-effects-interactions pattern.</div></div>
  <div class="term-item"><div class="term-name">Integer Overflow</div><div class="term-def">Numbers wrap around when they exceed max value. Fixed in Solidity 0.8.0 with built-in overflow checks.</div></div>
  <div class="term-item"><div class="term-name">Access Control</div><div class="term-def">Missing modifiers let unauthorized users call sensitive functions. Always use onlyOwner or role-based access.</div></div>
  <div class="term-item"><div class="term-name">Flash Loan Attack</div><div class="term-def">Borrow huge sums in one tx to manipulate prices, drain pools, then repay — all within one block.</div></div>
</div>
<div class="callout tip"><div class="callout-label">💡 How to stay safe as a developer</div><p>Get audits from firms like Trail of Bits, OpenZeppelin, or Certora. Use OpenZeppelin's audited contract libraries. Test with Foundry. Use formal verification for critical logic. Never rush a deployment.</p></div>
`,
                        xp: 30, quiz: 18
                    }
                ]
            },
            {
                id: 5, emoji: '🛡', title: 'Web3 Security',
                desc: 'How to protect yourself and understand the threats unique to crypto.',
                lessons: [
                    {
                        id: '5-0', title: 'Scam Taxonomy', tag: 'Threats',
                        desc: 'Every major scam vector in Web3, explained clearly.',
                        content: `
<h3>The threat landscape</h3>
<p>Web3 lost over $3.8 billion to hacks and scams in 2022 alone. Understanding threat vectors is the first step to staying safe. Unlike banks, there are no chargebacks or fraud protection in crypto.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Phishing</div><div class="term-def">Fake MetaMask popups, fake Etherscan pages, Discord DMs with "claim your NFT" links. Always check URLs.</div></div>
  <div class="term-item"><div class="term-name">Rug Pull</div><div class="term-def">Devs inflate token price then dump. "Soft rug" = slowly abandons project. "Hard rug" = drains liquidity instantly.</div></div>
  <div class="term-item"><div class="term-name">Honeypot</div><div class="term-def">A token you can buy but not sell. The contract blocks sells for everyone except the deployer.</div></div>
  <div class="term-item"><div class="term-name">Approval Exploit</div><div class="term-def">You sign a transaction that grants unlimited token access to a malicious contract. Use revoke.cash regularly.</div></div>
  <div class="term-item"><div class="term-name">Pig Butchering</div><div class="term-def">Long-term social engineering — build fake friendship/romance, then introduce "investment opportunity."</div></div>
  <div class="term-item"><div class="term-name">Clipboard Hijacking</div><div class="term-def">Malware silently replaces copied wallet addresses with the attacker's address. Always double-check.</div></div>
</div>
<div class="callout danger"><div class="callout-label">🚨 The $0 rule</div><p>If something promises free money, guaranteed returns, or requires you to "verify your wallet" — it is a scam. 100% of the time.</p></div>
`,
                        xp: 25, quiz: 19
                    },
                    {
                        id: '5-1', title: 'OPSEC for Crypto Users', tag: 'Best Practices',
                        desc: 'The operational security habits that protect serious crypto holders.',
                        content: `
<h3>Wallet segmentation</h3>
<p>Never keep all your assets in one wallet. Treat wallets like bank accounts with different purposes. This limits damage if one wallet is compromised.</p>
<div class="term-list">
  <div class="term-item"><div class="term-name">Hot Wallet</div><div class="term-def">Small amounts for daily DeFi. Treat it as spending cash — assume it could be hacked.</div></div>
  <div class="term-item"><div class="term-name">Cold Storage</div><div class="term-def">Hardware wallet (Ledger/Trezor) for main holdings. Never connects to the internet to sign transactions.</div></div>
  <div class="term-item"><div class="term-name">Burner Wallet</div><div class="term-def">Temporary wallet for interacting with new/untrusted protocols. Fund, use, abandon.</div></div>
  <div class="term-item"><div class="term-name">Multisig</div><div class="term-def">Require M-of-N key signatures to authorise a transaction. Gnosis Safe for DAOs and treasuries.</div></div>
</div>
<h3>Seed phrase protection</h3>
<p>Your seed phrase is the master key. Best practices: write it on paper (or steel backup like Cryptosteel), store in a fireproof location, never photograph it, never type it into any website, consider splitting across two locations.</p>
<div class="callout warn"><div class="callout-label">⚠️ The "1-of-1" failure</div><p>If your seed phrase is stored in one place and that place is destroyed (fire, flood, theft) — your crypto is gone forever. Multiple physical backups in different locations mitigate this.</p></div>
`,
                        xp: 25, quiz: 20
                    },
                    {
                        id: '5-2', title: 'How to Evaluate a Project', tag: 'Due Diligence',
                        desc: 'Before you invest — a framework for spotting red flags and green lights.',
                        content: `
<h3>Do your own research (DYOR)</h3>
<p>"DYOR" is one of crypto's most repeated phrases — but rarely is a methodology given. Here's a practical framework for evaluating any Web3 project before committing funds.</p>
<h3>Green flags</h3>
<div class="callout tip"><div class="callout-label">✅ What to look for</div><p>Doxxed or reputable team. Multiple third-party audits from known firms. Active GitHub with real commits. Clear tokenomics with locked/vested team tokens. Long-established community. Gradual, organic growth.</p></div>
<h3>Red flags</h3>
<div class="callout danger"><div class="callout-label">🚨 Run if you see these</div><p>Anonymous team with no track record. Promises of guaranteed APY (especially 1000%+). No audit or self-audited only. Team tokens unlocked from day 1. Pressure to buy quickly. Copied whitepaper. Discord with auto-ban on questions.</p></div>
<h3>Tools for research</h3>
<div class="term-list">
  <div class="term-item"><div class="term-name">Etherscan</div><div class="term-def">View contract source code, top holders, token transfers, and contract interactions.</div></div>
  <div class="term-item"><div class="term-name">DeFiLlama</div><div class="term-def">Track TVL, chain dominance, and protocol health metrics across all of DeFi.</div></div>
  <div class="term-item"><div class="term-name">Token Sniffer</div><div class="term-def">Automated honeypot and rug pull detection for new tokens.</div></div>
  <div class="term-item"><div class="term-name">Nansen / Arkham</div><div class="term-def">On-chain analytics — track smart money wallet movements and entity labelling.</div></div>
</div>
`,
                        xp: 30, quiz: 21
                    }
                ]
            }
        ];

        // ─── QUIZZES ───────────────────────────────────────────────────
        const QUIZZES = [
            // 0 - Blockchain Basics
            {
                title: 'Blockchain Basics Quiz', questions: [
                    { q: 'What makes a blockchain different from a regular database?', opts: ['It is faster', 'No single entity controls or owns it', 'It only stores cryptocurrency', 'It requires a subscription'], ans: 1, exp: 'A blockchain is decentralised — copies are held across thousands of nodes with no single owner. This is its defining property.' },
                    { q: 'What is a "hash" in the context of blockchain?', opts: ['A type of cryptocurrency', 'A unique digital fingerprint of data', 'A fee paid to miners', 'A type of wallet'], ans: 1, exp: 'A hash is a fixed-length output generated from input data. Change the input even slightly and the hash changes completely — making it ideal for tamper detection.' },
                    { q: 'What happens if someone tries to alter an old block in the blockchain?', opts: ['Nothing — it updates silently', 'The network rewards them with tokens', 'All subsequent blocks become invalid, and the network rejects it', 'The block is copied and stored separately'], ans: 2, exp: 'Each block contains the previous block\'s hash. Changing one block breaks the chain from that point forward — the network immediately detects and rejects it.' },
                ]
            },
            // 1 - Consensus
            {
                title: 'Consensus Mechanisms Quiz', questions: [
                    { q: 'What is "Proof of Work" designed to prevent?', opts: ['Double-spending and invalid transactions', 'Excessive energy use', 'Token price volatility', 'Smart contract bugs'], ans: 0, exp: 'PoW requires miners to expend real computational energy, making it prohibitively expensive to attack the network or add fraudulent transactions.' },
                    { q: 'What does "slashing" mean in Proof of Stake?', opts: ['Cutting transaction fees', 'A validator loses part of their staked funds as punishment for bad behavior', 'Splitting a block reward', 'Reducing block size'], ans: 1, exp: 'Slashing is the economic penalty in PoS — if a validator acts dishonestly (like signing contradictory blocks), they lose a portion of their staked collateral.' },
                ]
            },
            // 2 - Public vs Private
            {
                title: 'Blockchain Types Quiz', questions: [
                    { q: 'Which best describes a "permissionless" blockchain?', opts: ['Anyone can join and transact without approval', 'Only approved companies can use it', 'It charges lower fees', 'It uses Proof of Work only'], ans: 0, exp: 'Permissionless means open participation — no ID, no application, no approval. Bitcoin and Ethereum are permissionless.' },
                    { q: 'What is a consortium blockchain?', opts: ['Controlled by one company', 'Shared between a group of organisations', 'Fully public like Bitcoin', 'A type of DeFi protocol'], ans: 1, exp: 'A consortium blockchain is governed by multiple organisations — more decentralised than private chains but more controlled than public ones. Used in supply chain and finance.' },
                ]
            },
            // 3 - L1 vs L2
            {
                title: 'Layer 1 & Layer 2 Quiz', questions: [
                    { q: 'What problem do Layer 2 networks primarily solve?', opts: ['Making blockchains more private', 'Increasing transaction speed and reducing fees', 'Replacing Layer 1 entirely', 'Adding new token standards'], ans: 1, exp: 'L2s process transactions off-chain and post summaries to L1, achieving much higher throughput at lower cost while inheriting L1 security.' },
                    { q: 'What are "ZK Rollups"?', opts: ['A type of Layer 1 blockchain', 'Rollups that use cryptographic proofs to verify transaction batches', 'Rollups that assume transactions are valid by default', 'A type of stablecoin'], ans: 1, exp: 'ZK (Zero Knowledge) Rollups use mathematical proofs to instantly verify that a batch of transactions is valid — enabling faster finality than optimistic rollups.' },
                ]
            },
            // 4 - Cryptocurrency
            {
                title: 'Cryptocurrency Basics Quiz', questions: [
                    { q: 'What is the difference between a "coin" and a "token"?', opts: ['They are the same thing', 'Coins are native to a blockchain; tokens are built on top of existing chains', 'Tokens are worth more than coins', 'Coins are only used for payments'], ans: 1, exp: 'Coins (ETH, BTC, SOL) are native to their blockchains. Tokens (USDC, UNI, LINK) are smart contracts deployed on existing chains like Ethereum.' },
                    { q: 'What is Bitcoin\'s maximum supply?', opts: ['100 million', 'Unlimited', '21 million', '1 billion'], ans: 2, exp: 'Bitcoin has a hard cap of 21 million coins, encoded in its protocol. This scarcity is a core part of its value proposition as "digital gold."' },
                ]
            },
            // 5 - Wallets
            {
                title: 'Crypto Wallets Quiz', questions: [
                    { q: 'What does a crypto wallet actually store?', opts: ['Your cryptocurrency coins', 'Your private keys', 'Your transaction history only', 'A copy of the blockchain'], ans: 1, exp: 'Your crypto lives on the blockchain. Your wallet stores private keys — the cryptographic proof that gives you the right to spend funds at a given address.' },
                    { q: 'What is a seed phrase used for?', opts: ['To create a new blockchain', 'To recover access to a wallet if you lose your device', 'To verify your identity on exchanges', 'To pay transaction fees'], ans: 1, exp: 'A seed phrase (12 or 24 words) is a human-readable backup of your private key. Anyone with it can restore your wallet — treat it like the master key to your funds.' },
                    { q: 'Which wallet type is most secure for large holdings?', opts: ['Browser extension wallet', 'Mobile hot wallet', 'Hardware (cold) wallet', 'Exchange account'], ans: 2, exp: 'Hardware wallets (Ledger, Trezor) store keys offline. They sign transactions without the private key ever touching an internet-connected device.' },
                ]
            },
            // 6 - Transactions
            {
                title: 'On-Chain Transactions Quiz', questions: [
                    { q: 'What is "gas" in Ethereum?', opts: ['A type of token', 'The unit measuring computational work; the fee you pay validators', 'The speed at which ETH transfers', 'The Ethereum native currency'], ans: 1, exp: 'Gas measures how much computational work a transaction requires. You pay gas fees (in ETH) to incentivise validators who include your transaction in a block.' },
                ]
            },
            // 7 - Crypto Security
            {
                title: 'Crypto Security Quiz', questions: [
                    { q: 'What is a "rug pull"?', opts: ['A network upgrade gone wrong', 'Developers draining liquidity and abandoning a project', 'A type of consensus failure', 'A DeFi liquidation event'], ans: 1, exp: 'A rug pull occurs when project developers dump tokens or drain liquidity pools, leaving investors with worthless assets. Hard rugs happen instantly; soft rugs unfold gradually.' },
                    { q: 'You receive a DM offering to help "verify your wallet." What do you do?', opts: ['Follow their instructions carefully', 'Share only your public address', 'Ignore it — it is a scam', 'Ask them for proof of identity first'], ans: 1, exp: 'No legitimate service will ever DM you first to "verify" your wallet. Any request involving your seed phrase or private key is a scam, 100% of the time.' },
                ]
            },
            // 8 - DeFi
            {
                title: 'DeFi Overview Quiz', questions: [
                    { q: 'What does TVL stand for in DeFi?', opts: ['Total Verified Liquidity', 'Total Value Locked', 'Token Volume Ledger', 'Transaction Validation Limit'], ans: 1, exp: 'TVL (Total Value Locked) is the total dollar value of assets deposited in a DeFi protocol. It\'s a key metric for protocol health and adoption.' },
                    { q: 'What does "trustless" mean in DeFi?', opts: ['You can\'t trust DeFi protocols', 'Smart contract code enforces rules automatically — no need to trust a company', 'Transactions are anonymous', 'Users share no personal data'], ans: 1, exp: 'Trustless means the rules are enforced by code, not by a company or person. You verify the smart contract — you don\'t need to trust who wrote it.' },
                ]
            },
            // 9 - AMM
            {
                title: 'AMM & DEX Quiz', questions: [
                    { q: 'What formula does Uniswap V2 use for pricing?', opts: ['x + y = k', 'x × y = k', 'x / y = k', 'x² + y² = k'], ans: 1, exp: 'x × y = k is the constant product formula. Buying one token reduces its supply in the pool and raises its price, while selling it decreases the price.' },
                    { q: 'What is "impermanent loss"?', opts: ['Losing ETH to gas fees', 'The loss from a token dropping in value', 'The opportunity cost of providing liquidity when token prices diverge', 'A smart contract bug'], ans: 2, exp: 'Impermanent loss occurs when the price ratio of pooled tokens changes from when you deposited. You may end up with less value than if you had simply held the tokens.' },
                ]
            },
            // 10 - Lending
            {
                title: 'DeFi Lending Quiz', questions: [
                    { q: 'Why does DeFi lending require over-collateralisation?', opts: ['To earn higher yields', 'Because there is no credit score system — extra collateral protects lenders if prices drop', 'To reduce gas costs', 'Government regulations require it'], ans: 1, exp: 'Without identity verification or credit scores, DeFi lending needs a buffer. If your collateral\'s value falls below the loan value, the protocol auto-liquidates to protect lenders.' },
                    { q: 'What is a "flash loan"?', opts: ['An extremely fast crypto transfer', 'A loan with zero collateral that must be repaid in the same transaction block', 'A loan with 0% interest', 'A government-backed crypto loan'], ans: 1, exp: 'Flash loans are uncollateralised — but they only work if borrowed and repaid within a single transaction. If not repaid, the entire transaction reverts as if it never happened.' },
                ]
            },
            // 11 - Stablecoins
            {
                title: 'Stablecoins & Bridges Quiz', questions: [
                    { q: 'What makes an "algorithmic stablecoin" different?', opts: ['It\'s backed 1:1 by USD in a bank', 'It uses algorithms to maintain its peg rather than direct collateral', 'It can only be used on one blockchain', 'It\'s issued by a central bank'], ans: 1, exp: 'Algorithmic stablecoins attempt to maintain their peg through supply and demand mechanisms, not direct backing. This proved risky — Terra/LUNA\'s algorithmic stablecoin collapsed in 2022.' },
                ]
            },
            // 12 - NFT basics
            {
                title: 'NFT Fundamentals Quiz', questions: [
                    { q: 'What does "non-fungible" mean?', opts: ['Cannot be traded', 'Each unit is unique — not interchangeable 1:1 with another unit of the same type', 'Has no monetary value', 'Is only used in gaming'], ans: 1, exp: 'Non-fungible means unique and not interchangeable. One Bitcoin can be swapped for another (fungible). One NFT cannot — it has a unique ID and potentially different properties.' },
                    { q: 'Where is most NFT artwork actually stored?', opts: ['Directly on the Ethereum blockchain', 'On IPFS or external servers, referenced by the NFT metadata', 'In the user\'s crypto wallet', 'In a central OpenSea database'], ans: 1, exp: 'Most NFT images are stored off-chain on IPFS or central servers. The blockchain holds the ownership record and a URI pointing to the metadata. "On-chain" NFTs store the image data itself as blockchain data.' },
                ]
            },
            // 13 - NFT Standards
            {
                title: 'NFT Standards Quiz', questions: [
                    { q: 'What is ERC-721?', opts: ['The standard for fungible tokens like USDC', 'The standard for unique, one-of-a-kind NFTs on Ethereum', 'A DeFi lending standard', 'The Ethereum gas fee standard'], ans: 1, exp: 'ERC-721 is the NFT standard where each token has a unique ID and owner. It\'s the foundation for most profile picture collections, art NFTs, and collectibles.' },
                ]
            },
            // 14 - NFT use cases
            {
                title: 'NFT Use Cases Quiz', questions: [
                    { q: 'What is a "Soulbound Token" (SBT)?', opts: ['An NFT that increases in value over time', 'A non-transferable NFT used to represent credentials or identity on-chain', 'A token earned by staking', 'An NFT with 100% on-chain storage'], ans: 1, exp: 'Soulbound tokens are non-transferable — they can\'t be sold or moved. Vitalik Buterin proposed them as a way to represent diplomas, memberships, and reputation on-chain.' },
                ]
            },
            // 15 - Smart contracts
            {
                title: 'Smart Contracts Quiz', questions: [
                    { q: 'What is a smart contract?', opts: ['A legal document stored on a blockchain', 'A self-executing program on a blockchain that runs when conditions are met', 'A type of NFT', 'A crypto exchange'], ans: 1, exp: 'Smart contracts are programs deployed on blockchains. They automatically execute their logic when called — no lawyers, banks, or intermediaries needed to enforce the rules.' },
                    { q: 'Why are smart contract bugs so dangerous?', opts: ['They crash the blockchain', 'Once deployed, contracts are immutable — bugs cannot be patched and can be exploited forever', 'They only affect one user', 'Bugs are automatically fixed by the network'], ans: 1, exp: 'Immutability is a double-edged sword. Once a contract is on-chain, the code cannot be changed. Bugs are permanent vulnerabilities — this is why audits are critical before deployment.' },
                ]
            },
            // 16 - Solidity
            {
                title: 'Solidity Quiz', questions: [
                    { q: 'What is the EVM?', opts: ['Ethereum Value Machine', 'Ethereum Virtual Machine — the runtime environment for smart contracts', 'An Ethereum wallet', 'The Ethereum mining algorithm'], ans: 1, exp: 'The EVM (Ethereum Virtual Machine) is the sandboxed runtime that executes smart contract bytecode. Every Ethereum node runs the EVM, ensuring deterministic execution across the network.' },
                    { q: 'What does the "payable" keyword mean in Solidity?', opts: ['The function costs extra gas', 'The function can receive ETH', 'The function is free to call', 'The function is only callable by the contract owner'], ans: 1, exp: 'Marking a function "payable" allows it to receive Ether when called. Without it, the function will revert if anyone tries to send ETH to it.' },
                ]
            },
            // 17 - dApps
            {
                title: 'dApps & Web3 Stack Quiz', questions: [
                    { q: 'What does ethers.js / web3.js do?', opts: ['Stores NFT images', 'Provides JavaScript libraries to interact with Ethereum from a web browser', 'Mines cryptocurrency', 'Validates smart contracts'], ans: 1, exp: 'ethers.js and web3.js are JavaScript libraries that enable web frontends to read from and write to Ethereum — connecting the user interface to smart contracts.' },
                ]
            },
            // 18 - Vulnerabilities
            {
                title: 'Contract Vulnerabilities Quiz', questions: [
                    { q: 'What is a reentrancy attack?', opts: ['Replaying the same transaction twice', 'External code called by a contract calls back before the first call finishes, draining funds', 'Overflowing an integer variable', 'Sending transactions with zero gas'], ans: 1, exp: 'Reentrancy was how the 2016 DAO hack stole $60M. A malicious contract called back into the victim before its balance was updated. The checks-effects-interactions pattern prevents this.' },
                    { q: 'What is the recommended protection against integer overflow in modern Solidity?', opts: ['Use the SafeMath library manually', 'Use Solidity 0.8.0+ which has built-in overflow checks', 'Avoid using integers entirely', 'Check the result after every operation manually'], ans: 1, exp: 'Since Solidity 0.8.0, arithmetic operations automatically revert on overflow/underflow — no need for the SafeMath library that was essential in earlier versions.' },
                ]
            },
            // 19 - Scam taxonomy
            {
                title: 'Web3 Scam Types Quiz', questions: [
                    { q: 'What is a honeypot token?', opts: ['A token with a sweet name', 'A token you can buy but the contract prevents you from selling', 'A token offering high staking rewards', 'A legitimate high-yield DeFi token'], ans: 1, exp: 'Honeypot tokens lure buyers with apparent price rises, but the contract blocks all sells except from the deployer. You can buy but can never get your money out.' },
                    { q: 'What is "pig butchering"?', opts: ['A type of smart contract bug', 'A slow social engineering scam where trust is built over time before introducing a fake investment', 'A high-frequency trading strategy', 'A type of mining attack'], ans: 1, exp: 'Pig butchering scams build a fake relationship (friendship or romance) over weeks or months, then gradually introduce a fraudulent investment platform. Victims often lose everything.' },
                ]
            },
            // 20 - OPSEC
            {
                title: 'Crypto OPSEC Quiz', questions: [
                    { q: 'What is the purpose of using a "burner wallet"?', opts: ['To earn higher staking rewards', 'To interact with new or untrusted protocols without risking your main wallet', 'To pay lower gas fees', 'To remain anonymous on all chains'], ans: 1, exp: 'A burner wallet is a throwaway — you fund it minimally, interact with an untrusted protocol, and abandon it. If the protocol is malicious, only the burner\'s small balance is at risk.' },
                    { q: 'What is a Multisig wallet?', opts: ['A wallet that supports multiple currencies', 'A wallet requiring multiple private key signatures to authorise a transaction', 'A wallet with multiple backup seed phrases', 'A hardware wallet with two USB ports'], ans: 1, exp: 'Multisig (multi-signature) requires M-of-N keyholders to sign before a transaction executes. Used by DAOs and treasuries for security — no single person can drain funds alone.' },
                ]
            },
            // 21 - Project evaluation
            {
                title: 'Project Due Diligence Quiz', questions: [
                    { q: 'Which is a RED FLAG when evaluating a crypto project?', opts: ['Multiple third-party security audits', 'Team tokens that are locked/vested', 'Promises of guaranteed 1000%+ APY', 'A public, doxxed team with track record'], ans: 2, exp: 'Guaranteed high returns are economically impossible in legitimate investments. This is a classic manipulation tactic used in Ponzi schemes and rug pulls.' },
                    { q: 'What does "doxxed team" mean in crypto?', opts: ['The team is anonymous', 'The team\'s real identities are publicly known and verifiable', 'The team has been hacked', 'The team uses multiple pseudonyms'], ans: 1, exp: 'A doxxed team has publicly revealed their real identities — LinkedIn profiles, previous work history, verifiable credentials. This provides accountability and is generally a positive signal.' },
                ]
            }
        ];

        // ─── GLOSSARY ──────────────────────────────────────────────────
        const GLOSSARY = [
            { term: 'Blockchain', def: 'A distributed, immutable ledger where data is stored in linked blocks across many nodes.', tag: 'Basics' },
            { term: 'Hash', def: 'A unique fixed-length fingerprint generated from data. Change the data → different hash.', tag: 'Cryptography' },
            { term: 'Node', def: 'A computer that holds a full copy of the blockchain and validates transactions.', tag: 'Network' },
            { term: 'Consensus', def: 'The mechanism by which all network nodes agree on the same version of the blockchain.', tag: 'Basics' },
            { term: 'Gas', def: 'Unit measuring computational work on Ethereum. You pay gas fees (in ETH) per transaction.', tag: 'Ethereum' },
            { term: 'Private Key', def: 'A secret cryptographic key that proves ownership and authorises transactions from an address.', tag: 'Wallets' },
            { term: 'Seed Phrase', def: '12 or 24 words that are a human-readable backup of your private key. Master key to your wallet.', tag: 'Wallets' },
            { term: 'Smart Contract', def: 'Self-executing code deployed on a blockchain that runs automatically when conditions are met.', tag: 'Contracts' },
            { term: 'DeFi', def: 'Decentralised Finance — financial services (lending, trading, yield) run by smart contracts.', tag: 'DeFi' },
            { term: 'DEX', def: 'Decentralised Exchange. Trade tokens directly from your wallet with no central operator.', tag: 'DeFi' },
            { term: 'AMM', def: 'Automated Market Maker. Uses liquidity pools and a formula instead of order books to set prices.', tag: 'DeFi' },
            { term: 'Liquidity Pool', def: 'A smart contract holding pairs of tokens that users can swap against. LPs earn fees.', tag: 'DeFi' },
            { term: 'Yield Farming', def: 'Moving capital across DeFi protocols to maximise APY returns.', tag: 'DeFi' },
            { term: 'Stablecoin', def: 'Cryptocurrency pegged to a stable asset (usually USD). USDC, USDT, DAI.', tag: 'Tokens' },
            { term: 'NFT', def: 'Non-Fungible Token. A unique, non-interchangeable token representing ownership of a specific item.', tag: 'NFTs' },
            { term: 'ERC-20', def: 'The standard for fungible tokens on Ethereum. USDC, UNI, LINK are all ERC-20 tokens.', tag: 'Standards' },
            { term: 'ERC-721', def: 'The NFT standard. Each token has a unique ID. One token = one unique item.', tag: 'Standards' },
            { term: 'DAO', def: 'Decentralised Autonomous Organisation. Governed by token holders via on-chain voting.', tag: 'Governance' },
            { term: 'Layer 2', def: 'A scaling solution built on top of a Layer 1 chain. Faster, cheaper, inherits L1 security.', tag: 'Scaling' },
            { term: 'Rollup', def: 'L2 that batches transactions off-chain and submits proofs or summaries to L1.', tag: 'Scaling' },
            { term: 'Bridge', def: 'Protocol that moves assets between different blockchains.', tag: 'Infrastructure' },
            { term: 'IPFS', def: 'InterPlanetary File System. Decentralised file storage using content-addressed hashing.', tag: 'Infrastructure' },
            { term: 'Rug Pull', def: 'Developers drain a project\'s liquidity and disappear, leaving investors with worthless tokens.', tag: 'Security' },
            { term: 'Phishing', def: 'Fake websites, DMs, or popups designed to trick you into revealing your seed phrase or keys.', tag: 'Security' },
            { term: 'Multisig', def: 'Wallet requiring multiple private key signatures before a transaction executes.', tag: 'Security' },
            { term: 'TVL', def: 'Total Value Locked. The dollar value of assets deposited in a DeFi protocol.', tag: 'DeFi' },
            { term: 'Gwei', def: 'A denomination of ETH (1 ETH = 1,000,000,000 gwei). Used to quote gas prices.', tag: 'Ethereum' },
            { term: 'Fork', def: 'A change to blockchain protocol. Soft fork = backward compatible. Hard fork = not compatible.', tag: 'Basics' },
            { term: 'Mempool', def: 'The waiting room for unconfirmed transactions before they\'re included in a block.', tag: 'Network' },
            { term: 'Tokenomics', def: 'The economic model of a token — supply, distribution, vesting schedules, utility.', tag: 'Tokens' },
        ];

        // ═══════════════════════════════════════════════════════════════
        // STATE
        // ═══════════════════════════════════════════════════════════════
        let progress = JSON.parse(localStorage.getItem('cl-progress') || 'null') || {
            completedLessons: [],
            completedQuizzes: [],
            xp: 0
        };

        const XP_PER_LEVEL = 100;

        function saveProgress() { localStorage.setItem('cl-progress', JSON.stringify(progress)); }

        function gainXP(amount) {
            const prevLevel = getLevel();
            progress.xp += amount;
            saveProgress();
            updateXPBar();
            const newLevel = getLevel();
            if (newLevel > prevLevel) {
                pushToast('🎉', `Level up! You reached Level ${newLevel}`, LEVELS[newLevel - 1] || 'Web3 Expert');
            }
        }

        const LEVELS = ['Newcomer', 'Explorer', 'Builder', 'Validator', 'Architect', 'Wizard', 'Legend'];
        function getLevel() { return Math.min(Math.floor(progress.xp / XP_PER_LEVEL) + 1, 7); }
        function getLevelName() { return LEVELS[getLevel() - 1] || 'Legend'; }
        function getXPToNext() { return XP_PER_LEVEL - (progress.xp % XP_PER_LEVEL); }

        function updateXPBar() {
            const pct = (progress.xp % XP_PER_LEVEL) / XP_PER_LEVEL * 100;
            document.getElementById('sb-xp-fill').style.width = pct + '%';
            document.getElementById('sb-xp-val').textContent = progress.xp + ' XP';
            document.getElementById('sb-level').textContent = `⚡ Level ${getLevel()} — ${getLevelName()}`;
            updateNavProgress();
        }

        function updateNavProgress() {
            COURSES.forEach((c, i) => {
                const done = c.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
                const total = c.lessons.length;
                const el = document.getElementById('np-' + i);
                if (el) el.textContent = done + '/' + total;
                const nav = document.getElementById('nc-' + i);
                if (nav && done === total) {
                    const check = nav.querySelector('.nc-check');
                    if (!check) nav.insertAdjacentHTML('beforeend', '<span class="nc-check">✓</span>');
                }
            });
        }

        // ═══════════════════════════════════════════════════════════════
        // VIEWS
        // ═══════════════════════════════════════════════════════════════
        function showView(id, navBtn) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.getElementById('view-' + id).classList.add('active');
            document.querySelectorAll('.nav-course').forEach(b => b.classList.remove('active'));
            if (navBtn) navBtn.classList.add('active');
            document.querySelector('.main').scrollTo(0, 0);
            if (id === 'glossary') renderGlossary();
            if (id === 'home') renderCourseGrid();
        }

        function setBottomNav(id) {
            document.querySelectorAll('.bn-item').forEach(b => b.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        function goHome(navBtn) {
            showView('home', navBtn || document.getElementById('nav-home'));
            document.getElementById('nav-home').classList.add('active');
            renderCourseGrid();
        }

        // ═══════════════════════════════════════════════════════════════
        // COURSE & LESSON
        // ═══════════════════════════════════════════════════════════════
        let currentCourse = null;
        let currentLessonIdx = null;

        function renderCourseGrid() {
            const grid = document.getElementById('course-grid');
            grid.innerHTML = COURSES.map(c => {
                const done = c.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
                const total = c.lessons.length;
                const pctDone = Math.round(done / total * 100);
                const cls = done === total ? 'completed' : done > 0 ? 'partial' : 'zero';
                const label = done === total ? '✓ Complete' : done > 0 ? pctDone + '% done' : 'Not started';
                return `<div class="course-card ${done === total ? 'completed' : ''}" onclick="openCourse(${c.id})">
      <div class="cc-emoji">${c.emoji}</div>
      <div class="cc-title">${c.title}</div>
      <div class="cc-desc">${c.desc}</div>
      <div class="cc-meta">
        <span class="cc-lessons">${total} lessons</span>
        <span class="cc-prog ${cls}">${label}</span>
      </div>
    </div>`;
            }).join('');
        }

        function openCourse(idx, navBtn) {
            currentCourse = COURSES[idx];
            showView('course', navBtn || document.getElementById('nc-' + idx));
            if (!navBtn) {
                document.querySelectorAll('.nav-course').forEach(b => b.classList.remove('active'));
                document.getElementById('nc-' + idx).classList.add('active');
            }
            document.getElementById('course-breadcrumb').innerHTML = `<span>${currentCourse.emoji} ${currentCourse.title}</span>`;

            const container = document.getElementById('course-lessons');
            container.innerHTML = `
    <h2 style="font-family:'Space Grotesk',sans-serif;font-size:1.6rem;font-weight:700;letter-spacing:-.03em;color:var(--txt);margin-bottom:6px;">${currentCourse.emoji} ${currentCourse.title}</h2>
    <p style="font-size:.88rem;color:var(--txt2);margin-bottom:28px;">${currentCourse.desc}</p>
    <div class="sec-label">Lessons</div>
    ${currentCourse.lessons.map((l, i) => {
                const done = progress.completedLessons.includes(l.id);
                return `<div class="course-card" style="margin-bottom:12px;display:flex;align-items:center;gap:16px;" onclick="openLesson(${i})">
        <div style="width:40px;height:40px;border-radius:10px;background:${done ? 'var(--green-dim)' : 'var(--indigo-dim)'};border:1px solid ${done ? 'rgba(0,184,148,.3)' : 'var(--indigo-mid)'};display:flex;align-items:center;justify-content:center;font-family:'Fira Code',monospace;font-size:.85rem;color:${done ? 'var(--green)' : 'var(--indigo2)'};flex-shrink:0;">${done ? '✓' : (i + 1)}</div>
        <div style="flex:1;">
          <div style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.95rem;color:var(--txt);margin-bottom:3px;">${l.title}</div>
          <div style="font-size:.75rem;color:var(--txt2);">${l.desc}</div>
        </div>
        <div style="font-family:'Fira Code',monospace;font-size:.68rem;color:var(--cyan);flex-shrink:0;">+${l.xp} XP →</div>
      </div>`;
            }).join('')}
  `;
        }

        function openLesson(lessonIdx) {
            currentLessonIdx = lessonIdx;
            const lesson = currentCourse.lessons[lessonIdx];
            const total = currentCourse.lessons.length;
            showView('lesson');

            document.getElementById('lesson-back-btn').onclick = () => openCourse(currentCourse.id);
            document.getElementById('lesson-breadcrumb').innerHTML =
                `<span>${currentCourse.emoji} ${currentCourse.title}</span> / <span>${lesson.title}</span>`;

            // progress dots
            const dots = document.getElementById('progress-dots');
            dots.innerHTML = currentCourse.lessons.map((_, i) =>
                `<div class="pdot ${progress.completedLessons.includes(currentCourse.lessons[i].id) ? 'done' : ''} ${i === lessonIdx ? 'current' : ''}"></div>`
            ).join('');

            document.getElementById('lesson-body').innerHTML = `
    <div class="lesson-body">
      <div class="lesson-body-top">
        <div class="lesson-tag">${lesson.tag} · Lesson ${lessonIdx + 1} of ${total}</div>
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-desc">${lesson.desc}</div>
      </div>
      <div class="lesson-content">${lesson.content}</div>
    </div>`;

            // nav
            const nav = document.getElementById('lesson-nav');
            const hasQuiz = lesson.quiz !== undefined && QUIZZES[lesson.quiz];
            const isLast = lessonIdx === total - 1;
            const isDone = progress.completedLessons.includes(lesson.id);
            nav.innerHTML = `
    ${lessonIdx > 0 ? `<button class="btn-lesson btn-secondary" onclick="openLesson(${lessonIdx - 1})">← Previous</button>` : '<div></div>'}
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      ${!isDone ? `<button class="btn-lesson btn-primary" onclick="completeLesson()">Mark complete +${lesson.xp} XP</button>` : '<span style="color:var(--green);font-size:.85rem;font-weight:600;">✓ Completed</span>'}
      ${hasQuiz ? `<button class="btn-lesson btn-quiz" onclick="openQuiz()">Take Quiz 🎯</button>` : ''}
      ${!isLast ? `<button class="btn-lesson btn-secondary" onclick="openLesson(${lessonIdx + 1})">Next →</button>` : ''}
    </div>`;
        }

        function completeLesson() {
            const lesson = currentCourse.lessons[currentLessonIdx];
            if (!progress.completedLessons.includes(lesson.id)) {
                progress.completedLessons.push(lesson.id);
                gainXP(lesson.xp);
                pushToast('✅', 'Lesson complete!', `+${lesson.xp} XP earned`);
                openLesson(currentLessonIdx); // re-render
            }
        }

        // ═══════════════════════════════════════════════════════════════
        // QUIZ
        // ═══════════════════════════════════════════════════════════════
        let quizState = { answers: [], submitted: false };

        function openQuiz() {
            const lesson = currentCourse.lessons[currentLessonIdx];
            const quiz = QUIZZES[lesson.quiz];
            if (!quiz) return;
            quizState = { answers: new Array(quiz.questions.length).fill(null), submitted: false, quizIdx: lesson.quiz };
            showView('quiz');
            document.getElementById('quiz-back-btn').onclick = () => openLesson(currentLessonIdx);
            renderQuiz(quiz);
        }

        function renderQuiz(quiz) {
            const body = document.getElementById('quiz-body');
            body.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-icon">🎯</div>
      <div class="quiz-meta">
        <div class="quiz-title">${quiz.title}</div>
        <div class="quiz-sub">${quiz.questions.length} questions · Pick the best answer</div>
      </div>
    </div>
    ${quiz.questions.map((q, qi) => `
      <div class="question-card" id="qcard-${qi}">
        <div class="q-num">Question ${qi + 1} of ${quiz.questions.length}</div>
        <div class="q-text">${q.q}</div>
        <div class="q-options">
          ${q.opts.map((opt, oi) => `
            <button class="q-opt" id="opt-${qi}-${oi}" onclick="selectAnswer(${qi},${oi})">
              <span class="opt-letter">${String.fromCharCode(65 + oi)}</span>
              ${opt}
            </button>`).join('')}
        </div>
        <div class="q-explanation" id="exp-${qi}">${q.exp}</div>
      </div>`).join('')}
    <div style="display:flex;justify-content:flex-end;margin-top:8px;">
      <button class="btn-lesson btn-quiz" onclick="submitQuiz()">Submit Answers</button>
    </div>`;
        }

        function selectAnswer(qi, oi) {
            if (quizState.submitted) return;
            quizState.answers[qi] = oi;
            const quiz = QUIZZES[quizState.quizIdx];
            quiz.questions[qi].opts.forEach((_, i) => {
                const opt = document.getElementById(`opt-${qi}-${i}`);
                opt.classList.toggle('selected', i === oi);
            });
        }

        function submitQuiz() {
            if (quizState.submitted) return;
            const quiz = QUIZZES[quizState.quizIdx];
            const unanswered = quizState.answers.some(a => a === null);
            if (unanswered) { pushToast('⚠️', 'Answer all questions', 'Please select an answer for each question.'); return; }

            quizState.submitted = true;
            let correct = 0;
            quiz.questions.forEach((q, qi) => {
                const chosen = quizState.answers[qi];
                q.opts.forEach((_, oi) => {
                    const opt = document.getElementById(`opt-${qi}-${oi}`);
                    opt.classList.remove('selected');
                    if (oi === q.ans) opt.classList.add('correct');
                    else if (oi === chosen && chosen !== q.ans) opt.classList.add('wrong');
                });
                const exp = document.getElementById(`exp-${qi}`);
                exp.classList.add('show');
                if (chosen === q.ans) correct++;
            });

            const score = Math.round(correct / quiz.questions.length * 100);
            const xpEarned = Math.round(score / 100 * 50);

            // Show result
            const body = document.getElementById('quiz-body');
            const resultEl = document.createElement('div');
            resultEl.className = 'quiz-result';
            resultEl.innerHTML = `
    <div class="result-score">${score}%</div>
    <div class="result-label">${correct} of ${quiz.questions.length} correct · ${score >= 70 ? '🎉 Great job!' : '📚 Keep studying!'}</div>
    <div class="result-xp">⚡ +${xpEarned} XP earned</div>
    <div class="result-actions">
      <button class="btn-lesson btn-secondary" onclick="openLesson(${currentLessonIdx})">← Back to lesson</button>
      ${currentLessonIdx < currentCourse.lessons.length - 1
                    ? `<button class="btn-lesson btn-primary" onclick="openLesson(${currentLessonIdx + 1})">Next lesson →</button>`
                    : `<button class="btn-lesson btn-primary" onclick="goHome()">All courses →</button>`}
    </div>`;
            body.appendChild(resultEl);
            resultEl.scrollIntoView({ behavior: 'smooth' });

            if (!progress.completedQuizzes.includes(quizState.quizIdx)) {
                progress.completedQuizzes.push(quizState.quizIdx);
                gainXP(xpEarned);
            }
            pushToast('🏆', `Quiz: ${score}%`, `${correct}/${quiz.questions.length} correct · +${xpEarned} XP`);
        }

        // ═══════════════════════════════════════════════════════════════
        // GLOSSARY
        // ═══════════════════════════════════════════════════════════════
        function renderGlossary() {
            document.getElementById('glossary-grid').innerHTML = GLOSSARY.map(g => `
    <div class="gloss-card">
      <div class="gloss-term">${g.term}</div>
      <div class="gloss-def">${g.def}</div>
      <span class="gloss-tag">${g.tag}</span>
    </div>`).join('');
        }

        // ═══════════════════════════════════════════════════════════════
        // TOAST
        // ═══════════════════════════════════════════════════════════════
        function pushToast(icon, title, msg) {
            const stack = document.getElementById('toast-stack');
            const el = document.createElement('div');
            el.className = 'toast';
            el.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-body"><div class="toast-title">${title}</div>${msg ? `<div class="toast-msg">${msg}</div>` : ''}</div>`;
            stack.appendChild(el);
            setTimeout(() => el.remove(), 3800);
        }

        // ═══════════════════════════════════════════════════════════════
        // BOOT
        // ═══════════════════════════════════════════════════════════════
        updateXPBar();
        renderCourseGrid();