"use strict";

script["store"] = [
  "scene store with fadeIn",

  "Glam Cake and Coconut Bomb get to the store and walk up to the counter",

  "Clerk Why Hello Glam Cake and Coconut Bomb, how can I help you this fine Spectrum Day?",

  "GC We need eggs, sugar and butter for our celebration cake!",

  "CB Oooooh could we get sprinkles too?",

  "GC Sure!...and a pack of sprinkles.",

  "Clerk I'll get that right for you, hold on.",

// (disapears from view, reappears with everthing)
  "Clerk Here you go, that'll be $382.15 cents.",

  "GC (brow furrow) Ususally that is A LOT less. why are you charging so much?",

  "Clerk Well, It's Spectrum day and they are making me work even though it is a Holiday so I want more money.",

  {"Choice": {
    "Sense": {
      "Text": "That makes sense...",
      "Do": "jump store-shell-out"
    },
    "Not-Right": {
      "Text": "That's not right!",
      "Do": "jump store-not-right"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump store-powerup"
    }
  }}
];

script["store-shell-out"] = [
  "You sadly shell out the money and leave to return home...",
  "jump fountain"
]

script["store-not-right"] = [
  "Clerk Right or not that's what I'm charging take it or leave it.",

  {"Choice": {
    "Fine": {
      "Text": "Fine... We'll pay...",
      "Do": "jump store-shell-out"
    },
    "No": {
      "Text": "No, we'll go some place else",
      "Do": "jump store-nope"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump store-powerup"
    }
  }}
];

script["store-nope"] = [
  "Clerk No! Wait!....fine, fine, pay the usual price...",
  "You pay the Clerk a reasonable price for the goods, and leave",
  "jump fountain"
];

script["store-powerup"] = [
  "If win -> pay usual price -> fountain",
  "If lose -> Sadly Pay -> fountain",
  "jump fountain"
];
