"use strict";

let player_health_bar = false;
let enemy_health_bar = false;
let enemies = [];

function pre_setup_fight() {
  player_health_bar = document.getElementById("player-health");
  enemy_health_bar = document.getElementById("enemy-health");
  reset_all();
  hide_fight_bars()
}

function Enemy(name, max_health, attacks, defeat, success) {
  this.name = name;
  this.max_health = max_health;
  this.defeat = defeat;
  this.success = success;

  var attacks = attacks;
  var num_attacks = attacks.length;
  var health = max_health;

  this.alive = function() { return health > 0; };

  this.attack = function() {
    return attacks[Math.floor(Math.random() * num_attacks)];
  }

  this.take_damage = function(amt) {
    health -= amt;
    var pct = (health / max_health) * 100;
    enemy_health_bar.style.width = pct + "%";
    return true;
  }
}

// Hiding & showing the fight bars!
function CssManipulator(sheet_title) {
  var that = this,
      len = document.styleSheets.length,
      n;
  this.styleSheet = null;
  this.selectors = {};
  this.cssRules = null;
  for (n = 0; n < len; n++) {
    if (document.styleSheets[n].title === sheet_title) {
      this.styleSheet = document.styleSheets[n];
      this.cssRules = document.styleSheets[n].cssRules || document.styleSheets[n].rules;
      break;
    }
  }
  this.change = function(selector, prop, value) {
    var prop_name = (prop.charAt(0) === '-') ? prop.substring(1, prop.length) : prop;
    prop_name = prop_name.replace(/-([a-z])/gi, function(str, chr) {
      return chr.toUpperCase();
    });
    if (selector in that.selectors) {
      that.styleSheet.cssRules[that.selectors[selector]].style[prop_name] = value;
    } else {
      that.selectors[selector] = that.styleSheet.insertRule(selector
                                    + "{"
                                    + prop
                                    + ":"
                                    + value
                                    + ";}",
                                  that.cssRules.length);
    }
  };
}

var main_style = null;

function show_fight_bars() {
  if (!main_style) {
    main_style = new CssManipulator("main");
  }
  main_style.change(".fight-style", "visibility", "visible");
  return true;
}

function hide_fight_bars() {
  if (!main_style) {
    main_style = new CssManipulator("main");
  }
  main_style.change(".fight-style", "visibility", "hidden");
  return true;
}

function clamp(min, val, max) {
  return Math.min(Math.max(min, val), max);
}

function change_enemy_bar(num) {
  return enemy_health_bar.style.width = clamp(0, num, 100) + "%";
}

function change_player_bar(num) {
  return player_health_bar.style.width = clamp(0, num, 100) + "%";
}

///////////////////////////////////////////////////////////////////////////

let CoconutBomb = {
  name: "CB",
  max_health: 100,
  health: 100,
  attacks: [
    ["Punch", "Coconut Punch!", 10],
    ["Angry-Punch", "Power Punch!!!", 15],
    ["Angry-Power", "Power Up", 0]
  ],
  take_damage: function(amt) {
    this.health -= amt;
    var pct = (this.health / this.max_health) * 100;
    player_health_bar.style.width = pct + "%";
    return true;
  }
};

let GlamCake = Object.create(CoconutBomb);
GlamCake.name = "GC";
GlamCake.max_health = 1000;
GlamCake.health = 1000;
GlamCake.attacks = [
  ["Attack", "Sparkles!", 20],
  ["Attack", "Glitter!!", 30],
  ["Attack", "Cake!!!", 15]
];

script["player-fight-choice"] = [
  "show ...",
  {"Choice": {}}
]

script["player-fight"] = [
  {"Conditional": {
    "Condition": false,
    "True": "jump gc-help?",
    "False": "jump player-defeat"
  }}
];

script["gc-help?"] = [
  // GlamCake offers help when less than 40% hp
  {"Conditional": {
    "Condition": function () {
      return CoconutBomb.health < CoconutBomb.max_health * 0.4
    },
    "True": "jump gc-offer-help",
    "False": "jump player-fight-choice"
  }}
];

script["gc-offer-help"] = [
  "show GC Unsure left",
  "GC Coco-sweetie, would you like some help?",
  {"Choice": {
    "Sure": {
      "Text": "Sure",
      "Do": "jump gc-fight"
    },
    "Got-This": {
      "Text": "I got this!",
      "Do": "jump player-fight-choice"
    }
  }}
];

