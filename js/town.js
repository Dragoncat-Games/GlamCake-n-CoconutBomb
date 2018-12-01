"use strict";

script["town"] = [
  "scene crosswalk with fadeIn",

  "show GC Neutral left",

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
  "show GC Neutral center",
  "show Granny Neutral center",
  "Granny Oh! Thank you, it's always so hard on my own.",
  "show GC Neutral right",
  "show Granny Neutral right",
  "Glam Cake helps Granny across the intersection",
  "jump store"
];

script["town-nothing"] = [
  "Coconut Bomb keeps walking, but Glam Cake turns back and helps Granny.",
  "jump town-gc-help"
];

script["town-powerup"] = [
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
  "Glam Cake slaps Coconut Bomb",
  "GC You're being very rude today aren't you?",
  "Glam Cake goes to help Granny",
  "jump town-help"
];

script["town-henchman"] = [
  "show Granny Mad left",
  "Granny......How did you know?...It doesn't matter, MAGMAMAN will reward me for taking you out for him!",

  "Engage in fight if win -> police come -> Store",
  "Engage in fight if lose -> GAME OVER",

  "end"
];
