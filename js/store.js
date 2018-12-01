"use strict";

script["store"] = [
  "scene store with fadeIn",

  "show GC Neutral left",
  "show CB Neutral left",

  "Glam Cake and Coconut Bomb get to the store and walk up to the counter",

  "show Clerk Neutral right",

  "Clerk Why Hello Glam Cake and Coconut Bomb, how can I help you this fine Spectrum Day?",

  "GC We need eggs, sugar and butter for our celebration cake!",

  "show CB Excited left",
  "CB Oooooh could we get sprinkles too?",

  "GC Sure!...and a pack of sprinkles.",

  "Clerk I'll get that right for you, hold on.",

  "hide Clerk with fadeOut",
  "wait 3000",
  "show Clerk Bag-Happy right with fadeIn",

  "Clerk Here you go, that'll be 382 dollars and 15 cents.",

  "show GC Unsure left",
  "show CB Suspicious left",
  "GC Ususally that is A LOT less. Why are you charging so much?",

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
  "show GC Sad left",
  "show CB Sad left",
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

let Clerk = new Enemy(
  "Clerk",
  100,
  [
    ["Dolla Dolla Bill Yall!!!", 10],
    ["Mo Monay, Mo Problems (fo you!)", 15],
    ["I bust a cap in yo A-DOLLARSIGN-DOLLARSIGN!!!", 20],
    ["If I had a dollar for every girl who found me unattractive... They would eventually find me attractive...", 5],
    ["You may think I'm rich, but they're mostly ones...", 1]
  ],
  [
    "show Clerk Bag-Sad right",
    "Clerk Ugghhh... you have defeated me!",
    "Clerk Here are your things, have a nice day.",
    "You pay the Clerk a reasonable price for the goods, and leave",
    "jump fountain"
  ],
  [
    "show Clerk Bag-Happy right",
    "Clerk HAH!!! That'll show you!  Now pay that exorbinant fee I asked for earlier!",
    "jump store-shell-out"
  ]
);

script["store-powerup"] = [
  "show CB Power-Up left",
  "play music Fight loop",
  function () {
    fight(Clerk);
    return true;
  },
  "jump player-fight"
];
