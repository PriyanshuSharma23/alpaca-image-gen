import React, { useState } from "react";
import "./App.css";

import nose from "./assets/nose.png";
import blue50 from "./assets/backgrounds/blue50.png";
import defaultEars from "./assets/ears/default.png";
import defaultEyes from "./assets/eyes/default.png";
import defaultHair from "./assets/hair/default.png";
import defaultLeg from "./assets/leg/default.png";
import defaultMouth from "./assets/mouth/default.png";
import defaultNeck from "./assets/neck/default.png";

import {
  accessoriesArr,
  backgroundsArr,
  earsArr,
  eyesArr,
  hairArr,
  legArr,
  mouthArr,
  neckArr,
} from "./selectionParse";

import SelectionParse from "./selectionParse";

import domtoimage from "dom-to-image";
import download from "downloadjs";

const categories = [
  "Accessories",
  "Backgrounds",
  "Ears",
  "Eyes",
  "Hair",
  "Leg",
  "Mouth",
  "Neck",
];

function App() {
  const [selectedSelection, setSelectedSelection] =
    useState<string>("Accessories");
  const [accessories, setAccessories] = useState<string>("");
  const [background, setBackground] = useState<string>(blue50);
  const [ears, setEars] = useState<string>(defaultEars);
  const [eyes, setEyes] = useState<string>(defaultEyes);
  const [hair, setHair] = useState<string>(defaultHair);
  const [leg, setLeg] = useState<string>(defaultLeg);
  const [mouth, setMouth] = useState<string>(defaultMouth);
  const [neck, setNeck] = useState<string>(defaultNeck);

  function returnRandomItem(arr: string[]): string {
    function randomInt(n: number) {
      return Math.floor(Math.random() * n);
    }
    return arr[randomInt(arr.length)];
  }

  const handleRandomize = () => {
    setAccessories(returnRandomItem(accessoriesArr));
    setBackground(returnRandomItem(backgroundsArr));
    setEars(returnRandomItem(earsArr));
    setEyes(returnRandomItem(eyesArr));
    setHair(returnRandomItem(hairArr));
    setLeg(returnRandomItem(legArr));
    setMouth(returnRandomItem(mouthArr));
    setNeck(returnRandomItem(neckArr));
  };

  const handleDownload = () => {
    const alpacaCanvasNode = document.getElementById("alpaca");
    if (alpacaCanvasNode) {
      domtoimage.toPng(alpacaCanvasNode, { quality: 1 }).then(async (dataUrl) => {
        download(dataUrl, "my-comic-alpaca.png");
      });
    }
  };

  return (
    <div className="App">
      {/* Decorative bursts */}
      <div className="burst top-right">ZAP!</div>
      <div className="burst bottom-left">WOW!</div>

      {/* Comic Title */}
      <div className="comic-title">
        <span className="star-decoration">★</span>
        <span className="star-decoration">★</span>
        <span className="star-decoration">✦</span>
        <h1>Alpaca Generator</h1>
      </div>

      <div className="content-section">
        {/* Alpaca Display Panel */}
        <div className="alpaca-section">
          <div className="alpaca-image" id="alpaca">
            <img src={nose} alt="nose" />
            <img src={accessories} style={{ zIndex: 100 }} alt="" />
            <img src={background} style={{ zIndex: -100 }} alt="" />
            <img src={ears} alt="ears" />
            <img src={eyes} style={{ zIndex: 10 }} alt="eyes" />
            <img src={hair} style={{ zIndex: 0 }} alt="hair" />
            <img src={leg} alt="leg" />
            <img src={mouth} style={{ zIndex: 10 }} alt="mouth" />
            <img src={neck} style={{ zIndex: -10 }} alt="neck" />
          </div>

          <div className="button-section">
            <button className="action-btn random" onClick={handleRandomize}>
              🎲 Random!
            </button>
            <button className="action-btn download" onClick={handleDownload}>
              📥 Download
            </button>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="controls-panel">
          <div className="selection-area">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedSelection === category ? "active" : ""
                }`}
                onClick={() => setSelectedSelection(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="options-container">
            <h3>{selectedSelection}</h3>
            <div className="options-grid">
              <SelectionParse
                selected={selectedSelection}
                setAccessories={setAccessories}
                setBackground={setBackground}
                setEars={setEars}
                setEyes={setEyes}
                setHair={setHair}
                setLeg={setLeg}
                setMouth={setMouth}
                setNeck={setNeck}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="comic-footer">
        Made with ♥ — Create your own alpaca!
      </div>
    </div>
  );
}

export default App;
