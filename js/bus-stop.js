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
  "You arrive at the bus stop...",
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
  "GC Coconut Bomb, THAT'S rude.",
  "CB Sorry......",
  {"Choice": {
    "Early-AM": bus_early,
    "Power-up": bus_powerup
  }}
];

script["bus-stop-early-am"] = [
  "Stranger Yeah.....late night too (yawn)",

  "CB Ooooookaaaay............",

  "jump bus-stop-awkward-wait"
];

// THE AWKWARD WAIT OF AWESOME!!!!
script["bus-stop-awkward-wait"] = [
  "All of you awkwardly wait for the bus...",
  function() {
    storage.player.wait_times = 0;
    return true;
  },

  "jump bus-stop-awkward-wait-fn"
];

script["bus-stop-awkward-wait-fn"] = [
  "...",
  {"Conditional": {
    "Condition": function() {
      storage.player.wait_times += 1;
      return Math.random() > 1/storage.player.wait_times;
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

script["bus-stop-scared-powerup"] =[
  "Glam Cake smacks Coconut Bomb on the back of the head",
  "GC Sorry sir, he can be rather impertinent.",
  "Glam Cake glares at Coconut Bomb",
  "Coconut Bomb sulks",

  "Stranger It's fine, whatever...",
  "He takes a few steps away from you",
  "jump bus-stop-awkward-wait"
];

script["bus-stop-sorry"] = [
  "The stranger takes a few steps away from you...",

  "jump bus-stop-awkward-wait"
];

script["bus-stop-henchman"] = [
  "Stranger ......How did you know?...",
  "Stranger It doesn't matter, MAGMAMAN will reward me for taking you out for him!",

  "insert fight here",

  "Engage in fight if win -> bus comes -> SCENE #5",
  "Engage in fight if lose -> GAME OVER",

  "jump town"
];
