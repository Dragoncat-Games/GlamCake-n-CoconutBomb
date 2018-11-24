"use strict";

script["town"] = [
  "scene red with fadeIn",

  "The bus gets you to town and drops off all the passengers",
  "Glam Cake and Coconut Bomb walk up to the crosswalk",
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
  "Granny Oh! Thank you, it's always so hard on my own.",
  "jump store"
];

script["town-nothing"] = [
  "Coconut Bomb keeps walking, but Glam Cake turns back and helps Granny.",
  "jump town-help"
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
  "Granny......How did you know?...It doesn't matter, MAGMAMAN will reward me for taking you out for him!",

  "Engage in fight if win -> police come -> Store",
  "Engage in fight if lose -> GAME OVER",

  "end"
];
