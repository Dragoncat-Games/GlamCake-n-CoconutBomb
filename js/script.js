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
  "Help": {
    "Title": "Help",
    "Subtitle": "Some useful Links",
    "Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
  }
};

// Define the notifications used in the game
let notifications = {
  "Welcome": {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: ""
  }
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

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
  "Room": "room.png",
  "kitchen": "KitchenScene.jpg"
};

// Define the Characters
const characters = {
  "CB": {
    "Name": "Coconut Bomb",
    "Color": "#fedcba"
  },
  "GC": {
    "Name": "Glam Cake",
    "Color": "#abcdef",
    "Directory": "GlamCake",
    "Images": {
      "Neutral": "GlamCake-Neutral.png"
    }
  },

  "Newscaster": {
    "Name": "Newscaster Bob"
  },

  // probably unused
  "d": {
    "Name": "Derpmaster",
    "Color": "#5bcaff",
    'Images': {
      'Normal': 'derpmaster.png'
    }
  },
  'b': {
    'Name': 'Birdmaster',
    'Color': "#DEADBE",
    'Images': {
      'Normal': 'birdmaster.png'
    }
  }
};

function rand_select(key, jump, resp) {
  let chosen = resp[Math.floor(Math.random() * resp.length)];
  script[key] = [chosen,
                 "jump " + jump];
  return true;
}

function fight_bars() {
  let fight = document.getElementById("fight");

  let player_health = document.getElementById("player-health");
  player_health.style.width = 100 + "%";

  return true;
}

let script = {
  // The game starts here.
  "Start": [
    'clear',

    'scene kitchen with fadeIn',
    // 'scene black with fadeIn',
// music also
    "It is a peaceful morning in the town of Almond Blosom, as Glam Cake is calmly going about the finishing touches for breakfast...",

    "jump Kitchen"

  ],

  "Kitchen" : [

    "show GC Neutral right with fadeIn",

    "GC Hmmhmmhmmmhmmmm lets see, a little bit of this ...Oh! syrup!",
    "GC Coco Sweeeeetiiiie time to eat! IF only I had some more blueberries, Oh well",

    // metal music, coconutbomb appears
    "CB Glam Cake quit calling me Coco. I'm Coconut BOMB sis! stop being so mushy",

    "GC hmm-mm, ok coco sweetie come eat your pancakes.",

    "jump KitchenEncounter"

  ],

  "KitchenEncounter": [
    {"Choice": {
      "Power-up": {
        "Text": "Power Up",
        "Do": "jump KitchenPowerupFn"
      },
      "Whatev": {
        "Text": "Whatev",
        "Do": "Coconut Bomb grumpily sits"
      },
      "Ooh": {
        "Text": "Ooh, pancakes",
        "Do": "Coconut Bomb sits down excitedly"
      },
      "Not-Hungry": {
        "Text": "Not hungry",
        "Do": "GC Suit yourself."
      }
    }},

    "jump KitchenFood"
  ],

  "KitchenPowerupFn": [
    function() {
      if (storage.player.breakfast) {
        rand_select(
          "KitchenPowerup",
          "KitchenEncounter",
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
        script["KitchenPowerup"] = ["GC Not in the House",
          "jump " + "KitchenEncounter"];
      }

      return true;
    },
    "jump KitchenPowerup"
  ],

  "KitchenPowerup": [
    "herp"
    // emty intentionally
  ],

  "KitchenFood": [
    "GC I was looking in the pantry and we don't have everthing for our spectrum day cake.",

    "CB Spectrum Day! Today! Oh WOW I almost forgot.",

    "GC (Giggle) forgetting your favorite hero's honor day... you must have woken up on the wrong side of the bed.",

    "CB (sheepsih) Yeah.....",

    "GC Will you come with me into town and help get the rest of the ingredients?",

    "jump KitchenFoodChoice",
  ],

  "KitchenFoodChoice": [
    {"Choice": {
      "Power-up": {
        "Text": "Power Up",
        "Do": "jump KitchenFoodPowerupFn"
      },
      "Sure": {
        "Text": "Sure!",
        "Do": "jump SidewalkScene"
      },
      "Nah": {
        "Text": "Nah, I'll stay home",
        "Do": "jump Ending1"
      }
    }}
  ],

  "KitchenFoodPowerup": [ undefined ],
  "KitchenFoodPowerupFn": [
    function() {
      if (storage.player.breakfast) {
        rand_select(
          "KitchenFoodPowerup",
          "KitchenFoodChoice",
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
        script["KitchenFoodPowerup"] = ["GC Not in the House",
          "jump " + "KitchenFoodChoice"];
      }

      return true;
    },
    "jump KitchenFoodPowerup"
  ],

  "Ending1": [
    "GC Ok, I'll go by myself, bye!",

    "Coconut Bomb goes out of kitchen, fade to family room. Watching TV. Clock on the wall shows that time goes by.",

    "Newscaster BREAKING NEWS!!!!! Magma Man has returned and is destroying Middle Park!!!",
    "Newscaster Citizens of Almond Blossom, Please evacuate away from the city and keep out of the way of police......",
    "Newscaster WAIT! is that who I think it is?!",
    "Newscaster SPECTRUM!",
    "Newscaster Spectrum is here!",
    "Newscaster He's Stopping Magma Man!",
    "Newscaster Magma Man is down citizens! He is being restrained!",
    "Newscaster Looks Like our favorite hero got here in just the knick of time! We are saved!",

  "CB (shocked) I missed seeing Spectrum....aw Shucks.",
  "THE END!",
  "end"
  ],

  "SidewalkScene": [
    'scene blue with fadeIn',
    "this is the sidewalk scene",
    "end"
  ]
};