script["gc-fight"] = [
  "show CB Angry left",
  "show GC Angry left",
  function () { return true; },
  "jump player-fight-choice"
]

function make_player_fight(player, enemy) {

  if (player.name == "CB") {
    // set up so we check if glam cake will help after we know we're alive
    script["player-fight"][0]["Conditional"]["True"] = "jump gc-help?";
    // always ask if we're fighting magma man
    script["gc-help?"][0]["Conditional"]["Condition"] = function () {
      return (enemy.name == "MM") || (CoconutBomb.health < CoconutBomb.max_health * 0.4);
    }
    // glam cakes help will be spectrum if we're fighting magma man
    script["gc-fight"][2] =
      enemy.name == "MM" ?
        "jump spectrum-appears" :
        function () {
          make_player_fight(GlamCake, enemy);
          make_enemy_fight(GlamCake, enemy);
          return true;
        };

    if (enemy.name == "MM") {
      script["gc-offer-help"][2] = {"Choice": {
        "Power-Up": {
          "Text": "Power Up",
          "Do": "jump player-fight-choice"
        },
        "Help": {
          "Text": "Glam Cake HELP!!!",
          "Do": "jump spectrum-appears"
        },
        "My-Own": {
          "Text": "No I can do this on my own.",
          "Do": "jump on-my-own"
        }
      }};
    } else {
      script["gc-offer-help"][2] = {"Choice": {
        "Sure": {
          "Text": "Sure",
          "Do": "jump gc-fight"
        },
        "Got-This": {
          "Text": "I got this!",
          "Do": "jump player-fight-choice"
        }
      }};
    }
  } else {
    script["player-fight"][0]["Conditional"]["True"] = "jump player-fight-choice";
  }

  script["player-fight"][0]["Conditional"]["Condition"] = function () {
    return player.health > 0;
  };

  script["player-fight-choice"][1]["Choice"] = {};
  player.attacks.map(function (attack) {
    var pose = attack[0];
    var atk_name = attack[1];
    var dmg = attack[2];
    var jump_name = attack[1].replace(/ /g, "-");

    script["player-fight-choice"][0] = "show "
      + player.name + " Angry left";
    script["player-fight-choice"][1]["Choice"][jump_name] = {
      "Text": atk_name,
      "Do": "jump " + jump_name
    };

    script[jump_name] = [

      function () {
        enemy.take_damage(dmg);
        return true
      },
      "show " + characters[enemy.name]
              + (characters[enemy.name]["Images"]["Scared"] ? "Scared" : "Angry")
              + " right",
      "show " + player.name + " "
              + pose
              + " left",
      player.name + " deals "
          + dmg
          + " damage to "
          + characters[enemy.name]["Name"],
      "jump enemy-fight"
    ]
  });
}

function make_enemy_fight(player, enemy) {
  script["enemy-fight"] = [
    "show " + enemy.name + " Angry right",
    {"Conditional": {
      "Condition": enemy.alive,
      "True": "jump enemy-attack",
      "False": "jump enemy-defeat"
    }}
  ];

  script["enemy-attack"] = [
    function () {
      var atk = enemy.attack()

      script["enemy-do-attack"] = [
        "show " + enemy.name + " Atk-Start right",
        enemy.name + " " + atk[0],
        "show " + enemy.name + " Attack right",
        "show " + player.name + " Attacked left",
        function () {
          player.take_damage(atk[1]);
          return true;
        },
        "!!! " + enemy.name + " hits you for " + atk[1] + " damage!!!",
        "jump player-fight"
      ];

      return true;
    },
    "jump enemy-do-attack"
  ];

  script["enemy-defeat"] = [
    "play music Main loop",
    hide_fight_bars
  ].concat(enemy.defeat);

  script["player-defeat"] = [
    "play music Main loop",
    hide_fight_bars
  ].concat(enemy.success);
}

function reset_all() {
  CoconutBomb.health = CoconutBomb.max_health;
  GlamCake.health = GlamCake.max_health;
  Spectrum.health = Spectrum.max_health;
}

function fight(enemy) {

  change_enemy_bar(0);
  change_player_bar(0);
  show_fight_bars();
  change_enemy_bar(100);
  change_player_bar(100);

  reset_all();
  make_player_fight(CoconutBomb, enemy);
  make_enemy_fight(CoconutBomb, enemy);
}
