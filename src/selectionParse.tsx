import React, { FC } from "react";

//ACCESSORIES
import earings from "./assets/accessories/earings.png";
import flower from "./assets/accessories/flower.png";
import glasses from "./assets/accessories/glasses.png";
import headphone from "./assets/accessories/headphone.png";

//BACKGROUNDS
import blue50 from "./assets/backgrounds/blue50.png";
import blue60 from "./assets/backgrounds/blue60.png";
import blue70 from "./assets/backgrounds/blue70.png";

import darkblue30 from "./assets/backgrounds/darkblue30.png";
import darkblue50 from "./assets/backgrounds/darkblue50.png";
import darkblue70 from "./assets/backgrounds/darkblue70.png";

import green50 from "./assets/backgrounds/green50.png";
import green60 from "./assets/backgrounds/green60.png";
import green70 from "./assets/backgrounds/green70.png";

import grey40 from "./assets/backgrounds/grey40.png";
import grey70 from "./assets/backgrounds/grey70.png";
import grey80 from "./assets/backgrounds/grey80.png";

import red50 from "./assets/backgrounds/red50.png";
import red60 from "./assets/backgrounds/red60.png";
import red70 from "./assets/backgrounds/red70.png";

import yellow50 from "./assets/backgrounds/yellow50.png";
import yellow60 from "./assets/backgrounds/yellow60.png";
import yellow70 from "./assets/backgrounds/yellow70.png";

//EARS
import defaultEars from "./assets/ears/default.png";
import tiltBackwardEars from "./assets/ears/tilt-backward.png";
import tiltForwardEars from "./assets/ears/tilt-forward.png";

//EYES
import angry from "./assets/eyes/angry.png";
import defaultEyes from "./assets/eyes/default.png";
import naughty from "./assets/eyes/naughty.png";
import panda from "./assets/eyes/panda.png";
import smart from "./assets/eyes/smart.png";
import star from "./assets/eyes/star.png";

//HAIR
import bang from "./assets/hair/bang.png";
import curls from "./assets/hair/curls.png";
import defaultHair from "./assets/hair/default.png";
import elegant from "./assets/hair/elegant.png";
import fancy from "./assets/hair/fancy.png";
import short from "./assets/hair/short.png";

//LEG
import bubbleTea from "./assets/leg/bubble-tea.png";
import cookie from "./assets/leg/cookie.png";
import defaultLeg from "./assets/leg/default.png";
import gameConsole from "./assets/leg/game-console.png";
import tiltBackwardLeg from "./assets/leg/tilt-backward.png";
import tiltForwardLeg from "./assets/leg/tilt-forward.png";

//MOUTH
import astonished from "./assets/mouth/astonished.png";
import defaultMouth from "./assets/mouth/default.png";
import eating from "./assets/mouth/eating.png";
import laugh from "./assets/mouth/laugh.png";
import tongue from "./assets/mouth/tongue.png";

//NECK
import bendBackward from "./assets/neck/bend-backward.png";
import bendForward from "./assets/neck/bend-forward.png";
import defaultNeck from "./assets/neck/default.png";
import thick from "./assets/neck/thick.png";

export const accessoriesArr = [earings, flower, glasses, headphone];
export const backgroundsArr = [
  blue50,
  blue60,
  blue70,
  darkblue30,
  darkblue50,
  darkblue70,
  green50,
  green60,
  green70,
  grey40,
  grey70,
  grey80,
  red50,
  red60,
  red70,
  yellow50,
  yellow60,
  yellow70,
];
export const earsArr = [defaultEars, tiltBackwardEars, tiltForwardEars];
export const eyesArr = [angry, defaultEyes, naughty, panda, smart, star];
export const hairArr = [bang, curls, defaultHair, elegant, fancy, short];
export const legArr = [
  bubbleTea,
  cookie,
  defaultLeg,
  gameConsole,
  tiltBackwardLeg,
  tiltForwardLeg,
];
export const mouthArr = [astonished, defaultMouth, eating, laugh, tongue];
export const neckArr = [defaultNeck, bendBackward, bendForward, thick];

interface IProps {
  selected: string;
  setAccessories: React.Dispatch<React.SetStateAction<string>>;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  setEars: React.Dispatch<React.SetStateAction<string>>;
  setEyes: React.Dispatch<React.SetStateAction<string>>;
  setHair: React.Dispatch<React.SetStateAction<string>>;
  setLeg: React.Dispatch<React.SetStateAction<string>>;
  setMouth: React.Dispatch<React.SetStateAction<string>>;
  setNeck: React.Dispatch<React.SetStateAction<string>>;
}

