import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "./index.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`${styles.Navbar} bg-gray-900 text-white`}>
      <div style={{ justifyContent: "space-between", width: "80%" }} className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        <div className="flex gap-5 justify-between items-center text-lg text-white max-md:flex-wrap">
          <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex gap-2 justify-between self-stretch pr-5 text-2xl whitespace-nowrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d563b673a35489d974fd733505b532523f3135089dceb3e471a3760c8dd7904a?apiKey=2df429e67a0d42c1be761c45de2a844e&"
                className="aspect-[1.14] w-[68px]"
              />
              <div className="grow my-auto">WEAVESWAP</div>
            </div>
          </Link>
          <div className="flex gap-5 justify-between self-stretch pr-5 my-auto font-semibold">
            <div>Swap</div>
            <div>Pool</div>
            <div>Lend</div>
            <div>Social Media</div>
          </div>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ConnectWallet
            theme={"dark"}
            modalTitle={"weaveswap"}
            modalSize={"wide"}
          />
        </div>
      </div>
    </nav>
  );
}
