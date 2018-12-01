"use strict";

var bus_early = {
  "Text": "Early morning?",
  "Do": "jump bus-stop-early-am"
}

var bus_powerup = {
  "Text": "Power Up",
  "Do": "jump bus-stop-encounter"
}


script["bus-stop"] = [
  "scene bus-stop with fadeIn",
  "show GC Neutral left",
  "show CB Neutral left",

  "You arrive at the bus stop...",

  "show Stranger Neutral right",

  "There is a man there already waiting",

  "GC: Hello! How are you?",

  "Stranger ..................fine............",

  "GC hhmmmm, ok.........",

  {"Choice": {
    "Rude": {
      "Text": "Hey rude much?",
      "Do": "jump bus-stop-rude"
    },
    "Early-AM": bus_early,
    "Power-up": bus_powerup
  }}
];

script["bus-stop-rude"] = [
  "show GC Scold-R",
  "GC Coconut Bomb, THAT'S rude.",
  "show CB Sad left",
  "CB Sorry......",
  {"Choice": {
    "Early-AM": bus_early,
    "Power-up": bus_powerup
  }}
];

script["bus-stop-early-am"] = [
  "show CB Neutral left",
  "Stranger Yeah.....late night too (yawn)",

  "CB Ooooookaaaay............",

  "jump bus-stop-awkward-wait"
];

// THE AWKWARD WAIT OF AWESOME!!!!
script["bus-stop-awkward-wait"] = [
  "All of you awkwardly wait for the bus...",

  "jump bus-stop-awkward-wait-fn"
];

script["bus-stop-awkward-wait-fn"] = [
  "...",
  {"Conditional": {
    "Condition": function() {
      return Math.random() > 0.9;
    },
    "True": "jump bus-stop-leave",
    "False": "jump bus-stop-awkward-wait-fn"
  }},
];

script["bus-stop-leave"] = [
  "The bus finally arrives and you get on",
  "jump town"
];

script["bus-stop-encounter"] = [
  "show CB Power-Up left",
  // Is this just some dude?  or are they one of MagmaMan's henchmen?
  {"Conditional": {
    "Condition": function() {
      return Math.random() < 0.5;
    },
    "True": "jump bus-stop-scared",
    "False": "jump bus-stop-henchman"
  }}
];

script["bus-stop-scared"] = [
  "show Stranger Scared right",

  "Stranger Oh, No! Please stop, I don't want to fight. Please leave me alone.",
  {"Choice": {
    "Sorry": {
      "Text": "Sorry...",
      "Do": "jump bus-stop-sorry"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump bus-stop-scared-powerup"
    }
  }}
];

script["bus-stop-scared-powerup"] = [
  "show Stranger Scared right",

  "show GC Scold-R",
  "show CB Sad left",
  "Glam Cake smacks Coconut Bomb on the back of the head",
  "show GC Neutral",
  "GC Sorry sir, he can be rather impertinent.",
  "show GC Scold-R",
  "Glam Cake glares at Coconut Bomb",
  "Coconut Bomb sulks",

  "show Stranger Neutral right",
  "Stranger It's fine, whatever...",
  "He takes a few steps away from you",
  "jump bus-stop-awkward-wait"
];

script["bus-stop-sorry"] = [
  "show CB Sad left",
  "The stranger takes a few steps away from you...",
  "jump bus-stop-awkward-wait"
];

let Stranger = new Enemy(
  "Stranger",
  50,
  [
    ["EYE LASORS!!!", 10],
    ["DHOOM LAZORZ!!!", 20],
    ["PEW PEW-PEW OUT MY EYES!!!!", 15],
    ["STRANGER DANGER!!!", 0],
    ["MAGMAMAN 4 EVAR!!!!!", 5]
  ],
  ["The stranger has been defeated by your awesomeness!",
   "jump town"],
  ["You lost to MagmaMans henchman: The Stranger...",
   "jump Hospital"]
);


script["bus-stop-henchman"] = [
  "show Stranger Angry right",
  "show GC Neutral left",
  "play music Fight loop",

  "Stranger ......How did you know?...",
  "Stranger It doesn't matter, MAGMAMAN will reward me for taking you out for him!",

  function () {
    fight(Stranger);
    return true;
  },

  "jump player-fight"
];
