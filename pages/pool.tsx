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
<div className="Frame68 w-96 h-96 flex-col justify-start items-start gap-16 inline-flex">
  <div className="Frame66 flex-col justify-start items-start gap-4 flex">
    <div className="PutYourFundsToWorkByProvidingForLaunchpadLiquidity text-white text-3xl font-bold font-['Khand'] tracking-wide">Put your funds to work by providing for launchpad liquidity</div>
    <div className="WhenYouAddFundsToLaunchpadLiquidityPoolYouCanReceiveAShareOfItsTradingVolumeAndPotentiallySnagExtraRewardsWhenThereAreIncentivesInvolved w-96 text-neutral-400 text-lg font-medium font-['Khand'] tracking-tight">When you add funds to launchpad liquidity pool, you can receive a share of its trading volume and potentially snag extra rewards when there are incentives involved!</div>
  </div>
  <div className="Frame67 flex-col justify-start items-start gap-6 flex">
    <div className="Frame64 w-96 pr-8 justify-between items-start inline-flex">
      <div className="Frame62 justify-start items-center gap-16 flex">
        <div className="Frame65 justify-start items-center gap-2.5 flex">
          <div className="AllPools text-white text-lg font-semibold font-['Khand']">All pools</div>
        </div>
        <div className="Frame31 w-72 h-10 px-4 py-2 rounded-lg border border-zinc-800 justify-start items-center gap-2.5 flex">
          <div className="HeroiconsOutlineMagnifyingGlass w-5 h-5 relative" />
          <div className="Search text-zinc-600 text-sm font-semibold font-['Khand']">Search</div>
        </div>
      </div>
      <div className="Frame63 justify-start items-center gap-10 flex">
        <div className="Frame60 justify-start items-center gap-2 flex">
          <div className="Reward2 w-10 h-10 relative" />
          <div className="MyPosition text-white text-base font-semibold font-['Khand']">My position</div>
        </div>
        <div className="Frame61 justify-start items-center gap-2 flex">
          <div className="Reward1 w-8 h-8 relative" />
          <div className="MyRewards text-white text-base font-semibold font-['Khand']">My rewards</div>
        </div>
      </div>
    </div>
    <div className="Frame59 justify-start items-start inline-flex">
      <div className="Frame40 flex-col justify-start items-center inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 rounded-tl-2xl border-l border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">Pool</div>
        </div>
        <div className="Frame39 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">PLY/WAS</div>
        </div>
        <div className="Frame40 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">CBC/ETH</div>
        </div>
        <div className="Frame41 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">CLY/WAS</div>
        </div>
        <div className="Frame42 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">BLY/WAS</div>
        </div>
        <div className="Frame43 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">DOT/WAS</div>
        </div>
        <div className="Frame44 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">ENG/WAS</div>
        </div>
        <div className="Frame45 self-stretch h-14 py-3 border-l border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="PlyWas text-white text-base font-semibold font-['Khand'] tracking-tight">ENG/WAS</div>
        </div>
      </div>
      <div className="Frame46 flex-col justify-start items-center inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">Composition</div>
        </div>
        <div className="Frame33 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="PolygonMaticLogoPngVectorSvgFreeDownload2 w-7 h-7 relative">
            <img className="PolygonMaticLogoPngVectorSvgFreeDownload2 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="PolygonMaticLogoPngVectorSvgFreeDownload2 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Was w-7 h-7 relative">
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
        <div className="Frame34 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="Cbc w-7 h-7 justify-center items-center flex">
            <img className="YearsOfChermayeffGeismarHavivLogoDesignLove1 w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Eth w-7 h-7 justify-center items-center flex">
            <img className="EthereumLogoEthPngLogoVectorDownloadsSvgEps2 w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
        <div className="Frame35 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="Cly w-7 h-7 justify-center items-center flex">
            <img className="Instituto5ElementosTwinedBallOfYarnNice1 w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Was w-7 h-7 relative">
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
        <div className="Frame36 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="Bly w-7 h-7 justify-center items-center flex">
            <img className="Bly w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Was w-7 h-7 relative">
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
        <div className="Frame37 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="Dot w-7 h-7 justify-center items-center flex">
            <img className="ThisIsNova1 w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Was w-7 h-7 relative">
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
        <div className="Frame38 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="Eng w-7 h-7 justify-center items-center flex">
            <img className="BancoFalabellaLogoRealCompanyAlphabetLetterBLogo1 w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Was w-7 h-7 relative">
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
        <div className="Frame39 self-stretch h-14 px-4 py-3 border-b border-zinc-800 justify-center items-center gap-2 inline-flex">
          <div className="Eng w-7 h-7 justify-center items-center flex">
            <img className="BancoFalabellaLogoRealCompanyAlphabetLetterBLogo1 w-7 h-7" src="https://via.placeholder.com/28x28" />
          </div>
          <div className="Was w-7 h-7 relative">
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
            <img className="VivumWorkbenchApp3 w-7 h-7 left-0 top-0 absolute" src="https://via.placeholder.com/28x28" />
          </div>
        </div>
      </div>
      <div className="Frame47 flex-col justify-start items-start inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">7d Volume</div>
        </div>
        <div className="DVol self-stretch h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
        <div className="DVol self-stretch h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
        <div className="Frame48 w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
        <div className="Frame49 w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
        <div className="Frame50 w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
        <div className="Frame51 w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
        <div className="Frame52 w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="1m text-white text-base font-semibold font-['Khand'] tracking-tight">$1M</div>
        </div>
      </div>
      <div className="Frame48 flex-col justify-start items-start inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">24h Volume</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
        <div className="HVol w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="456k text-white text-base font-semibold font-['Khand'] tracking-tight">$456k</div>
        </div>
      </div>
      <div className="Frame53 flex-col justify-start items-start inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">Fee</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
        <div className="Fee w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="3523 text-white text-base font-semibold font-['Khand'] tracking-tight">$35.23</div>
        </div>
      </div>
      <div className="Frame54 flex-col justify-start items-start inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">Total Market Cap</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
        <div className="TotalMc w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="15m text-white text-base font-semibold font-['Khand'] tracking-tight">$15m</div>
        </div>
      </div>
      <div className="Frame55 flex-col justify-start items-start inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">ROI</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
        <div className="Roi w-40 h-14 py-3 border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="7 text-white text-base font-semibold font-['Khand'] tracking-tight">13.7%</div>
        </div>
      </div>
      <div className="Frame58 flex-col justify-start items-center inline-flex">
        <div className="Name w-40 px-4 py-3 bg-neutral-900 rounded-tr-2xl border-r border-t border-b border-zinc-800 justify-center items-center gap-2.5 inline-flex">
          <div className="Pool text-neutral-400 text-base font-medium font-['Khand'] tracking-tight">Action</div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
        <div className="AddLiquidity self-stretch h-14 py-2.5 border-r border-b border-zinc-800 flex-col justify-center items-center gap-2.5 flex">
          <div className="Frame56 h-8 p-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="AddLiquidity text-neutral-950 text-xs font-medium font-['Khand'] tracking-tight">Add LIquidity</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
