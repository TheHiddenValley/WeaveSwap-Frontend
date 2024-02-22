import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "./index.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`${styles.Navbar} bg-gray-900 text-white`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-5 justify-between items-center text-lg text-white max-md:flex-wrap">
          <div className="flex gap-2 justify-between self-stretch pr-5 text-2xl whitespace-nowrap">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&"
              className="aspect-[1.14] w-[68px]"
            />
            <div className="grow my-auto">WEAVESWAP</div>
          </div>
          <div className="flex gap-5 justify-between self-stretch pr-5 my-auto font-semibold">
            <div>Swap</div>
            <div>Pool</div>
            <div>Lend</div>
            <div>Social Media</div>
          </div>
          <div className="justify-center self-stretch px-2.5 py-3 my-auto font-medium text-black whitespace-nowrap bg-white rounded-lg leading-[78%]">
            <ConnectWallet
              theme={"dark"}
              modalTitle={"weaveswap"}
              modalSize={"wide"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
