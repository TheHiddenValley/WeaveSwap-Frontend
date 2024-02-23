import React from "react";
import DeployImg from "../../assets/png/deloy.png";
import Image from "next/image";
import styles from "./connectWallet.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function ConnectWalletPage() {
  return (
    <div className={styles.ConnectWalletPage}>
      <div>
        <Image src={DeployImg} alt="DeployImg" width={500} height={500} />
      </div>
      <h2>Connect</h2>
      <p>Please connect your wallet to proceed further</p>

      <div className={styles.ConnectWallet}>
        <ConnectWallet />
      </div>
    </div>
  );
}
