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

import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import  download  from "downloadjs";
// import { toPng } from "html-to-png";

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

  return (
    <div className="App">
      <h1>Alpaca Image Generator</h1>
      <div className="content-section">
        <div className="alpaca-section">
          <div className="alpaca-image" id="alpaca">
            <img src={nose} />
            <img src={accessories} style={{ zIndex: 100 }} alt="" />
            <img src={background} style={{ zIndex: -100 }} alt="" />
            <img src={ears} alt="" />
            <img src={eyes} style={{ zIndex: 10 }} alt="" />
            <img src={hair} style={{ zIndex: 0 }} alt="" />
            <img src={leg} alt="" />
            <img src={mouth} style={{ zIndex: 10 }} alt="" />
            <img src={neck} style={{ zIndex: -10 }} alt="" />
          </div>
          <div className="button-section">
            <button
              onClick={() => {
                setAccessories(returnRandomItem(accessoriesArr));
                setBackground(returnRandomItem(backgroundsArr));
                setEars(returnRandomItem(earsArr));
                setEyes(returnRandomItem(eyesArr));
                setHair(returnRandomItem(hairArr));
                setLeg(returnRandomItem(legArr));
                setMouth(returnRandomItem(mouthArr));
                setNeck(returnRandomItem(neckArr));
              }}
            >
              Random Alpaca
            </button>
            <button
              onClick={() => {
                const alpacaCanvasNode = document.getElementById("alpaca");
                if(alpacaCanvasNode){
                domtoimage.toPng(alpacaCanvasNode,{quality:1}).then(async (dataUrl) => {
                  console.log(dataUrl)
                  download(dataUrl, "my-alpaca")
                })
                }}
              }
            >
              Download Alpaca
            </button>
          </div>
        </div>
        <div className="selection-area">
          <button
            onClick={() => {
              setSelectedSelection("Accessories");
            }}
          >
            Accessories
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Backgrounds");
            }}
          >
            Backgrounds
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Ears");
            }}
          >
            Ears
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Eyes");
            }}
          >
            Eyes
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Hair");
            }}
          >
            Hair
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Leg");
            }}
          >
            Leg
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Mouth");
            }}
          >
            Mouth
          </button>
          <button
            onClick={() => {
              setSelectedSelection("Neck");
            }}
          >
            Neck
          </button>
        </div>
        <div className="">
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
  );
}

export default App;
