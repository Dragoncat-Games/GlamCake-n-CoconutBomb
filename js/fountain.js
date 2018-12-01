"use strict";

script["fountain"] = [
  "scene park with fadeIn",

  "show GC Neutral left",
  "show CB Excited-Bag left",

  "Walking past fountain in Park, Duck Flys by and grabs sprinkles out of the top of the bag Coconut Bomb is carrying.",

  "show CB Grumpy-Bag left",
  "show Duck Grab middle left with fadeIn",
  "wait 500",
  "show Duck Grab middle center",
  "wait 500",
  "show Duck Landing middle right",
  "wait 500",
  "show Duck Landed right",

  {"Choice": {
    "Hey": {
      "Text": "Hey! Give that back!",
      "Do": "jump fountain-encounter"
    },
    "Darn": {
      "Text": "Darn... Oh well...",
      "Do": "jump magma-park"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump fountain-encounter"
    }
  }}

];

let Duck = new Enemy(
  "Duck",
  50,
  [
    ["QUACK!!! (Translation: WEIRD BUBBLE ATTACK!!!)", 10],
    ["WAT!?!? (Translation: WHY AM I STEALING SPRINKLES?!?!?)", 5],
    ["HOOOOONNNKKK!!!!!! (Translation: MOAR WEIRD BUBBLEZ!!!!)", 20]
  ],
  [
    "hide Duck",
    "show CB Excited-Bag left",
    "show GC Neutral-R right",
    "CB HAH!!! Take that duck!!!",
    "GC Let's be on our way Coco-sweetie",
    "jump magma-park"
  ],
  [
    "show CB Bag-Sad left",
    "show GC Sad-R right",
    "CB NOOOOOOOO!!!!!!!!! MY SPRINKLES!!!!!!!!!",
    "GC It's okay Coco-sweetie, we can still have our cake",
    "jump magma-park"
  ]
);

script["fountain-encounter"] = [
  "play music Fight loop",
  function () {
    fight(Duck);
    return true;
  },
  "jump player-fight"
];
