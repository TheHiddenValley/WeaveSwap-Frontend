# Front End for WeaveSwap for DoraHacks BNB Hackathon

https://devpost.com/software/weaveswap-s7e0zc

Inspiration
The cross-chain services provided by traditional cross-chain bridges have low security and high centralization. More secure and decentralized cross-chain services can be achieved through Chainlink CCIP.

What it does
Welcome to WeaveSwap, where blockchain meets simplicity. Seamlessly exchange assets across different chains with confidence and ease. Your One-shop access to decentralized Asset Swapping

How we built it
Smart Contracts: Solidity, Chainlink CCIP, Ethers, Javascript, Typescript, Hardhat, Avalanche, Polygon

Frontend: Next.js, Redux,Tailwind

Backend: Mainly smart contracts are acting as backend transfering funds across the networks

Blockchain Networks: Right now for hackathon purpose we have completed all chains from and to sepolia (only mumbai and binance chain contract has been verified)

Challenges we ran into
Cross-Chain Interoperability Protocol (CCIP): Implementing a robust Cross-Chain Interoperability Protocol posed significant challenges. Ensuring compatibility and efficient communication between disparate blockchain networks required intricate protocol design and careful consideration of various consensus mechanisms and token standards.

Standardization Hurdles: Overcoming the lack of standardized formats for data transmission and transaction execution across multiple blockchains was a persistent challenge. Achieving seamless interaction and asset transfer between distinct protocols required extensive research and implementation efforts.

Protocol Security and Consistency: Maintaining security while ensuring consistent transactional behavior across different chains introduced complexities. Addressing potential vulnerabilities and ensuring the reliability of cross-chain transactions demanded rigorous testing and analysis.

Accomplishments that we're proud of
Cross-Chain Compatibility: WeaveSwap supports the exchange of tokens/assets across various blockchain networks, providing users with flexibility and interoperability.

User-Friendly Interface: An intuitive interface designed to simplify the swapping process for both novice and experienced users.

Security: WeaveSwap prioritizes security, employing industry best practices and smart contract audits to ensure a safe swapping environment.

What we learned
CCIP Dynamics: Navigating the complexities of Cross-Chain Interoperability Protocols provided invaluable insights into the intricacies of blockchain communication and interoperability. Understanding CCIP standards and their impact on decentralized applications deepened our knowledge base.

Standardization Efforts: Overcoming hurdles related to non-standardized formats enhanced our appreciation for the significance of protocol standardization. Exploring interoperability solutions helped identify best practices for seamless data transmission and transaction execution.

Security in Cross-Chain Environments: Addressing security concerns and maintaining transactional consistency across different chains enriched our understanding of secure cross-chain interactions. Implementing measures to mitigate risks in decentralized cross-chain environments became a priority focus area.

What's next for WeaveSwap
Complete the integration of front-end and smart contracts on different networks
Implement multiple cross-chain function, users can achieve multiple cross-chain transactions with "one click"


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
