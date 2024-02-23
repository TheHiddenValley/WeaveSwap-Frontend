import React from "react";
import SingleCrossSwapInput from "@/components/inputs/singleCrossPayment/singleCrossSwapInput";
import ConnectWalletPage from "@/components/connectWalletPage";
import { useAddress } from "@thirdweb-dev/react";
import FirstNetworkModal from "@/components/modal/firstNetworkModalPage";
import SecondNetworkModal from "@/components/modal/secondNetworkModal";

import CoinPrice from "@/components/coinPrice/Coinprice";

export default function pool() {
  const address = useAddress();
  if (!address)
    return (
      <div className="Pool" style={{width: '100%', height: '100%', paddingTop: 40, paddingBottom: 143, paddingLeft: 64, paddingRight: 63, background: 'black', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'inline-flex'}}>
<div className="Frame68" style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 64, display: 'inline-flex'}}>
    <div className="Frame66" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <div className="PutYourFundsToWorkByProvidingForLaunchpadLiquidity" style={{color: 'white', fontSize: 32, fontFamily: 'Khand', fontWeight: '700', letterSpacing: 0.64, wordWrap: 'break-word'}}>Put your funds to work by providing for launchpad liquidity</div>
        <div className="WhenYouAddFundsToLaunchpadLiquidityPoolYouCanReceiveAShareOfItsTradingVolumeAndPotentiallySnagExtraRewardsWhenThereAreIncentivesInvolved" style={{width: 953, color: '#969696', fontSize: 18, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.18, wordWrap: 'break-word'}}>When you add funds to launchpad liquidity pool, you can receive a share of its trading volume and potentially snag extra rewards when there are incentives involved!</div>
    </div>
    <div className="Frame67" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
        <div className="Frame64" style={{width: 1312, paddingRight: 32, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div className="Frame62" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 64, display: 'flex'}}>
                <div className="Frame65" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="AllPools" style={{color: 'white', fontSize: 18, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>All pools</div>
                </div>
                <div className="Frame31" style={{width: 300, height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 8, border: '0.60px #323232 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="HeroiconsOutlineMagnifyingGlass" style={{width: 20, height: 20, position: 'relative'}}>
                        <div className="Vector" style={{width: 15, height: 15, left: 2.50, top: 2.50, position: 'absolute', border: '1.25px #606060 solid'}}></div>
                    </div>
                    <div className="Search" style={{color: '#606060', fontSize: 14, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>Search</div>
                </div>
            </div>
            <div className="Frame63" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'flex'}}>
                <div className="Frame60" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div className="Reward2" style={{width: 40, height: 40, position: 'relative'}}>
                        <div className="Secondary" style={{width: 24.27, height: 23.32, left: 7.87, top: 5.01, position: 'absolute', background: 'white'}}></div>
                        <div className="Primary" style={{width: 11.58, height: 12.65, left: 23.42, top: 22.35, position: 'absolute', border: '3.33px #C3A494 solid'}}></div>
                        <div className="Primary" style={{width: 11.58, height: 12.65, left: 5, top: 22.35, position: 'absolute', border: '3.33px #C3A494 solid'}}></div>
                        <div className="Primary" style={{width: 24.27, height: 23.32, left: 7.87, top: 5.01, position: 'absolute', border: '3.33px #C3A494 solid'}}></div>
                    </div>
                    <div className="MyPosition" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>My position</div>
                </div>
                <div className="Frame61" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div className="Reward1" style={{width: 32, height: 32, position: 'relative'}}>
                        <div className="Vector" style={{width: 29.84, height: 31.01, left: 1.09, top: 0.49, position: 'absolute', background: '#C3A494'}}></div>
                        <div className="Vector" style={{width: 30.85, height: 32, left: 0.58, top: 0, position: 'absolute', background: '#323232'}}></div>
                        <div className="Vector" style={{width: 2.77, height: 1.91, left: 11.02, top: 6.11, position: 'absolute', background: '#F6EAC9'}}></div>
                        <div className="Vector" style={{width: 3.76, height: 2.87, left: 10.52, top: 5.67, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 2.57, height: 1.91, left: 18.61, top: 6.14, position: 'absolute', background: '#F6EAC9'}}></div>
                        <div className="Vector" style={{width: 3.56, height: 2.90, left: 18.14, top: 5.64, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 4.85, height: 1.91, left: 13.79, top: 6.14, position: 'absolute', background: '#F6EAC9'}}></div>
                        <div className="Vector" style={{width: 5.84, height: 2.90, left: 13.29, top: 5.64, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 2.57, height: 1.91, left: 16.06, top: 6.14, position: 'absolute', background: '#F6EAC9'}}></div>
                        <div className="Vector" style={{width: 3.56, height: 2.90, left: 15.57, top: 5.64, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 14.85, height: 14.85, left: 8.64, top: 12.03, position: 'absolute', background: '#9A7867'}}></div>
                        <div className="Vector" style={{width: 15.84, height: 15.84, left: 8.15, top: 11.53, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 11.04, height: 11.04, left: 10.55, top: 13.93, position: 'absolute', background: 'white'}}></div>
                        <div className="Vector" style={{width: 12.03, height: 12.03, left: 10.05, top: 13.44, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 4.73, height: 6.37, left: 13.81, top: 16.62, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 0.99, height: 2.08, left: 15.62, top: 15.52, position: 'absolute', background: '#131313'}}></div>
                        <div className="Vector" style={{width: 0.99, height: 1.81, left: 15.62, top: 22.13, position: 'absolute', background: '#131313'}}></div>
                    </div>
                    <div className="MyRewards" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', wordWrap: 'break-word'}}>My rewards</div>
                </div>
            </div>
        </div>
        <div className="Frame59" style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div className="Frame40" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTopLeftRadius: 16, borderLeft: '1px #323232 solid', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>Pool</div>
                </div>
                <div className="Frame39" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>PLY/WAS</div>
                </div>
                <div className="Frame40" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>CBC/ETH</div>
                </div>
                <div className="Frame41" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>CLY/WAS</div>
                </div>
                <div className="Frame42" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>BLY/WAS</div>
                </div>
                <div className="Frame43" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>DOT/WAS</div>
                </div>
                <div className="Frame44" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>ENG/WAS</div>
                </div>
                <div className="Frame45" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderLeft: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="PlyWas" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>ENG/WAS</div>
                </div>
            </div>
            <div className="Frame46" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>Composition</div>
                </div>
                <div className="Frame33" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="PolygonMaticLogoPngVectorSvgFreeDownload2" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="PolygonMaticLogoPngVectorSvgFreeDownload2" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="PolygonMaticLogoPngVectorSvgFreeDownload2" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Was" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
                <div className="Frame34" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="Cbc" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="YearsOfChermayeffGeismarHavivLogoDesignLove1" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Eth" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="EthereumLogoEthPngLogoVectorDownloadsSvgEps2" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
                <div className="Frame35" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="Cly" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="Instituto5ElementosTwinedBallOfYarnNice1" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Was" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
                <div className="Frame36" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="Bly" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="Bly" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Was" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
                <div className="Frame37" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="Dot" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="ThisIsNova1" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Was" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
                <div className="Frame38" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="Eng" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="BancoFalabellaLogoRealCompanyAlphabetLetterBLogo1" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Was" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
                <div className="Frame39" style={{alignSelf: 'stretch', height: 60, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                    <div className="Eng" style={{width: 28, height: 28, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img className="BancoFalabellaLogoRealCompanyAlphabetLetterBLogo1" style={{width: 28, height: 28}} src="https://via.placeholder.com/28x28" />
                    </div>
                    <div className="Was" style={{width: 28, height: 28, position: 'relative'}}>
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                        <img className="VivumWorkbenchApp3" style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/28x28" />
                    </div>
                </div>
            </div>
            <div className="Frame47" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>7d Volume</div>
                </div>
                <div className="DVol" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
                <div className="DVol" style={{alignSelf: 'stretch', height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
                <div className="Frame48" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
                <div className="Frame49" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
                <div className="Frame50" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
                <div className="Frame51" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
                <div className="Frame52" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="1m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$1M</div>
                </div>
            </div>
            <div className="Frame48" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>24h Volume</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
                <div className="HVol" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="456k" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$456k</div>
                </div>
            </div>
            <div className="Frame53" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>Fee</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
                <div className="Fee" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="3523" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$35.23</div>
                </div>
            </div>
            <div className="Frame54" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>Total Market Cap</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
                <div className="TotalMc" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="15m" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>$15m</div>
                </div>
            </div>
            <div className="Frame55" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTop: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>ROI</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
                <div className="Roi" style={{width: 164, height: 60, paddingTop: 12, paddingBottom: 12, borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="7" style={{color: 'white', fontSize: 16, fontFamily: 'Khand', fontWeight: '600', letterSpacing: 0.16, wordWrap: 'break-word'}}>13.7%</div>
                </div>
            </div>
            <div className="Frame58" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Name" style={{width: 164, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#111111', borderTopLeftRadius: 16, borderTop: '0.60px #323232 solid', borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div className="Pool" style={{color: '#969696', fontSize: 16, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.16, wordWrap: 'break-word'}}>Action</div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
                <div className="AddLiquidity" style={{alignSelf: 'stretch', height: 60, paddingTop: 10, paddingBottom: 10, borderRight: '0.60px #323232 solid', borderBottom: '0.60px #323232 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                    <div className="Frame56" style={{height: 32, padding: 10, background: 'linear-gradient(96deg, #23DF81 0%, #11C9BF 36%, #001F55 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="AddLiquidity" style={{color: '#0B0A0A', fontSize: 12, fontFamily: 'Khand', fontWeight: '500', letterSpacing: 0.12, wordWrap: 'break-word'}}>Add LIquidity</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}
