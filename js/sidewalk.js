"use strict";

script["sidewalk-scene"] = [
  "scene neighborhood with fadeIn",

  "show GC Neutral left",
  "show CB Neutral left",
  "show Cat Asleep right",

  "Cat prrrrr",
  "You see a cat laying in the sidewalk",
  "What do you do?",
  "Cat prr?",

  {"Choice": {
    "Walk-Around": {
      "Text": "Walk Around the cat.",
      "Do": "jump sidewalk-walk-around"
    },
    "Power-up": {
      "Text": "Power Up",
      "Do": "jump sidewalk-encounter"
    }
  }}
];

script["sidewalk-walk-around"] = [

  "show Cat Awake right",
  "Cat meow...",

  "You walk around the lazy cat",

  "show Cat Asleep right",
  "Cat meeeoowwww",

  "jump bus-stop"
];

let Cat = new Enemy(
  "Cat",
  20,
  [
    ["MEOW!!! (Translation: FIRE BREATH ATTACK!!!)", 1],
    ["mrrrow? (Translation: aren't I cute?)", 0],
    ["HISSSS! (Translation: STAY BACK! I MEAN IT!)", 0]
  ],
  ["You have prevailed against the lazy fire-breathing cat.",
   "jump bus-stop"],
  ["You lost to a cat...",
   "Seriously???",
   "I don't even think it's possible to get here...",
   "jump hospital"]
);

script["sidewalk-encounter"] = [
  "show CB Power-Up left",
  "play music Fight loop",
  function () {
    fight(Cat);
    return true;
  },
  "jump player-fight"
];
