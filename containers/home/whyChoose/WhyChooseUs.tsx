import React from "react";
import Image from "next/image";
import SecurityPng from "../../../assets/png/blockchain.png";
import CloudPng from "../../../assets/png/blockchain cloud.png";
import styles from "./whyChoose.module.css";
export default function WhyChooseUs() {
  return (
<div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex', marginTop: '5em' }}>
<div style={{color: 'white', fontSize: 40, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Get on our token list</div>
<div style={{width: 954, textAlign: 'center', color: '#8E8E8E', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Join us in our mission to revolutionize decentralized finance while building trust and credibility.Projects that wish to have their token show in the default swap list will need to submit their information via our partner portal. Otherwise users can search for any supported token via the contract address.</div>
<div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
<div style={{textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Apply now</div>
<div style={{width: 24, height: 24, position: 'relative'}}>
<div style={{width: 19.50, height: 19.50, left: 2.25, top: 2.25, position: 'absolute', background: 'black'}}></div>
</div>
</div>
</div>
  );
}
