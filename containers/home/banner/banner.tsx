import React from "react";
import styles from "./banner.module.css";
import Link from "next/link";

const Banner = () => {
  const imageUrl = "/HomeBG.svg";
  
  const styles: { container: React.CSSProperties; image: React.CSSProperties } = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    height: '80%',
    width: '100%',
  },
  image: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
    transform: 'translate3d(0, -30%, 0)',
    zIndex: -5,
  },
};

  return (
    <div className="flex overflow-hidden relative flex-col items-center px-16 py-11 min-h-[1024px] max-md:px-5">
      <div style={styles.container}>
        <img
          loading="lazy"
          src={imageUrl}
          style={styles.image}
        />
      </div>
      <div className="relative mt-64 text-4xl text-center bg-clip-text max-md:mt-10 max-md:max-w-full color:#FCFFFE">
        Your One-Stop Access to Decentralised
        <br />
        Asset Swapping
      </div>
      <div className="relative mt-10 text-xl font-medium text-center text-neutral-400 max-md:max-w-full">
        Welcome to WeaveSwap, where blockchain meets simplicity. Seamlessly
        exchange assets across different chains with confidence and ease.
      </div>
      <div className="flex relative gap-3 justify-center px-4 py-2.5 mt-10 text-lg font-medium text-center text-black whitespace-nowrap bg-white rounded-xl">
        <div className="grow self-start mt-1.5">Get Started</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c47d61438604bd759ab74ee55bd8599a6dc117d38ff4f42d2641affe16d5423f?apiKey=2df429e67a0d42c1be761c45de2a844e&"
          className="w-6 aspect-square"
        />
      </div>
      <div className="relative justify-between self-stretch px-16 py-6 mt-56 rounded-3xl border-solid border-[0.6px] border-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center font-medium text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1368717115cf0b1a02f0c5d3a3a608a4df1b8bf8055a0b5447539b44206d6d41?apiKey=2df429e67a0d42c1be761c45de2a844e&"
                className="self-center w-7 aspect-square"
              />
              <div className="mt-4 text-xl">Chain Supported</div>
              <div className="mt-4 text-base">10x chain supported</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center font-medium text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88f607436187877b822d4232f4d1d0cb71a74a1e3add36fb9d4f9f986bff8910?apiKey=2df429e67a0d42c1be761c45de2a844e&"
                className="self-center w-7 aspect-square"
              />
              <div className="mt-4 text-xl">Secure and Safe</div>
              <div className="mt-4 text-base">100% secure and safe</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center font-medium text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ab6252202ebcef4656c590b58fa5e47e05cf80d6f1ac1773f9eab0cd9b2d51?apiKey=2df429e67a0d42c1be761c45de2a844e&"
                className="self-center w-7 aspect-square"
              />
              <div className="mt-4 text-xl">Fast Transaction</div>
              <div className="mt-4 text-base">100x fast transaction</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow justify-center font-medium text-white whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8368fc3627fa98b21c107727196da55f3478596778e9d6d88e1926c73a746bea?apiKey=2df429e67a0d42c1be761c45de2a844e&"
                className="self-center w-7 aspect-square"
              />
              <div className="mt-4 text-xl">Active Transaction</div>
              <div className="mt-4 text-base">24/7 active transaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
