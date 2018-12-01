"use strict";

script["town"] = [
  "scene crosswalk with fadeIn",

  "show GC Neutral left",
  "show CB Neutral left",

  "The bus gets you to town and drops off all the passengers",
  "Glam Cake and Coconut Bomb walk up to the crosswalk",

  "show Granny Neutral left",
  "There is an old lady trying to cross the street and looks like she is having issues",

  "jump town-granny-choice"
];

script["town-granny-choice"] = [
  {"Choice": {
    "Help": {
      "Text": "Help Granny",
      "Do": "jump town-help"
    },
    "Nothing": {
      "Text": "Do nothing",
      "Do": "jump town-nothing"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump town-powerup"
    }
  }}
]

script["town-help"] = [
  "show GC Neutral center",
  "show CB Neutral center",
  "show Granny Neutral center",
  "Granny Oh! Thank you, it's always so hard on my own.",

  "show GC Neutral right",
  "show CB Neutral right",
  "show Granny Neutral right",
  "Coconut Bomb helps Granny across the intersection",

  "jump store"
];

script["town-gc-help"] = [
  "show GC Helpful center",
  "show Granny Neutral center",

  "Granny Oh! Thank you, it's always so hard on my own.",
  "show GC Helpful right",
  "show Granny Neutral right",

  "Glam Cake helps Granny across the intersection",
  "jump store"
];

script["town-nothing"] = [
  "show CB Neutral right",
  "Coconut Bomb keeps walking, but Glam Cake turns back and helps Granny.",
  "jump town-gc-help"
];

script["town-powerup"] = [
  "show CB Power-Up left",
  // your mild-mannered grandma?  or an evil henchman?
  {"Conditional": {
    "Condition": function() {
      return Math.random() < 0.5;
    },
    "True": "jump town-scared",
    "False": "jump town-henchman"
  }}
];

script["town-scared"] = [
  "show Granny Scared left",
  "Granny Oh, No! Please stop, I don't want to fight. Please leave me alone.",

  {"Choice": {
    "Sorry": {
      "Text": "Sorry...",
      "Do": "jump town-granny-choice"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump town-granny-encounter"
    }
  }}
];

script["town-granny-encounter"] = [
  {"Conditional": {
    "Condition": function() {
      return Math.random() < 0.5;
    },
    "True": "jump town-granny-encounter!",
    "False": "jump town-henchman"
  }}
];

script["town-granny-encounter!"] = [
  {"Conditional": {
    "Condition": function() {
      return Math.random() < 0.5;
    },
    "True": "jump town-gc-slap",
    "False": "jump town-henchman"
  }}
];

script["town-gc-slap"] = [
  "show CB sad left",
  "show GC Scold-R",
  "Glam Cake slaps Coconut Bomb",
  "GC You're being very rude today aren't you?",
  "Glam Cake goes to help Granny",
  "jump town-gc-help"
];

let Granny = new Enemy(
  "Granny",
  50,
  [
    ["ROCK THROW!!!", 5],
    ["YEAAAAAARRRRRGGGHHHHHH!!!!", 10],
    ["MAGMAMAN IS MY SUGAR DADDY!!!", 15],
    ["ROCK IN YOUR FACE!!!", 15]
  ],
  ["show Police Officer right",
   "Police Thank you for defeating MagmaMan's henchman Granny.",
   "Police We will take it from here.",
   "You are able to continue your quest for Spectrum Day Cake Ingredients",
   "jump store"],
  ["Granny has defeated you with her awesome skillz!!!",
   "jump Hospital"]
);

script["town-henchman"] = [
  "show Granny Angry right",
  "play music Fight loop",
  "Granny ......How did you know?",
  "Granny ...It doesn't matter, MAGMAMAN will reward me for taking you out for him!",

  function () {
    fight(Granny);
    return true;
  },
  "jump player-fight"
];
