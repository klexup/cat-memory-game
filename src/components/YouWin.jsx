import React from "react";

export default function YouWin() {
  return (
    <>
      <div className="you-win-container">
        <h1>YouWin!!!</h1>
        <img
          src="https://media0.giphy.com/media/eLv7gJpxqiQtbNNQUe/giphy.gif?cid=ecf05e47dx1uu8x8zyzle1ybive45q6n587ed1m4i09xqbtm&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          alt="random cat image"
          className="firstCat select-disable"
          draggable="false"
        />
        <img
          src="https://media0.giphy.com/media/4poYoaMMcRkEzVPmnb/giphy.gif?cid=ecf05e47pie5f1a9qfpdqso51tfhqon7ibbo17a4km6b1swk&ep=v1_gifs_related&rid=giphy.gif&ct=s"
          alt="random cat image"
          className="secondCat select-disable"
          draggable="false"
        />
      </div>
    </>
  );
}
