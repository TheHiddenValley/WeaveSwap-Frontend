import React from "react";
import styles from "./index.module.css";

import SingleCrossSwapInput from "@/components/inputs/singleCrossPayment/singleCrossSwapInput";
import ConnectWalletPage from "@/components/connectWalletPage";
import { useAddress } from "@thirdweb-dev/react";
import FirstNetworkModal from "@/components/modal/firstNetworkModalPage";
import SecondNetworkModal from "@/components/modal/secondNetworkModal";

import CoinPrice from "@/components/coinPrice/Coinprice";

export default function SwapPage() {
  const address = useAddress();
  if (!address)
    return (
      <div>
        <ConnectWalletPage />
      </div>
    );

  return (
    <div className={styles.SwapContainer}>
      <div style={{ color: "white", fontSize: 32, fontFamily: "Khand", fontWeight: 700, letterSpacing: 0.64, wordWrap: "break-word" }}>
        Put your funds to work by providing for launchpad liquidity
      </div>
      <div style={{ width: "100%", color: "#969696", fontSize: 18, fontFamily: "Khand", fontWeight: 500, letterSpacing: 0.18, wordWrap: "break-word" }}>
        When you add funds to launchpad liquidity pool, you can receive a share of its trading volume and potentially snag extra rewards when there are incentives involved!
      </div>
      <div className={styles.coinDetailsTag}>
        <CoinPrice />
      </div>
      <div className={styles.crossChainSection}>
        <section className={`${styles.crossChain_Header}`}>
          {/* <h4></h4> */}
        </section>
        <div>
          <section>
            <div className={styles.SwapDropDown}>
              <FirstNetworkModal />
              <h5>to</h5>
              <SecondNetworkModal />
            </div>
            <hr />
            <div>
              <SingleCrossSwapInput />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