const SelectionParse: FC<IProps> = ({
  selected,
  setAccessories,
  setBackground,
  setEars,
  setEyes,
  setHair,
  setLeg,
  setMouth,
  setNeck,
}) => {
  switch (selected) {
    default:
      return <div>Select a category above!</div>;

    case "Accessories":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setAccessories("")}
          >
            ❌ None
          </button>
          <button
            className="selection-button"
            onClick={() => setAccessories(earings)}
          >
            💎 Earrings
          </button>
          <button
            className="selection-button"
            onClick={() => setAccessories(flower)}
          >
            🌸 Flower
          </button>
          <button
            className="selection-button"
            onClick={() => setAccessories(glasses)}
          >
            🕶️ Glasses
          </button>
          <button
            className="selection-button"
            onClick={() => setAccessories(headphone)}
          >
            🎧 Headphone
          </button>
        </>
      );

    case "Backgrounds":
      return (
        <>
          <button
            className="bg-select blue50"
            onClick={() => setBackground(blue50)}
            title="Blue 50"
          />
          <button
            className="bg-select blue60"
            onClick={() => setBackground(blue60)}
            title="Blue 60"
          />
          <button
            className="bg-select blue70"
            onClick={() => setBackground(blue70)}
            title="Blue 70"
          />
          <button
            className="bg-select darkblue30"
            onClick={() => setBackground(darkblue30)}
            title="Dark Blue 30"
          />
          <button
            className="bg-select darkblue50"
            onClick={() => setBackground(darkblue50)}
            title="Dark Blue 50"
          />
          <button
            className="bg-select darkblue70"
            onClick={() => setBackground(darkblue70)}
            title="Dark Blue 70"
          />
          <button
            className="bg-select green50"
            onClick={() => setBackground(green50)}
            title="Green 50"
          />
          <button
            className="bg-select green60"
            onClick={() => setBackground(green60)}
            title="Green 60"
          />
          <button
            className="bg-select green70"
            onClick={() => setBackground(green70)}
            title="Green 70"
          />
          <button
            className="bg-select grey40"
            onClick={() => setBackground(grey40)}
            title="Grey 40"
          />
          <button
            className="bg-select grey70"
            onClick={() => setBackground(grey70)}
            title="Grey 70"
          />
          <button
            className="bg-select grey80"
            onClick={() => setBackground(grey80)}
            title="Grey 80"
          />
          <button
            className="bg-select red50"
            onClick={() => setBackground(red50)}
            title="Red 50"
          />
          <button
            className="bg-select red60"
            onClick={() => setBackground(red60)}
            title="Red 60"
          />
          <button
            className="bg-select red70"
            onClick={() => setBackground(red70)}
            title="Red 70"
          />
          <button
            className="bg-select yellow50"
            onClick={() => setBackground(yellow50)}
            title="Yellow 50"
          />
          <button
            className="bg-select yellow60"
            onClick={() => setBackground(yellow60)}
            title="Yellow 60"
          />
          <button
            className="bg-select yellow70"
            onClick={() => setBackground(yellow70)}
            title="Yellow 70"
          />
        </>
      );

    case "Ears":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setEars(defaultEars)}
          >
            👂 Default
          </button>
          <button
            className="selection-button"
            onClick={() => setEars(tiltBackwardEars)}
          >
            ↩️ Tilt Back
          </button>
          <button
            className="selection-button"
            onClick={() => setEars(tiltForwardEars)}
          >
            ↪️ Tilt Forward
          </button>
        </>
      );

    case "Eyes":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setEyes(defaultEyes)}
          >
            👀 Default
          </button>
          <button
            className="selection-button"
            onClick={() => setEyes(angry)}
          >
            😠 Angry
          </button>
          <button
            className="selection-button"
            onClick={() => setEyes(naughty)}
          >
            😏 Naughty
          </button>
          <button
            className="selection-button"
            onClick={() => setEyes(panda)}
          >
            🐼 Panda
          </button>
          <button
            className="selection-button"
            onClick={() => setEyes(smart)}
          >
            🤓 Smart
          </button>
          <button
            className="selection-button"
            onClick={() => setEyes(star)}
          >
            ⭐ Star
          </button>
        </>
      );

    case "Hair":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setHair(defaultHair)}
          >
            💇 Default
          </button>
          <button
            className="selection-button"
            onClick={() => setHair(bang)}
          >
            ✂️ Bang
          </button>
          <button
            className="selection-button"
            onClick={() => setHair(curls)}
          >
            🌀 Curls
          </button>
          <button
            className="selection-button"
            onClick={() => setHair(elegant)}
          >
            👑 Elegant
          </button>
          <button
            className="selection-button"
            onClick={() => setHair(fancy)}
          >
            ✨ Fancy
          </button>
          <button
            className="selection-button"
            onClick={() => setHair(short)}
          >
            📐 Short
          </button>
        </>
      );

    case "Leg":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setLeg(defaultLeg)}
          >
            🦵 Default
          </button>
          <button
            className="selection-button"
            onClick={() => setLeg(bubbleTea)}
          >
            🧋 Bubble Tea
          </button>
          <button
            className="selection-button"
            onClick={() => setLeg(cookie)}
          >
            🍪 Cookie
          </button>
          <button
            className="selection-button"
            onClick={() => setLeg(gameConsole)}
          >
            🎮 Game
          </button>
          <button
            className="selection-button"
            onClick={() => setLeg(tiltBackwardLeg)}
          >
            ↩️ Tilt Back
          </button>
          <button
            className="selection-button"
            onClick={() => setLeg(tiltForwardLeg)}
          >
            ↪️ Tilt Forward
          </button>
        </>
      );

    case "Mouth":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setMouth(defaultMouth)}
          >
            😊 Default
          </button>
          <button
            className="selection-button"
            onClick={() => setMouth(astonished)}
          >
            😮 Astonished
          </button>
          <button
            className="selection-button"
            onClick={() => setMouth(eating)}
          >
            😋 Eating
          </button>
          <button
            className="selection-button"
            onClick={() => setMouth(laugh)}
          >
            😄 Laugh
          </button>
          <button
            className="selection-button"
            onClick={() => setMouth(tongue)}
          >
            😛 Tongue
          </button>
        </>
      );

    case "Neck":
      return (
        <>
          <button
            className="selection-button"
            onClick={() => setNeck(defaultNeck)}
          >
            🦒 Default
          </button>
          <button
            className="selection-button"
            onClick={() => setNeck(bendBackward)}
          >
            ↩️ Bend Back
          </button>
          <button
            className="selection-button"
            onClick={() => setNeck(bendForward)}
          >
            ↪️ Bend Forward
          </button>
          <button
            className="selection-button"
            onClick={() => setNeck(thick)}
          >
            💪 Thick
          </button>
        </>
      );
  }
};

export default SelectionParse;
