import React from "react";
import Image from "next/image";
import OraclePng from "../../../assets/png/blockchainstorage.png";
import CrossChainPng from "../../../assets/png/block1.png";
import SecurePng from "../../../assets/png/secure1.png";
import styles from "./index.module.css";
export default function Swappage() {
  return (
<div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'inline-flex'}}>
    <div style={{color: 'white', fontSize: 40, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>What we Offer</div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 160, display: 'flex'}}>
        <div style={{width: 1312, paddingLeft: 64, paddingRight: 64, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 40, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Autonomous trading platform</div>
                <div style={{width: 586, color: '#8E8E8E', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Eliminate the need for traditional intermediaries and trade any crypto asset with ease</div>
            </div>
            <div style={{padding: 27.25, background: 'black', borderRadius: 16.35, border: '0.68px #323232 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16.35, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 27.25, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16.35, display: 'flex'}}>
                        <div style={{width: 272.50, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 16.35, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Swap</div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10.90, display: 'flex'}}>
                                <div style={{width: 16.35, height: 16.35, position: 'relative'}}>
                                    <div style={{width: 16.35, height: 16.35, left: 0, top: -0, position: 'absolute'}}></div>
                                    <div style={{width: 13.75, height: 13.28, left: 1.07, top: 1.53, position: 'absolute', background: 'white'}}></div>
                                </div>
                                <div style={{width: 16.35, height: 16.35, position: 'relative'}}>
                                    <div style={{width: 12.48, height: 13.28, left: 1.94, top: 1.53, position: 'absolute', background: '#AFAFAF'}}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2.72, display: 'flex'}}>
                            <div style={{paddingLeft: 10.90, paddingRight: 10.90, background: '#111111', borderRadius: 10.90, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{alignSelf: 'stretch', paddingTop: 5.45, paddingBottom: 5.45, borderBottom: '0.41px #323232 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5.45, display: 'flex'}}>
                                        <div style={{color: '#969696', fontSize: 10.90, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>From:</div>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6.81, display: 'flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.09, display: 'flex'}}>
                                                <div style={{width: 12.26, height: 12.26, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                                    <img style={{width: 12.26, height: 12.26}} src="https://via.placeholder.com/12x12" />
                                                </div>
                                                <div style={{color: 'white', fontSize: 12.26, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>ETH</div>
                                            </div>
                                            <div style={{width: 9.54, height: 9.54, position: 'relative'}}>
                                                <div style={{width: 5.73, height: 3.65, left: 1.93, top: 2.91, position: 'absolute', background: 'white'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 19, justifyContent: 'flex-end', alignItems: 'center', gap: 8.86, display: 'flex'}}>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5.45, display: 'flex'}}>
                                            <div style={{color: '#969696', fontSize: 10.90, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>wallet Bal:</div>
                                            <div style={{color: 'white', fontSize: 12.26, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>23.72</div>
                                        </div>
                                        <div style={{padding: 2.72, background: 'linear-gradient(107deg, #23DF81 0%, #11C9BF 24%, #001F55 100%)', borderRadius: 3.41, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6.81, display: 'inline-flex'}}>
                                            <div style={{color: 'black', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '500', lineHeight: 9.54, wordWrap: 'break-word'}}>Max</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 250.70, paddingTop: 5.45, paddingBottom: 5.45, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5.45, display: 'flex'}}>
                                        <div style={{color: 'white', fontSize: 16.35, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>2.1</div>
                                        <div style={{color: '#969696', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>($4602.43)</div>
                                    </div>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10.90, display: 'flex'}}>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.09, display: 'flex'}}>
                                            <div style={{width: 16.35, height: 16.35, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                                <img style={{width: 16.35, height: 16.35}} src="https://via.placeholder.com/16x16" />
                                            </div>
                                            <div style={{color: 'white', fontSize: 16.35, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Ethereum</div>
                                        </div>
                                        <div style={{width: 12.26, height: 12.26, position: 'relative'}}>
                                            <div style={{width: 7.37, height: 4.69, left: 2.49, top: 3.74, position: 'absolute', background: 'white'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{width: 22.89, height: 16.35, position: 'relative', transform: 'rotate(-90deg)', transformOrigin: '0 0'}}>
                                <div style={{width: 18.60, height: 13.28, left: 2.15, top: 1.53, position: 'absolute', background: '#C2C2C2'}}></div>
                            </div>
                            <div style={{paddingLeft: 10.90, paddingRight: 10.90, background: '#111111', borderRadius: 10.90, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{alignSelf: 'stretch', paddingTop: 5.45, paddingBottom: 5.45, borderBottom: '0.41px #323232 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5.45, display: 'flex'}}>
                                        <div style={{color: '#969696', fontSize: 10.90, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>To:</div>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 6.81, display: 'flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.09, display: 'flex'}}>
                                                <div style={{width: 12.26, height: 12.26, position: 'relative'}}>
                                                    <img style={{width: 12.26, height: 12.26, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/12x12" />
                                                    <img style={{width: 12.26, height: 12.26, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/12x12" />
                                                </div>
                                                <div style={{color: 'white', fontSize: 12.26, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>WAS</div>
                                            </div>
                                            <div style={{width: 9.54, height: 9.54, position: 'relative'}}>
                                                <div style={{width: 5.73, height: 3.65, left: 1.93, top: 2.91, position: 'absolute', background: 'white'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{flex: '1 1 0', height: 19, justifyContent: 'flex-end', alignItems: 'center', gap: 8.86, display: 'flex'}}>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5.45, display: 'flex'}}>
                                            <div style={{color: '#969696', fontSize: 10.90, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>wallet Bal:</div>
                                            <div style={{color: 'white', fontSize: 12.26, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>23.72</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 250.70, paddingTop: 5.45, paddingBottom: 5.45, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 5.45, display: 'flex'}}>
                                        <div style={{color: 'white', fontSize: 16.35, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>2.1</div>
                                        <div style={{color: '#969696', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>($4602.43)</div>
                                    </div>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10.90, display: 'flex'}}>
                                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.09, display: 'flex'}}>
                                            <div style={{width: 16.35, height: 16.35, position: 'relative'}}>
                                                <img style={{width: 16.35, height: 16.35, left: -0, top: -0, position: 'absolute'}} src="https://via.placeholder.com/16x16" />
                                                <img style={{width: 16.35, height: 16.35, left: -0, top: -0, position: 'absolute'}} src="https://via.placeholder.com/16x16" />
                                            </div>
                                            <div style={{color: 'white', fontSize: 16.35, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Weaves</div>
                                        </div>
                                        <div style={{width: 12.26, height: 12.26, position: 'relative'}}>
                                            <div style={{width: 7.37, height: 4.69, left: 2.49, top: 3.74, position: 'absolute', background: 'white'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{height: 75.62, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8.17, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 10.90, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Summary</div>
                        <div style={{alignSelf: 'stretch', height: 50.45, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2.72, display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{color: '#969696', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Cross chain rate</div>
                                <div style={{width: 109, textAlign: 'right', color: 'white', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>1 USDT on ETH= 1 USDT on WAS</div>
                            </div>
                            <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{color: '#969696', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Amount Recieved (Estimated)</div>
                                <div style={{color: 'white', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>0.000WAS</div>
                            </div>
                            <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{color: '#969696', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Gas Fee</div>
                                <div style={{color: 'white', fontSize: 9.54, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>0.000USDC</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: 272.50, padding: 6.81, background: 'linear-gradient(90deg, #23DF81 0%, #11C9BF 42%, #001F55 100%)', borderRadius: 5.45, justifyContent: 'center', alignItems: 'center', gap: 6.81, display: 'inline-flex'}}>
                    <div style={{color: 'black', fontSize: 12.26, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Swap</div>
                </div>
            </div>
        </div>
        <div style={{width: 1312, paddingLeft: 64, paddingRight: 64, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 529, height: 331.43, position: 'relative', background: 'black'}}>
                <div style={{width: 482.14, left: 23.50, top: 14.69, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2.94, display: 'flex'}}>
                        <img style={{width: 24.97, height: 22.03}} src="https://via.placeholder.com/25x22" />
                        <div style={{width: 61.32, color: 'white', fontSize: 8.81, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word'}}>WEAVESWAP</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23.50, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Swap</div>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Pool</div>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Lend</div>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Social Media</div>
                    </div>
                    <div style={{paddingLeft: 3.67, paddingRight: 3.67, paddingTop: 4.41, paddingBottom: 4.41, background: 'linear-gradient(274deg, #001F55 7%, #0EC3CD 48%, #23DF81 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                        <div style={{color: 'black', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '500', lineHeight: 5.14, wordWrap: 'break-word'}}>Connect Wallet</div>
                    </div>
                </div>
                <div style={{left: 23.50, top: 60.22, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23.50, display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.88, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 11.75, fontFamily: 'Khand', fontWeight: '700', letterSpacing: 0.24, wordWrap: 'break-word'}}>Put your funds to work by providing for launchpad liquidity</div>
                        <div style={{width: 349.94, color: '#969696', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.07, wordWrap: 'break-word'}}>When you add funds to launchpad liquidity pool, you can receive a share of its trading volume and potentially snag extra rewards when there are incentives involved!</div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8.81, display: 'flex'}}>
                        <div style={{width: 481.77, paddingLeft: 11.75, paddingRight: 11.75, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 23.50, display: 'flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>All pools</div>
                                </div>
                                <div style={{width: 110.16, height: 14.69, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 2.94, paddingBottom: 2.94, borderRadius: 1.47, border: '0.73px #141414 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{width: 7.34, height: 7.34, position: 'relative'}}>
                                        <div style={{width: 5.51, height: 5.51, left: 0.92, top: 0.92, position: 'absolute', border: '0.46px #606060 solid'}}></div>
                                    </div>
                                    <div style={{color: '#606060', fontSize: 5.14, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Search</div>
                                </div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 14.69, display: 'flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2.94, display: 'flex'}}>
                                    <div style={{width: 14.69, height: 14.69, position: 'relative'}}>
                                        <div style={{width: 8.91, height: 8.56, left: 2.89, top: 1.84, position: 'absolute', background: 'white'}}></div>
                                        <div style={{width: 4.25, height: 4.65, left: 8.60, top: 8.21, position: 'absolute', border: '1.22px #C3A494 solid'}}></div>
                                        <div style={{width: 4.25, height: 4.65, left: 1.84, top: 8.21, position: 'absolute', border: '1.22px #C3A494 solid'}}></div>
                                        <div style={{width: 8.91, height: 8.56, left: 2.89, top: 1.84, position: 'absolute', border: '1.22px #C3A494 solid'}}></div>
                                    </div>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>My position</div>
                                </div>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2.94, display: 'flex'}}>
                                    <div style={{width: 11.75, height: 11.75, position: 'relative'}}>
                                        <div style={{width: 10.96, height: 11.39, left: 0.40, top: 0.18, position: 'absolute', background: '#C3A494'}}></div>
                                        <div style={{width: 11.33, height: 11.75, left: 0.21, top: 0, position: 'absolute', background: '#323232'}}></div>
                                        <div style={{width: 1.02, height: 0.70, left: 4.04, top: 2.25, position: 'absolute', background: '#F6EAC9'}}></div>
                                        <div style={{width: 1.38, height: 1.05, left: 3.86, top: 2.08, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 0.95, height: 0.70, left: 6.83, top: 2.25, position: 'absolute', background: '#F6EAC9'}}></div>
                                        <div style={{width: 1.31, height: 1.06, left: 6.66, top: 2.07, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 1.78, height: 0.70, left: 5.06, top: 2.25, position: 'absolute', background: '#F6EAC9'}}></div>
                                        <div style={{width: 2.14, height: 1.06, left: 4.88, top: 2.07, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 0.95, height: 0.70, left: 5.90, top: 2.25, position: 'absolute', background: '#F6EAC9'}}></div>
                                        <div style={{width: 1.31, height: 1.06, left: 5.72, top: 2.07, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 5.45, height: 5.45, left: 3.17, top: 4.42, position: 'absolute', background: '#9A7867'}}></div>
                                        <div style={{width: 5.82, height: 5.82, left: 2.99, top: 4.24, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 4.05, height: 4.05, left: 3.87, top: 5.12, position: 'absolute', background: 'white'}}></div>
                                        <div style={{width: 4.42, height: 4.42, left: 3.69, top: 4.94, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 1.74, height: 2.34, left: 5.07, top: 6.10, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 0.36, height: 0.76, left: 5.74, top: 5.70, position: 'absolute', background: '#131313'}}></div>
                                        <div style={{width: 0.36, height: 0.66, left: 5.74, top: 8.12, position: 'absolute', background: '#131313'}}></div>
                                    </div>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>My rewards</div>
                                </div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTopLeftRadius: 5.88, borderLeft: '0.37px #323232 solid', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Pool</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>PLY/WAS</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>CBC/ETH</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>CLY/WAS</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>BLY/WAS</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>DOT/WAS</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>ENG/WAS</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>ENG/WAS</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Composition</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: -0, top: -0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: -0, top: -0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                    <div style={{width: 10.28, height: 10.28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <img style={{width: 10.28, height: 10.28}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                    <div style={{width: 10.28, height: 10.28, position: 'relative'}}>
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        <img style={{width: 10.28, height: 10.28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                    </div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>7d Volume</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$1M</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>24h Volume</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$456k</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Fee</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$35.23</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Total Market Cap</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$15m</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>ROI</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>13.7%</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{width: 60.22, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTopLeftRadius: 5.88, borderTop: '0.22px #323232 solid', borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Action</div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                                <div style={{width: 60.22, height: 22.03, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{height: 11.75, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Add LIquidity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: 27.50, paddingBottom: 2.96, paddingLeft: 158.70, paddingRight: 124.03, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(2.94px)', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', padding: 20.52, background: 'black', borderRadius: 12.31, border: '1.54px #141414 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12.31, display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20.52, display: 'flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12.31, display: 'flex'}}>
                                <div style={{width: 205.23, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 12.31, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Add Liquidity</div>
                                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8.21, display: 'flex'}}>
                                        <div style={{width: 12.31, height: 12.31, position: 'relative'}}>
                                            <div style={{width: 12.31, height: 12.31, left: 0, top: 0, position: 'absolute'}}></div>
                                            <div style={{width: 10.36, height: 10, left: 0.80, top: 1.15, position: 'absolute', background: 'white'}}></div>
                                        </div>
                                        <div style={{width: 12.31, height: 12.31, position: 'relative'}}>
                                            <div style={{width: 9.40, height: 10, left: 1.46, top: 1.15, position: 'absolute', background: '#AFAFAF'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2.05, display: 'flex'}}>
                                    <div style={{paddingLeft: 8.21, paddingRight: 8.21, background: '#111111', borderRadius: 8.21, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{alignSelf: 'stretch', paddingTop: 4.10, paddingBottom: 4.10, borderBottom: '0.31px #323232 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.10, display: 'flex'}}>
                                                <div style={{color: '#969696', fontSize: 8.21, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>First asset</div>
                                            </div>
                                            <div style={{flex: '1 1 0', height: 14, justifyContent: 'flex-end', alignItems: 'center', gap: 6.67, display: 'flex'}}>
                                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.10, display: 'flex'}}>
                                                    <div style={{color: '#969696', fontSize: 8.21, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>wallet Bal:</div>
                                                    <div style={{color: 'white', fontSize: 9.24, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>23.72</div>
                                                </div>
                                                <div style={{padding: 2.05, background: 'linear-gradient(107deg, #23DF81 0%, #11C9BF 24%, #001F55 100%)', borderRadius: 2.57, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5.13, display: 'inline-flex'}}>
                                                    <div style={{color: 'black', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', lineHeight: 7.18, wordWrap: 'break-word'}}>Max</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{width: 188.81, paddingTop: 4.10, paddingBottom: 4.10, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.10, display: 'flex'}}>
                                                <div style={{color: 'white', fontSize: 12.31, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>2.1</div>
                                                <div style={{color: '#969696', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>($4602.43)</div>
                                            </div>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8.21, display: 'flex'}}>
                                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.08, display: 'flex'}}>
                                                    <div style={{width: 12.31, height: 12.31, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                                        <img style={{width: 12.31, height: 12.31}} src="https://via.placeholder.com/12x12" />
                                                    </div>
                                                    <div style={{color: 'white', fontSize: 12.31, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Ethereum</div>
                                                </div>
                                                <div style={{width: 9.24, height: 9.24, position: 'relative'}}>
                                                    <div style={{width: 5.55, height: 3.53, left: 1.87, top: 2.81, position: 'absolute', background: 'white'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width: 12.31, height: 12.31, position: 'relative'}}>
                                        <div style={{width: 8.47, height: 8.47, left: 1.92, top: 1.92, position: 'absolute', background: 'white'}}></div>
                                    </div>
                                    <div style={{paddingLeft: 8.21, paddingRight: 8.21, background: '#111111', borderRadius: 8.21, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{alignSelf: 'stretch', paddingTop: 4.10, paddingBottom: 4.10, borderBottom: '0.31px #323232 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.10, display: 'flex'}}>
                                                <div style={{color: '#969696', fontSize: 8.21, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Second asset</div>
                                            </div>
                                            <div style={{flex: '1 1 0', height: 14, justifyContent: 'flex-end', alignItems: 'center', gap: 6.67, display: 'flex'}}>
                                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.10, display: 'flex'}}>
                                                    <div style={{color: '#969696', fontSize: 8.21, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>wallet Bal:</div>
                                                    <div style={{color: 'white', fontSize: 9.24, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>23.72</div>
                                                </div>
                                                <div style={{padding: 2.05, background: 'linear-gradient(107deg, #23DF81 0%, #11C9BF 24%, #001F55 100%)', borderRadius: 2.57, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5.13, display: 'inline-flex'}}>
                                                    <div style={{color: 'black', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', lineHeight: 7.18, wordWrap: 'break-word'}}>Max</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{width: 188.81, paddingTop: 4.10, paddingBottom: 4.10, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.10, display: 'flex'}}>
                                                <div style={{color: 'white', fontSize: 12.31, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>2.1</div>
                                                <div style={{color: '#969696', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>($4602.43)</div>
                                            </div>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8.21, display: 'flex'}}>
                                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.08, display: 'flex'}}>
                                                    <div style={{width: 12.31, height: 12.31, position: 'relative'}}>
                                                        <img style={{width: 12.31, height: 12.31, left: -0, top: -0, position: 'absolute'}} src="https://via.placeholder.com/12x12" />
                                                        <img style={{width: 12.31, height: 12.31, left: -0, top: -0, position: 'absolute'}} src="https://via.placeholder.com/12x12" />
                                                    </div>
                                                    <div style={{color: 'white', fontSize: 12.31, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Weaves</div>
                                                </div>
                                                <div style={{width: 9.24, height: 9.24, position: 'relative'}}>
                                                    <div style={{width: 5.55, height: 3.53, left: 1.87, top: 2.81, position: 'absolute', background: 'white'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{height: 56.26, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6.16, display: 'flex'}}>
                                <div style={{color: 'white', fontSize: 8.21, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Summary</div>
                                <div style={{alignSelf: 'stretch', height: 37.10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2.05, display: 'flex'}}>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Pool Rate</div>
                                        <div style={{width: 82.09, textAlign: 'right', color: 'white', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>1 ETH= 1 WAS </div>
                                    </div>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Portion of Pool</div>
                                        <div style={{textAlign: 'right', color: 'white', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>3.21%</div>
                                    </div>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Gas Fee</div>
                                        <div style={{textAlign: 'right', color: 'white', fontSize: 7.18, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>7.5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: 205.23, padding: 5.13, background: 'linear-gradient(90deg, #23DF81 0%, #11C9BF 42%, #001F55 100%)', borderRadius: 4.10, justifyContent: 'center', alignItems: 'center', gap: 5.13, display: 'inline-flex'}}>
                            <div style={{color: 'black', fontSize: 9.24, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Add Liquidity</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 40, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Liquidity provider</div>
                <div style={{width: 586, color: '#8E8E8E', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Earn passive income by putting your funds to work by providing to a launchpad liquidity.</div>
            </div>
        </div>
        <div style={{width: 1312, paddingLeft: 64, paddingRight: 64, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 40, fontFamily: 'Hubot-Sans', fontWeight: '700', wordWrap: 'break-word'}}>Decentralized lending Protocol</div>
                <div style={{width: 586, color: '#8E8E8E', fontSize: 20, fontFamily: 'Hubot-Sans', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Without the need of intermediaries such as banks or financial institutions, lend and borrow crypto assets.</div>
            </div>
            <div style={{width: 529, height: 331, position: 'relative', background: 'black'}}>
                <div style={{width: 482.35, left: 23.51, top: 14.69, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2.94, display: 'flex'}}>
                        <img style={{width: 24.98, height: 22.04}} src="https://via.placeholder.com/25x22" />
                        <div style={{width: 61.35, color: 'white', fontSize: 8.82, fontFamily: 'Kavoon', fontWeight: '400', wordWrap: 'break-word'}}>WEAVESWAP</div>
                    </div>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23.51, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Swap</div>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Pool</div>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Lend</div>
                        <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Social Media</div>
                    </div>
                    <div style={{paddingLeft: 3.67, paddingRight: 3.67, paddingTop: 4.41, paddingBottom: 4.41, background: 'linear-gradient(274deg, #001F55 7%, #0EC3CD 48%, #23DF81 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                        <div style={{color: 'black', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '500', lineHeight: 5.14, wordWrap: 'break-word'}}>Connect Wallet</div>
                    </div>
                </div>
                <div style={{left: 23.51, top: 60.25, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14.69, display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.88, display: 'flex'}}>
                        <div style={{color: 'white', fontSize: 11.76, fontFamily: 'Khand', fontWeight: '700', letterSpacing: 0.24, wordWrap: 'break-word'}}>Lock in your crypto assets to earn interest</div>
                        <div style={{width: 350.10, color: '#969696', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.07, wordWrap: 'break-word'}}>Enable peer-to-peer lending and borrowing through blockchain technology, providing users with direct control, reduced fees, and increased financial accessibility!</div>
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 29.39, display: 'flex'}}>
                        <div style={{width: 481.98, borderRadius: 5.88, border: '0.22px #323232 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{width: 96.40, paddingLeft: 11.76, paddingRight: 11.76, paddingTop: 6.61, paddingBottom: 6.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                <div style={{justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{width: 8.82, height: 8.82, position: 'relative'}}>
                                        <div style={{width: 7.71, height: 6.06, left: 0.55, top: 1.38, position: 'absolute', background: '#23DF81'}}></div>
                                    </div>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Total Supply</div>
                                </div>
                                <div style={{color: 'white', fontSize: 11.76, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.12, wordWrap: 'break-word'}}>$0.000</div>
                            </div>
                            <div style={{flex: '1 1 0', height: 31.23, border: '0.22px #323232 solid'}}></div>
                            <div style={{width: 96.40, paddingLeft: 11.76, paddingRight: 11.76, paddingTop: 6.61, paddingBottom: 6.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                <div style={{justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{width: 8.82, height: 8.82, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <div style={{width: 8.82, height: 8.82, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                            <div style={{width: 7.16, height: 7.16, background: '#11C9BF'}}></div>
                                        </div>
                                    </div>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Net APY</div>
                                </div>
                                <div style={{color: 'white', fontSize: 11.76, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.12, wordWrap: 'break-word'}}>0.00%</div>
                            </div>
                            <div style={{flex: '1 1 0', height: 31.23, border: '0.22px #323232 solid'}}></div>
                            <div style={{width: 96.40, paddingLeft: 11.76, paddingRight: 11.76, paddingTop: 6.61, paddingBottom: 6.61, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2.94, display: 'inline-flex'}}>
                                <div style={{justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                    <div style={{width: 8.82, height: 8.82, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <div style={{width: 8.82, height: 8.82, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                            <div style={{width: 7.71, height: 5.51, background: '#001F55'}}></div>
                                        </div>
                                    </div>
                                    <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Total Borrow</div>
                                </div>
                                <div style={{color: 'white', fontSize: 11.76, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.12, wordWrap: 'break-word'}}>$0.000</div>
                            </div>
                        </div>
                        <div style={{height: 157.41, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 14.69, display: 'flex'}}>
                            <div style={{width: 481.98, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 297.56, display: 'inline-flex'}}>
                                <div style={{width: 74.94, height: 13.22, position: 'relative'}}>
                                    <div style={{width: 74.94, height: 1.47, left: 0, top: 11.76, position: 'absolute', background: '#323232', borderTopLeftRadius: 1.47, borderTopRightRadius: 1.47}} />
                                    <div style={{left: -0.47, top: 0.53, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1.47, display: 'inline-flex'}}>
                                            <div style={{color: 'white', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.07, wordWrap: 'break-word'}}>Supply</div>
                                            <div style={{width: 37.47, height: 1.47, background: '#11C9BF', borderTopLeftRadius: 1.47, borderTopRightRadius: 1.47}} />
                                        </div>
                                        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1.47, display: 'inline-flex'}}>
                                            <div style={{color: '#969696', fontSize: 6.61, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.07, wordWrap: 'break-word'}}>Borrow</div>
                                            <div style={{width: 37.47, height: 1.47, opacity: 0, background: '#11C9BF', borderTopLeftRadius: 1.47, borderTopRightRadius: 1.47}} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: 110.21, height: 14.69, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 2.94, paddingBottom: 2.94, borderRadius: 2.94, border: '0.22px #323232 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                    <div style={{width: 7.35, height: 7.35, position: 'relative'}}>
                                        <div style={{width: 5.51, height: 5.51, left: 0.92, top: 0.92, position: 'absolute', border: '0.46px #606060 solid'}}></div>
                                    </div>
                                    <div style={{color: '#606060', fontSize: 5.14, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Search</div>
                                </div>
                            </div>
                            <div style={{width: 482.71, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                                    <div style={{width: 96.54, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTopLeftRadius: 5.88, borderLeft: '0.37px #323232 solid', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Asset</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 5.88, display: 'inline-flex'}}>
                                        <div style={{width: 10.29, height: 10.29, position: 'relative'}}>
                                            <img style={{width: 10.29, height: 10.29, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                            <img style={{width: 10.29, height: 10.29, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        </div>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>MATIC</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 5.88, display: 'inline-flex'}}>
                                        <div style={{width: 10.29, height: 10.29, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                            <img style={{width: 10.29, height: 10.29}} src="https://via.placeholder.com/10x10" />
                                        </div>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>ENG</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 5.88, display: 'inline-flex'}}>
                                        <div style={{width: 10.29, height: 10.29, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                            <img style={{width: 10.29, height: 10.29}} src="https://via.placeholder.com/10x10" />
                                        </div>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>CBC</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 5.88, display: 'inline-flex'}}>
                                        <div style={{width: 10.29, height: 10.29, position: 'relative'}}>
                                            <img style={{width: 10.29, height: 10.29, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                            <img style={{width: 10.29, height: 10.29, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/10x10" />
                                        </div>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>WAS</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, borderLeft: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 5.88, display: 'inline-flex'}}>
                                        <div style={{width: 10.29, height: 10.29, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                            <img style={{width: 10.29, height: 10.29}} src="https://via.placeholder.com/10x10" />
                                        </div>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>CLY</div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 96.54, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Total Supplied</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$20M</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$20M</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$20M</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$20M</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$20M</div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 96.54, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>APY</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>3.23%</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>3.23%</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>3.23%</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>3.23%</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>3.23%</div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 96.54, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTop: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Wallet Balance</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$2,000</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$2,000</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$2,000</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$2,000</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.06, wordWrap: 'break-word'}}>$2,000</div>
                                    </div>
                                </div>
                                <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                                    <div style={{width: 96.54, paddingLeft: 5.88, paddingRight: 5.88, paddingTop: 4.41, paddingBottom: 4.41, background: '#111111', borderTopLeftRadius: 5.88, borderTop: '0.22px #323232 solid', borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 5.88, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.06, wordWrap: 'break-word'}}>Action</div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                        <div style={{height: 11.76, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                            <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Supply</div>
                                        </div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                        <div style={{height: 11.76, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                            <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Supply</div>
                                        </div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                        <div style={{height: 11.76, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                            <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Supply</div>
                                        </div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                        <div style={{height: 11.76, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                            <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Supply</div>
                                        </div>
                                    </div>
                                    <div style={{width: 96.54, height: 22.04, paddingTop: 3.67, paddingBottom: 3.67, borderRight: '0.22px #323232 solid', borderBottom: '0.22px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'flex'}}>
                                        <div style={{height: 11.76, padding: 3.67, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 2.94, justifyContent: 'center', alignItems: 'center', gap: 3.67, display: 'inline-flex'}}>
                                            <div style={{color: '#0B0A0A', fontSize: 4.41, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.04, wordWrap: 'break-word'}}>Supply</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: 48.28, paddingBottom: 31.35, paddingLeft: 132.50, paddingRight: 131.78, left: 0.50, top: 0.09, position: 'absolute', background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(2.94px)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', padding: 22.06, background: 'black', borderRadius: 13.24, border: '1.65px #141414 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 13.24, display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 22.06, display: 'flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 13.24, display: 'flex'}}>
                                <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 134.57, display: 'inline-flex'}}>
                                    <div style={{color: 'white', fontSize: 13.24, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Supply</div>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2.21, display: 'flex'}}>
                                    <div style={{paddingLeft: 8.82, paddingRight: 8.82, background: '#111111', borderRadius: 8.82, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                        <div style={{alignSelf: 'stretch', paddingTop: 4.41, paddingBottom: 4.41, borderBottom: '0.33px #323232 solid', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.41, display: 'flex'}}>
                                                <div style={{color: '#969696', fontSize: 8.82, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Asset</div>
                                            </div>
                                            <div style={{flex: '1 1 0', height: 15, justifyContent: 'flex-end', alignItems: 'center', gap: 7.17, display: 'flex'}}>
                                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.41, display: 'flex'}}>
                                                    <div style={{color: '#969696', fontSize: 8.82, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>wallet Bal:</div>
                                                    <div style={{color: 'white', fontSize: 9.93, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>23.72</div>
                                                </div>
                                                <div style={{padding: 2.21, background: 'linear-gradient(107deg, #23DF81 0%, #11C9BF 24%, #001F55 100%)', borderRadius: 2.76, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5.52, display: 'inline-flex'}}>
                                                    <div style={{color: 'black', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '500', lineHeight: 7.72, wordWrap: 'break-word'}}>Max</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{width: 202.96, paddingTop: 4.41, paddingBottom: 4.41, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4.41, display: 'flex'}}>
                                                <div style={{color: 'white', fontSize: 13.24, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>2.1</div>
                                                <div style={{color: '#969696', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>($4602.43)</div>
                                            </div>
                                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8.82, display: 'flex'}}>
                                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.31, display: 'flex'}}>
                                                    <div style={{width: 13.24, height: 13.24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                                        <img style={{width: 13.24, height: 13.24}} src="https://via.placeholder.com/13x13" />
                                                    </div>
                                                    <div style={{color: 'white', fontSize: 13.24, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Ethereum</div>
                                                </div>
                                                <div style={{width: 9.93, height: 9.93, position: 'relative'}}>
                                                    <div style={{width: 5.96, height: 3.80, left: 2.01, top: 3.02, position: 'absolute', background: 'white'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{height: 60.03, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6.62, display: 'flex'}}>
                                <div style={{color: 'white', fontSize: 8.82, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Summary</div>
                                <div style={{alignSelf: 'stretch', height: 40.41, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2.21, display: 'flex'}}>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Supply APY</div>
                                        <div style={{width: 88.24, textAlign: 'right', color: 'white', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>3.23%</div>
                                    </div>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Collateral factor</div>
                                        <div style={{textAlign: 'right', color: 'white', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>72.1%</div>
                                    </div>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#969696', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Gas Fee</div>
                                        <div style={{textAlign: 'right', color: 'white', fontSize: 7.72, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>$20</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: 220.60, padding: 5.52, background: 'linear-gradient(90deg, #23DF81 0%, #11C9BF 42%, #001F55 100%)', borderRadius: 4.41, justifyContent: 'center', alignItems: 'center', gap: 5.52, display: 'inline-flex'}}>
                            <div style={{color: 'black', fontSize: 9.93, fontFamily: 'Khand', fontWeight: '500', wordWrap: 'break-word'}}>Supply</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
