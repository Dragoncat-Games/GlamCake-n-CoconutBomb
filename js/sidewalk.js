"use strict";

let Cat = new Enemy(
  "Cat",
  20,
  [
    ["MEOW!!! (Translation: FIRE BREATH ATTACK!!!)", 1],
    ["mrrrow? (Translation: aren't I cute?)", 0],
    ["HISSSS! (Translation: STAY BACK! I MEAN IT!)", 0]
  ],
  ["You have prevailed against the lazy fire-breathing cat.",
   "jump bus-stop"]
);

script["sidewalk-scene"] = [
  "scene neighborhood with fadeIn",

  "show GC Neutral left",
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

script["sidewalk-encounter"] = [
  function () {
    fight(Cat);
    return true;
  },
  "jump player-fight",
];

// i don't know if i'll need this stuff...
script["sidewalk-powerup"] = [];
script["sidewalk-powerup-fn"] = [
  function() {
    if (storage.player.breakfast) {
      rand_select(
        "sidewalk-powerup",
        "sidewalk-encounter",
        [ "GC Not in the House",
          "GC Please Stop",
          "GC SRSLY!!!???",
          "GC Stop scaring the neigbors",
          "GC Keep it up and you'll be sorry",
          "GC RAINBOW PUNCH!",
          "GC I'm not fighting you",
          "GC not funny",
          "GC Powering up won't solve all your problems",
          "GC Are you gonna do this forever?" ,
          "GC Ok, I'm gonna leave now",
          "GC  All that energy may break the windows",
          "GC Do you want Breakfast or not?"
        ])
    } else {
      storage.player.breakfast = true;
      script["sidewalk-powerup"] = ["GC Not in the House",
        "jump " + "sidewalk-encounter"];
    }

    return true;
  },
  "jump sidewalk-powerup"
];
