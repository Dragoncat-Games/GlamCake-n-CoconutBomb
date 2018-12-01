"use strict";


var ending_rest = [
  "Newscaster BREAKING NEWS!!!!! Magma Man has returned and is destroying Middle Park!!!",
  "Newscaster Citizens of Almond Blossom, Please evacuate away from the city and keep out of the way of police......",
  "Newscaster WAIT! is that who I think it is?!",
  "show CB Front-Shocked",
  "Newscaster SPECTRUM!",
  "Newscaster Spectrum is here!",
  "Newscaster He's Stopping MagmaMan!",
  "Newscaster MagmaMan is down citizens! He is being restrained!",
  "Newscaster Looks Like our favorite hero got here in just the knick of time! We are saved!",

  "show CB Front-Sad",
  "CB (shocked) I missed seeing Spectrum... awww Shucks.",
  "THE END!",
  "jump end-credits"
];

script["Ending1"] = [
  "GC Ok, I'll go by myself, bye!",

  "scene family-room with fadeIn",
  "show CB Front-Happy with fadeIn",

  "Coconut Bomb goes to the family room to watch some TV.",

  "Time passes...",
  "show CB Front-Sad"
].concat(ending_rest);

script["Ending2"] = [
  "scene black",
  "Coconut Bomb runs home quickly without looking behind and makes it home safely",
  "show CB Front-Sad with fadeIn",
  "scene family-room with fadeIn"
].concat(ending_rest);

script["Hospital"] = [
  "scene KO with fadeIn",
  "wait 1000",

  "scene hospital with fadeIn",
  "show GC Sad-R right",
  "GC You're finally awake!",
  "GC I was so worried about you! Thankfully Spectrum showed up at the last minute and saved you!",
  "GC The doctors say you are going to be ok but that you will need to stay in the hospital a few days.",
  "show GC Neutral-R right",
  "GC (smile) When you get back home we'll make that cake, ok?",

  "jump end-credits"
];

script["dream-end"] = [
  "show GC Neutral-R right",
  "wait 100",
  "show GC Trans1-R right fadeIn",
  "wait 100",
  "show GC Trans2-R right fadeIn",
  "wait 100",
  "show Spectrum Angry-R right fadeIn",
  "wait 100",
  "show Spectrum Atk-Start-R right fadeIn",
  "wait 100",
  "show Spectrum Attack-R right fadeIn",

  "scene kitchen with fadeIn",
  "show CB Suspicious left",
  "show GC Neutral-R right",

  "CB I had a strange dream that you were Spectrum and Magma Man was back.",

  "show GC Unsure-R right",
  "GC Me? Spectrum? That's funny.",
  "show GC Neutral-R right",
  "GC As for Magma Man, don't you remember? You confronted him at the park yesterday. He's in jail now.",

  "show CB Shocked left",
  "CB Wow! Really?!",

  "GC Yep, Spectrum showed up at the end to finish the job and you got hit on the head.",

  "show CB Sad left",
  "CB So that's why my head hurts...",
  "show CB Excited left",
  "CB Is that cake I smell?",

  "GC Yep! It's almost done!",
  "jump end-credits"
];

script["game-over"] = [
  "show MM Atk-Start right",
  "MM MAGMA DEATH ATTAK!!!",
  function () {
    change_player_bar(2);
    return true;
  },
  "MagmaMan does a boatload of damage to you!",
  {"Choice": {
    "Help": {
      "Text": "GLAM CAKE HELP!!!",
      "Do": "jump the-end"
    },
    "My-Own": {
      "Text": "I'm on my own.",
      "Do": "jump the-end"
    }
  }}
];

script["the-end"] = [
  "scene game-over with fadeIn",
  "Coconut Bomb was killed by MagmaMan...",
  "Game Over",
  "jump end-credits"
];

script["end-credits"] = [
  hide_fight_bars,
  "scene title with fadeIn",
  "Story by Megan & Justin Patera",
  "Images drawn and/or processed by Megan Patera",
  "You can find her work at blue-ninja.com",
  "Coding by Justin Patera",
  "Monogatari was used as the visual novel library",
  "more words",
  "more thanks",
  "i need some sleep...",
  "end"
];
