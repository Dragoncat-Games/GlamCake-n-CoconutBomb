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
  "Room": "room.png"
};

// Define the Characters
const characters = {
  "c": {
    "Name": "Coconut Bomb",
    "Color": "#fedcba"
  },
  "g": {
    "Name": "Glam Cake",
    "Color": "#abcdef"
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

let script = {
  // The game starts here.
  "Start": [
    'clear',

    'scene green with fadeIn',
// music also
    "It is a peaceful morning in the town of Almond Blosom, as Glam Cake is calmly going about the finishing touches for breakfast...",

    "jump Kitchen"

  ],

  "Kitchen" : [
    "g Coco-sweetie, time to eat.",
    // metal music, coconutbomb appears
    "c Sis, stop being so mushy!",
    "g Hmmm-mmm, ok dear come eat your pancakes.",

    "jump KitchenEncounter"

  ],

  "KitchenEncounter": [
    {"Choice": {
      "Power-up": {
        "Text": "Power Up",
        "Do": "jump KitchenPowerup"
      },
      "Whatev": {
        "Text": "Whatev",
        "Do": "c Pffft"
      },
      "Ooh": {
        "Text": "Ooh, pancakes",
        "Do": "c Ooh, pancakes"
      },
      "Not-Hungry": {
        "Text": "Not hungry",
        "Do": "g Suit yourself."
      }
    }},

    "llama",
    "end"
  ],

  "KitchenPowerup": [
    "g Not in the house",
    "jump KitchenEncounter"
  ],

  "Yes": [

    "h That's awesome!",
    "h Then you are ready to go ahead and create an amazing Game!",
    "h I can't wait to see what story you'll tell!",
    "end"
  ],

  "No": [

    "h You can do it now.",

    "display message Help",

    "h Go ahead and create an amazing Game!",
    "h I can't wait to see what story you'll tell!",
    "end"
  ]
};
