import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
export default function FooterBody() {
  return (
    <footer
      className={`${styles.footerBg} container rounded-lg shadow bg-gray-900`}
    >
<div style={{width: '100%', height: '100%', paddingTop: 64, paddingBottom: 64, borderTop: '0.80px #333333 solid', justifyContent: 'center', alignItems: 'center', gap: 200, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                <img style={{width: 68, height: 60}} src="https://via.placeholder.com/68x60" />
                <div style={{width: 167, color: 'white', fontSize: 24, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word'}}>WEAVESWAP</div>
            </div>
            <div style={{width: 390, color: '#8E8E8E', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Make trading more easier with weaveswap</div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-end', gap: 32, display: 'inline-flex'}}>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 22, height: 19.89, left: 1, top: 1.90, position: 'absolute', background: 'white'}}></div>
            </div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 24, height: 18.29, left: 0, top: 2.64, position: 'absolute', background: 'white'}}></div>
            </div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'white'}}></div>
            </div>
            <div style={{width: 24, height: 24, position: 'relative'}}>
                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'white'}}></div>
            </div>
        </div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 88, display: 'flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Company</div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Home</div>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>About Us</div>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Community</div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Product</div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Swap</div>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Pool</div>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Lend</div>
            </div>
        </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Resources</div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Ecosystem</div>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>For developers</div>
                <div style={{color: 'white', fontSize: 18, fontFamily: 'Hubot-Sans', fontWeight: '500', wordWrap: 'break-word'}}>Tokenisation</div>
            </div>
        </div>
    </div>
</div>
    </footer>
  );
}
