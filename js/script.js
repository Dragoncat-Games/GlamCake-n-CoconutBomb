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

  // misc characters
  "Newscaster": {
    "Name": "Newscaster Bob"
  },
  "Cat": {
    "Name": "Nyan Meow"
  },
  "Stranger": {
    "Name": "Stranger"
  },
  "Granny": {
    "Name": "Granny"
  },
  "Clerk": {
    "Name": "Clerk"
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

let script = {
  // The game starts here.
  "Start": [
    'clear',

    'scene kitchen with fadeIn',
    // 'scene black with fadeIn',
// music also
    "It is a peaceful morning in the town of Almond Blosom, as Glam Cake is calmly going about the finishing touches for breakfast...",

    "jump kitchen"

  ]
};
