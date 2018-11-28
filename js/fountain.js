"use strict";

script["fountain"] = [
  "scene park with fadeIn",

  "Walking past fountain in Park, Duck Flys by and graps sprinkles out of the top of the bag Coconut Bomb is carrying.",

  {"Choice": {
    "Hey": {
      "Text": "Hey! Give that back!",
      "Do": "jump fountain-encounter"
    },
    "Darn": {
      "Text": "Darn... Oh well...",
      "Do": "jump magma-park"
    },
    "Power-up": {
      "Text": "Power Up!",
      "Do": "jump fountain-encounter"
    }
  }}

];

script["fountain-encounter"] = [
  "If win -> get sprinkles back -> intersection",
  "If lose -> sprinkles are lost -> intersection",
  "jump intersection"
];
