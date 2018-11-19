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

		'd You know...',

		'scene pink with fadeIn',

		'd I like pie...',

		'scene red with fadeIn',

		'show d Normal at left with fadeIn',

		'd llama...  LLAMA!!!',

		'scene Room with fadeIn',

		'show d Normal at right with fadeIn',

		'd nope!',

		'show b Normal at left with fadeIn',
		'b i got cheese!',

		'show d Normal at left',
		'd GIMMEH DAT CHEEEZE!!!!!'
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
