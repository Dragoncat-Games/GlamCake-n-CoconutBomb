"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {

};

// Define the notifications used in the game
let notifications = {

};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {
  "Main": "elevatormusic2.mp3",
  "Fight": "fight-theme.mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
  "title": "glamcake-and-coconut-bomb-title.jpg",
  "kitchen": "kitchen-scene.jpg",
  "neighborhood": "neighborhood.jpg",
  "bus-stop": "bus-stop-scene.jpg",
  "crosswalk": "city-crosswalk-scene.jpg",
  "family-room": "family-room.jpg",
  "hospital": "hospital-room.jpg",
  "store": "store-scene.jpg",
  "park": "park-scene.jpg",
  "magma-park": "magma-park-scene.jpg",
  "KO": "KO.png",
  "game-over": "game-over.png"
};

// Define the Characters
const characters = {
  "CB": {
    "Name": "Coconut Bomb",
    "Color": "#fedcba",
    "Directory": "CoconutBomb",
    "Images": {
      "Excited": "cocobomb-excited.png",
      "Excited-Bag": "cocobomb-excited-bag.png",
      "Front-Happy": "cocobomb-front-happy.png",
      "Front-Sad": "cocobomb-front-sad.png",
      "Front-Shocked": "cocobomb-front-shocked.png",
      "Grumpy": "cocobomb-grumpy.png",
      "Grumpy-Bag": "cocobomb-grumpy-bag.png",
      "Neutral": "cocobomb-front-happy.png",
      "Power-Up": "cocobomb-power.png",
      "Sad": "cocobomb-sad.png",
      "Shocked": "cocobomb-shocked.png",
      "Suspicious": "cocobomb-suspicious.png",

      "Angry": "cocobomb-grumpy.png",
      "Attacked": "cocobomb-shocked.png",
      "Angry-Power": "cocobomb-angry-power.png",
      "Angry-Punch": "cocobomb-angry-punch.png",
      "Punch": "cocobomb-punch.png"
    }
  },
  "GC": {
    "Name": "Glam Cake",
    "Color": "#abcdef",
    "Directory": "GlamCake",
    "Images": {
      "Neutral": "glamcake-neutral.png",
      "Helpful": "glamcake-helpful.png",
      "Sad": "glamcake-sad.png",
      "Scold": "glamcake-scold.png",
      "Serious": "glamcake-serious.png",
      "Trans1": "glamcake-spec-trans-1.png",
      "Trans2": "glamcake-spec-trans-2.png",
      "Unsure": "glamcake-unsure.png",

      "Neutral-R": "glamcake-neutral-m.png",
      "Helpful-R": "glamcake-helpful-m.png",
      "Sad-R": "glamcake-sad-m.png",
      "Scold-R": "glamcake-scold-m.png",
      "Serious-R": "glamcake-serious-m.png",
      "Trans1-R": "glamcake-spec-trans-1-m.png",
      "Trans2-R": "glamcake-spec-trans-2-m.png",
      "Unsure-R": "glamcake-unsure-m.png",
      "Angry-R": "glamcake-angry-m.png",

      "Attacked": "glamcake-angry.png",
      "Angry": "glamcake-angry.png",
      "Atk-Start": "glamcake-prep-attack.png",
      "Attack": "glamcake-attack.png"
    }
  },
  "Spectrum": {
    "Name": "Spectrum",
    "Color": "#abcdef",
    "Directory": "Spectrum",
    "Images": {
      "Atk-Start": "spectrum-gather-power.png",
      "Angry": "spectrum-neutral.png",
      "Attack": "spectrum-throw.png",

      "Atk-Start-R": "spectrum-gather-power-m.png",
      "Angry-R": "spectrum-neutral-m.png",
      "Attack-R": "spectrum-throw-m.png"
    }
  },
  "MM": {
    "Name": "Magma Man",
    "Color": "#ff0000",
    "Images": {
      "Angry": "magmaman-neutral.png",
      "Arms-Up": "magmaman-arms-up.png",
      "Atk-Start": "magmaman-lava-ball.png",
      "Attack": "magmaman-throw.png"
    }
  },

  // misc characters
  "Newscaster": {
    "Name": "Newscaster Bob"
  },
  "Police": {
    "Name": "Police Officer Pinkerton",
    "Color": "#fe03d8",
    "Images": {
      "Officer": "police.png"
    }
  },
  "Cat": {
    "Name": "Nyan Meow",
    "Images": {
      "Asleep": "cat-asleep.png",
      "Awake": "cat-awake.png",

      "Angry": "cat-awake.png",
      "Attack": "cat-fire.png",
      "Atk-Start": "cat-flame.png"
    }
  },
  "Stranger": {
    "Name": "Stranger",
    "Images": {
      "Neutral": "tired-guy-resting-neutral.png",
      "Scared": "tired-guy-scared.png",

      "Angry": "tired-guy-angry.png",
      "Atk-Start": "tired-guy-glow.png",
      "Attack": "tired-guy-lasers.png"
    }
  },
  "Granny": {
    "Name": "Granny",
    "Images": {
      "Neutral": "granny-happy-neutral.png",
      "ScaredM": "granny-scared.png",

      "Angry": "granny-mad.png",
      "Atk-Start": "granny-rock.png",
      "Attack": "granny-throw.png",
      "Scared": "granny-scared-m.png"
    }
  },
  "Clerk": {
    "Name": "Clerk",
    "Images": {
      "Bag-Happy": "store-clerk-holding-bag.png",
      "Bag-Sad": "store-clerk-holding-bag-sad.png",
      "Neutral": "store-clerk-neutral.png",
      "Sad": "store-clerk-sad.png",

      "Angry": "store-clerk-angry.png",
      "Atk-Start": "store-clerk-attack-start.png",
      "Attack": "store-clerk-dollars-out.png"
    }
  },
  "Duck": {
    "Name": "Filching Fowl",
    "Images": {
      "Grab": "duck-getting-sprinkles.png",
      "Landed": "duck-landed.png",
      "Landing": "duck-landing.png",

      "Angry": "duck-landed.png",
      "Atk-Start": "duck-start-attack.png",
      "Attack": "duck-attack.png"
    }
  }
};

function rand_select(key, jump, resp) {
  let chosen = resp[Math.floor(Math.random() * resp.length)];
  script[key] = [chosen,
                 "jump " + jump];
  return true;
}

let script = {
  // The game starts here.
  "Start": [
    'clear',

    "play music Main loop",

    'scene kitchen with fadeIn',

    "It is a peaceful morning in the town of Almond Blosom, as Glam Cake is calmly going about the finishing touches for breakfast...",

    "jump kitchen"

  ]
};
