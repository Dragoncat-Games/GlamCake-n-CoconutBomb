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

function Enemy(name, max_health, attacks, defeat) {
  this.name = name;
  this.max_health = max_health;
  this.defeat = defeat;

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

function reset_player() {
  player.health = player.max_health;
  return true;
}

// function reset_enemies() {
//   Object.getOwnPropertyNames(enemies).map(
//     function (n, v) {
//       enemies[n].health = enemies[n].max_health;
//     }
//   )
//   return true;
// }

function reset_all() {
  reset_player();
  // reset_enemies();
  return true;
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
{}
function clamp(min, val, max) {
  return Math.min(Math.max(min, val), max);
}

function change_enemy_bar(num) {
  return enemy_health_bar.style.width = clamp(0, num, 100) + "%";
}

function change_player_bar(num) {
  return player_health_bar.style.width = clamp(0, num, 100) + "%";
}

// let player_health = document.getElementById("player-health");
// player_health.style.width = 100 + "%";

let player = {
  name: "Coconut Bomb",
  max_health: 100,
  health: 100,
  attacks: [
    ["Coconut Punch!", 10],
    ["Coconut Milk Attack!!!", 5],
    ["Coconut Kick!", 15]
  ],
  take_damage: function(amt) {
    this.health -= amt;
    var pct = (this.health / this.max_health) * 100;
    player_health_bar.style.width = pct + "%";
    return true;
  }
};

script["player-fight"] = [
  {"Choice": {}}
]

function make_player_fight(enemy) {
  player.attacks.map(function (attack) {
    var name = attack[0].replace(/ /g, "-");

    script["player-fight"][0]["Choice"][name] = {
      "Text": attack[0],
      "Do": "jump " + name
    }

    script[name] = [
      function () {
        enemy.take_damage(attack[1]);
        return true
      },
      "show " + characters[enemy.name]
              + (characters[enemy.name]["Images"]["Scared"] ? "Scared" : "Angry")
              + " right",
      "Coconut Bomb deals "
          + attack[1]
          + " damage to "
          + characters[enemy.name]["Name"],
      "jump enemy-fight"
    ]
  });
}

function make_enemy_fight(enemy) {
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
    hide_fight_bars
  ].concat(enemy.defeat);
}

function fight(enemy) {

  change_enemy_bar(0);
  change_player_bar(0);
  show_fight_bars();
  change_enemy_bar(100);
  change_player_bar(100);

  player.health = player.max_health;

  make_player_fight(enemy);
  make_enemy_fight(enemy);
}
