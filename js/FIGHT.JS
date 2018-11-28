"use strict";

let player_health_bar = false;
let enemy_health_bar = false;
let fight = false;

function setup_fight() {
  player_health_bar = document.getElementById("player-health");
  enemy_health_bar = document.getElementById("enemy-health");
  fight = document.getElementById("fight");
  reset_all();
}

function Enemy(name, max_health, attacks) {
  this.name = name;
  this.max_health = max_health;

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
    return pct
  }
}

let Cat = new Enemy(
  characters["Cat"]["Name"],
  5,
  [
    ["MEOW!!! <Translation: CLAW ATTACK!!!>", 1],
    ["mrrrow? <Translation: aren't I cute?>", 0],
    ["HISSSS! <Translation: STAY BACK! I MEAN IT!>", 0]
]);


let player = {
  name: "Coconut Bomb",
  max_health: 100,
  health: 100,
  attacks: [
    ["Coconut Punch!", 10],
    ["Coconut Milk Attack!!!", 5],
    ["Coconut Kick!", 15]
  ]
}

function reset_player() {
  player.health = player.max_health;
  return true;
}

function reset_enemies() {
  Object.getOwnPropertyNames(enemies).map(
    function (n, v) {
      enemies[n].health = enemies[n].max_health;
    }
  )
  return true;
}

function reset_all() {
  reset_player();
  reset_enemies();
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

function change_enemy_bar(num) {
  return
}

function change_player_bar(num) {
  return player_health_bar.style.width = num + "%";
}

// let player_health = document.getElementById("player-health");
// player_health.style.width = 100 + "%";

