"use strict";

script["magma-park"] = [

  "as you start walking away from the park people start screaming, you hear alarms and crashing...",

  "scene magma-park with fadeIn",
  "show MM Angry right",

  "It's MAGMAMAN!!!!!!!",

  "show CB Shocked left",
  "show GC Serious left",

  "He's back!!!!!",

  "CB Magma Man? But how?",
  "CB I thought you told me he self destructed when he destroyed my family? Didn't he Glamcake?",

  "GC I thought he did, Coconut Bomb, there was no sign of anyone left alive when he destoyed that island.",
  "GC You only survived because you had been tucked away safe from the blast before he blew his top.",

  "show CB Angry left",

  {"Choice": {
    "Power-Up": {
      "Text": "Power Up",
      "Do": "jump fight-magmaman"
    },
    "Run-Away": {
      "Text": "Run away",
      "Do": "jump Ending2"
    }
  }},

  "end"
];

let MagmaMan = new Enemy(
  "MM",
  500,
  [
    ["MAGMA THROW!!!", 40],
    ["LAVA BLAST!!!", 35],
    ["DEATH EXPLOSION!!!", 45]
  ],
  ["If you see this, something is wrong..."],
  ["jump hospital"]
);

script["fight-magmaman"] = [
  "show CB Power-Up left",
  "play music Fight loop",
  "CB I've got MagmaMan, Glam Cake, get yourself to safety",
  function () {
    fight(MagmaMan);
    return true;
  },
  "jump player-fight"
];

script["spectrum-appears"] = [
  "wait 500",
  "show GC Trans1 left",
  "wait 500",
  "show GC Trans2 left",
  "wait 500",
  "show Spectrum Angry left",

  "MM NOOOOOOOOOOO!!!! Not Spectrum!!!!",

  "show Spectrum Atk-Start left",
  "wait 500",
  "show Spectrum Attack left",
  "wait 500",
  function () {
    change_enemy_bar(35);
    return true;
  },
  "show Spectrum Angry left",

  "show MM Atk-Start left",
  "wait 250",
  "show Spectrum Atk-Start left",
  "wait 250",
  "show Spectrum Attack left",
  function () {
    change_enemy_bar(0);
    return true;
  },
  "show Spectrum Angry left",
  "MM NOOOOOOOOOOOOOOOOO!!!!!!!!!!!!",
  "hide MM",

  "show CB Shocked left",
  "CB YOU?! are SPECTRUM???!!!!",

  "show Spectrum Angry right",
  "wait 250",
  "show GC Trans2 right fadeIn",
  "wait 250",
  "show GC Trans1-R right fadeIn",
  "wait 250",
  "show GC Neutral-R right fadeIn",

  "GC Yep!",

  "CB man......and I thought Spectrum was a dude or something..",

  "show GC Unsure-R right",
  "GC yeah.....a lot of people think that... don't know why",

  "CB so that story you told me about how Spectrum saved me on island...that was you?",

  "show GC Sad-R right",
  "GC I arrived to late to do any real saving.",
  "GC We all thought Magma Man died in the explosion.",
  "GC I found you tucked away in the debris...the only survivor.",
  "GC I retired, adopted you and brought you home. The least I could do for failing to save your family then.",

  "CB Glam Cake, you are my family. All this time I;ve been LIVING with my favorite Super Hero and you didn't say anything?????",

  "GC Well, no....otherwise it could put us all in danger.",
  "Gc Now that you know, you need to keep it a secret.",
  "GC Spectrum showed up, defeated Magma Man and left before the authorities showed up. IT was cool, the end.",

  {"Choice": {
    "OK": {
      "Text": "OK",
      "Do": "jump spectrum-ok"
    },
    "Woah": {
      "Text": "WHOA back up the intensity Sis.",
      "Do": "jump spectrum-ok"
    },
    "Tell": {
      "Text": "I'm gonna tell everyone!",
      "Do": "jump spectrum-tell"
    },
    "Power-Up": {
      "Text": "Power Up",
      "Do": "jump spectrum-power-up"
    }
  }}
];

script["on-my-own"] = [
  "show GC Sad-R",
  "show CB Angry left",
  "GC Please let me help!",

  "CB He took everything from me! I'm doing this on my own.",

  "GC Coconut Bomb, you can't do this on your own, listen to me!",

  "CB Listen to you? Why? You aren't even my real family.",

  "show GC Sad-R",
  "GC you...you don't mean that...",

  "show CB Angry-Power left",
  "CB Yes, I DO. NOW GO AWAY.",

  "Glam Cake leaves crying...",
  "hide GC",

  "jump game-over"
];

script["spectrum-ok"] = [
  "show GC Serious-R right",
  "GC This is serious,Coconut Bomb.",
  "GC All the stuff for the cake! Oh No!",

  "show CB Neutral left",
  "CB Oh well, I got to meet spectrum, it's ok.",

  "show GC Neutral-R right",
  "Glamcake smiles.",
  "THE END......",
  "jump the-end"
];

script["spectrum-tell"] = [
  "show GC Neutral-R right",
  "wait 250",
  "show GC Trans1-R right fadeIn",
  "wait 250",
  "show GC Trans2-R right fadeIn",
  "wait 250",
  "show Spectrum Angry-R right fadeIn",
  {"Choice": {
    "JK": {
      "Text": "Just Kidding",
      "Do": "jump spectrum-ok"
    },
    "Power-Up": {
      "Text": "Power Up",
      "Do": "jump dream-end"
    }
  }}
];

script["spectrum-power-up"] = [
  "show CB Power-Up left",
  "GC Really, Coconut Bomb? Aren't you tired yet?",
  {"Choice": {
    "yes": {
      "Text": "Yes",
      "Do": "jump spectrum-ok"
    },
    "No": {
      "Text": "No Way!",
      "Do": "jump spectrum-ok"
    },
    "Power-Up": {
      "Text": "Power Up",
      "Do": "jump spectrum-ok"
    }
  }}
];
