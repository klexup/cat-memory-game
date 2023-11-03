import React from "react";

export default function Mistake({ setToggleMistake }) {
  return (
    <>
      <div className="you-failed-container">
        <img
          src="https://media2.giphy.com/media/rE5ivfsHKwcw9kyaBP/giphy.gif?cid=ecf05e47l2ok4lc45stpnalirjsv6jf9guknhx2wijwyyc1v&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          alt="cat picture"
        />
        <h1>you failed</h1>
        <button
          onClick={() => {
            setToggleMistake(false);
          }}
        >
          Try Again
        </button>
      </div>
    </>
  );
}
