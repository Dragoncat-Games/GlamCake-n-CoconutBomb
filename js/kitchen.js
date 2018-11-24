"use strict";


script["kitchen"] = [

  "show GC Neutral right with fadeIn",

  "GC Hmmhmmhmmmhmmmm lets see, a little bit of this ...Oh! syrup!",
  "GC Coco Sweeeeetiiiie time to eat! IF only I had some more blueberries, Oh well",

  // metal music, coconutbomb appears
  "CB Glam Cake quit calling me Coco. I'm Coconut BOMB sis! stop being so mushy",

  "GC hmm-mm, ok coco sweetie come eat your pancakes.",

  "jump kitchen-encounter"

];

script["kitchen-encounter"] = [
  {"Choice": {
    "Power-up": {
      "Text": "Power Up",
      "Do": "jump kitchen-powerup-fn"
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

  "jump kitchen-food"
];

script["kitchen-powerup"] = [ undefined ];

script["kitchen-powerup-fn"] = [
  function() {
    if (storage.player.breakfast) {
      rand_select(
        "kitchen-powerup",
        "kitchen-encounter",
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
      script["kitchen-powerup"] = ["GC Not in the House",
        "jump " + "kitchen-encounter"];
    }

    return true;
  },
  "jump kitchen-powerup"
];

script["kitchen-food"] = [
  "GC I was looking in the pantry and we don't have everthing for our spectrum day cake.",

  "CB Spectrum Day! Today! Oh WOW I almost forgot.",

  "GC (Giggle) forgetting your favorite hero's honor day... you must have woken up on the wrong side of the bed.",

  "CB (sheepsih) Yeah.....",

  "GC Will you come with me into town and help get the rest of the ingredients?",

  "jump kitchen-food-choice",
];

script["kitchen-food-choice"] = [
  {"Choice": {
    "Power-up": {
      "Text": "Power Up",
      "Do": "jump kitchen-food-powerup-fn"
    },
    "Sure": {
      "Text": "Sure!",
      "Do": "jump sidewalk-scene"
    },
    "Nah": {
      "Text": "Nah, I'll stay home",
      "Do": "jump Ending1"
    }
  }}
];

script["kitchen-food-powerup"] = [ undefined ];

script["kitchen-food-powerup-fn"] = [
  function() {
    if (storage.player.breakfast) {
      rand_select(
        "kitchen-food-powerup",
        "kitchen-food-choice",
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
      script["kitchen-food-powerup"] = ["GC Not in the House",
        "jump " + "kitchen-food-choice"];
    }

    return true;
  },
  "jump kitchen-food-powerup"
];
