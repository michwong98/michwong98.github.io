var item_types = ["one hand sowrd"];
var base_types = {
  "name": "one-hand-sword",
  "bases": [
    {
      "item-name": "Rusted Sword",
      "level-requirement": 1,
      "s-requirement": 8,
      "d-requirement": 8,
      "damage": [
        4,
        9
      ],
      "APS": 1.55,
      "Crit": 5
    },
    {
      "item-name": "Copper Sword",
      "level-requirement": 5,
      "s-requirement": 14,
      "d-requirement": 14,
      "damage": [
        6,
        14
      ],
      "APS": 1.5,
      "Crit": 5
    },
    {
      "item-name": "Sabre",
      "level-requirement": 10,
      "s-requirement": 18,
      "d-requirement": 26,
      "damage": [
        5,
        22
      ],
      "APS": 1.55,
      "Crit": 5
    },
    {
      "item-name": "Broad Sword",
      "level-requirement": 15,
      "s-requirement": 30,
      "d-requirement": 30,
      "damage": [
        15,
        21
      ],
      "APS": 1.45,
      "Crit": 5
    },
    {
      "item-name": "War Sword",
      "level-requirement": 20,
      "s-requirement": 41,
      "d-requirement": 35,
      "damage": [
        16,
        30
      ],
      "APS": 1.4,
      "Crit": 5
    },
    {
      "item-name": "Ancient Sword",
      "level-requirement": 24,
      "s-requirement": 44,
      "d-requirement": 44,
      "damage": [
        18,
        33
      ],
      "APS": 1.45,
      "Crit": 5
    },
    {
      "item-name": "Elegant Sword",
      "level-requirement": 28,
      "s-requirement": 46,
      "d-requirement": 55,
      "damage": [
        20,
        33
      ],
      "APS": 1.5,
      "Crit": 5
    },
    {
      "item-name": "Dusk Blade",
      "level-requirement": 32,
      "s-requirement": 57,
      "d-requirement": 57,
      "damage": [
        19,
        54
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Hook Sword",
      "level-requirement": 34,
      "s-requirement": 64,
      "d-requirement": 64,
      "damage": [
        28,
        60
      ],
      "APS": 1.15,
      "Crit": 5
    },
    {
      "item-name": "Variscite Blade",
      "level-requirement": 35,
      "s-requirement": 62,
      "d-requirement": 62,
      "damage": [
        25,
        53
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Cutlass",
      "level-requirement": 38,
      "s-requirement": 55,
      "d-requirement": 79,
      "damage": [
        13,
        53
      ],
      "APS": 1.55,
      "Crit": 5
    },
    {
      "item-name": "Baselard",
      "level-requirement": 41,
      "s-requirement": 72,
      "d-requirement": 72,
      "damage": [
        37,
        53
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Battle Sword",
      "level-requirement": 44,
      "s-requirement": 83,
      "d-requirement": 70,
      "damage": [
        36,
        66
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Graceful Sword",
      "level-requirement": 50,
      "s-requirement": 78,
      "d-requirement": 94,
      "damage": [
        34,
        55
      ],
      "APS": 1.5,
      "Crit": 5
    },
    {
      "item-name": "Twilight Blade",
      "level-requirement": 53,
      "s-requirement": 91,
      "d-requirement": 91,
      "damage": [
        30,
        86
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Grappler",
      "level-requirement": 55,
      "s-requirement": 99,
      "d-requirement": 99,
      "damage": [
        44,
        94
      ],
      "APS": 1.15,
      "Crit": 5
    },
    {
      "item-name": "Gemstone Sword",
      "level-requirement": 56,
      "s-requirement": 96,
      "d-requirement": 96,
      "damage": [
        39,
        83
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Corsair Sword",
      "level-requirement": 58,
      "s-requirement": 81,
      "d-requirement": 117,
      "damage": [
        20,
        80
      ],
      "APS": 1.55,
      "Crit": 5
    },
    {
      "item-name": "Legion Sword",
      "level-requirement": 62,
      "s-requirement": 122,
      "d-requirement": 104,
      "damage": [
        53,
        98
      ],
      "APS": 1.2,
      "Crit": 5
    },
    {
      "item-name": "Vaal Blade",
      "level-requirement": 64,
      "s-requirement": 113,
      "d-requirement": 113,
      "damage": [
        48,
        86
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Eternal Sword",
      "level-requirement": 66,
      "s-requirement": 104,
      "d-requirement": 122,
      "damage": [
        41,
        68
      ],
      "APS": 1.5,
      "Crit": 5
    },
    {
      "item-name": "Midnight Blade",
      "level-requirement": 68,
      "s-requirement": 113,
      "d-requirement": 113,
      "damage": [
        35,
        99
      ],
      "APS": 1.3,
      "Crit": 5
    },
    {
      "item-name": "Tiger Hook",
      "level-requirement": 70,
      "s-requirement": 119,
      "d-requirement": 119,
      "damage": [
        49,
        105
      ],
      "APS": 1.15,
      "Crit": 5
    }
  ]
};
base_types = base_types.bases;
var affixes = [];
var current_item = {
	"base_type": {},
	"item_level": -1,
	"rarity": -1,
	"quality": -1,
	"prefixes": [],
	"suffixes": []
}
var item_type_field, base_type_field, item_level_field;



window.addEventListener("DOMContentLoaded", (evt) => {

	item_type_field = document.getElementById("item-type");
	item_base_field = document.getElementById("item-base");
	item_level_field = document.getElementById("item-level");

	item_type_field.addEventListener("change", baseTypeChange);
	document.getElementById("new-item-button").addEventListener("click", generateNewItem);


});

function baseTypeChange() {

	var item_type = item_type_field.value;
	console.log(item_base_field);
	var first = item_base_field.firstChild;
	while (first) {
		first.remove();
		first = item_base_field.firstChild;
	}
	base_types.forEach(function(base) {
		var new_node = document.createElement("option");
		new_node.setAttribute("value", base["item-name"]);
		new_node.innerHTML = base["item-name"];

		item_base_field.appendChild(new_node);
	});

}

function generateNewItem() {

	var item_base = item_base_field.value;
	if (item_base === "" || item_base === null) {
		return;
	} else {
		var bool = true;
		base_types.forEach(function(base_type) {
			if (base_type["item-name"] === item_base) {
				bool = false;
				item_base = base_type;
			}
		});
		if (bool) {
			return;
		}
	}
	if (item_level_field.value === null || item_level_field.value < 1 || item_level_field.value > 100) {
		return;
	}

	current_item.base_type = item_base;
	current_item.item_level = item_level_field.value;
	current_item.rarity = 0;
	current_item.prefixes = [];
	current_item.suffixes = [];
	current_item.quality = 0;

	updateItem();

	document.getElementById("crafting-display").style.visibility = "visible";

}

function updateItem() {

	var damage1 = 0; damage1 = current_item.base_type.damage[0];
	var damage2 = 0; damage2 = current_item.base_type.damage[1];
	var physdps = 0, elementaldps = 0;
	var elementalDamage = 0;
	var aps = current_item.base_type.APS;
	var crit = current_item.base_type["Crit"];

	current_item.prefixes.forEach(function(current_prefix) {

		var current_prefix_stat = current_prefix["affix-description"];

		if (current_prefix_stat.indexOf("Add # to #")) {
			if (current_prefix_stat.indexOf("Add # to # Physical Damage")) {
			damage1 += current_prefix["affix-tier"]["affix_range"][0][2];
			damage2 += current_prefix["affix-tier"]["affix_range"][1][2];
			} else if (! current_prefix_stat.indexOf("Add # to # Chaos Damage")){
				elementalDamage = (current_prefix["affix-tier"]["affix_range"][0][2] + current_prefix["affix-tier"]["affix_range"][1][2]) / 2;
			}
		}





	});

	document.getElementById("item-name").innerHTML = current_item.base_type["item-name"];
	document.getElementById("damage1").innerHTML = damage1.toFixed(0); document.getElementById("damage2").innerHTML = damage2.toFixed(0);


	document.getElementById("aps").innerHTML = aps.toFixed(2);
	document.getElementById("crit").innerHTML = crit.toFixed(2);

	document.getElementById("quality").innerHTML = current_item.quality;
	document.getElementById("ilvl").innerHTML = current_item.item_level;

}


function generateAvailableAffixes() {
	var availableAffixes = {"prefixes": [], "suffixes": []};

	affixes.prefixes.forEach(function(prefix) {
		for (let i = 0; i < current_item.prefixes.length; i++) {
			if (prefix["affix-description"] === current_item.prefixes[i]["affix-description"]) {
				return;
			}
		}
		var availablePrefix = {"affix-description": "", "affix-tiers": []};
			availablePrefix["affix-description"] = prefix["affix-description"];
			prefix["affix-tiers"].forEach(function(prefix_tier) {
				if (prefix_tier["affix-item-level"] <= current_item.item_level) {
					availablePrefix["affix-tiers"].push(prefix_tier);
				}
			});
			if (availablePrefix["affix-tiers"].length > 0) {
				availableAffixes.prefixes.push(availablePrefix);
			}
	});

	affixes.suffixes.forEach(function(suffix) {
		for (let i = 0; i < current_item.suffixes.length; i++) {
			if (suffix["affix-description"] === current_item.suffixes[i]["affix-description"]) {
				return;
			}
		}
		var availableSuffix = {"affix-description": "", "affix-tiers": []};
			availableSuffix["affix-description"] = suffix["affix-description"];
			suffix["affix-tiers"].forEach(function(suffix_tier) {
				if (suffix_tier["affix-item-level"] <= current_item.item_level) {
					availableSuffix["affix-tiers"].push(suffix_tier);
				}
			});
			if (availableSuffix["affix-tiers"].length > 0) {
				availableAffixes.suffixes.push(availableSuffix);
			}
	});

	return availableAffixes;
}

function selectAffix(availableAffixes, selection) {
	var weight = 0;
	console.log("something here", availableAffixes.prefixes.length + availableAffixes.suffixes.length);
	console.log("dududu", affixes.prefixes.length + affixes.suffixes.length);

	if (selection !== 2) {
		weight = weight + 
		availableAffixes.prefixes.reduce(function(total, prefix) {
			return total + prefix["affix-tiers"].reduce(function(total2, prefix_tier) {
				return total2 + prefix_tier.weight;
			}, 0);
		}, 0);
	}


	if (selection !== 1) {
		weight = weight +
		availableAffixes.suffixes.reduce(function(total, suffix) {
			return total + suffix["affix-tiers"].reduce(function(total2, suffix_tier) {
				return total2 + suffix_tier.weight;
			}, 0);
		}, 0);
	}

	weight = Math.floor(Math.random() * weight);

	if (selection !== 2) {
		for (let x = 0; x < availableAffixes.prefixes.length; x++) {
			for (let i=0; i < availableAffixes.prefixes[x]["affix-tiers"].length; i++) {
				weight = weight - availableAffixes.prefixes[x]["affix-tiers"][i].weight;
				if (weight <= 0) {
					return { "affix": "prefix",
						"value": {
							"affix-description": availableAffixes.prefixes[x]["affix-description"],
							"affix-tier": availableAffixes.prefixes[x]["affix-tiers"][i]
						}
					}
				}
			}
		}
	}

	if (selection !== 1) {
		for (let x = 0; x < availableAffixes.suffixes.length; x++) {
			for (let i=0; i < availableAffixes.suffixes[x]["affix-tiers"].length; i++) {
				weight = weight - availableAffixes.suffixes[x]["affix-tiers"][i].weight;
				if (weight <= 0) {
					return {"affix": "suffix",
						"value": {
							"affix-description": availableAffixes.suffixes[x]["affix-description"],
							"affix-tier": availableAffixes.suffixes[x]["affix-tiers"][i]
						}
					}

				};
			}
		}
	}

	return {"error": "error"};
	
}

function transmute() {

	if (current_item.rarity !== 0) {
		return;
	}

	var affix;
	var rand = Math.floor(Math.random() * 2);
	if (rand === 1) {

		affix = selectAffix(generateAvailableAffixes(), 1);
		randomRoll(affix.value);
		current_item.prefixes.push(affix.value);

		affix = selectAffix(generateAvailableAffixes(), 2);
		randomRoll(affix.value);
		current_item.suffixes.push(affix.value);


	} else {

		affix = selectAffix(generateAvailableAffixes(), 0);
		randomRoll(affix.value);
		if (affix.affix === "prefix") {
			current_item.prefixes.push(affix.value);
		} else {
			current_item.suffixes.push(affix.value);
		}

	}

	current_item.rarity = 1;

}

function regal() {
	if (current_item.rarity !== 1) {
		return;
	}
	
	addAffix();

	current_item.rarity = 2;
}

function randomRoll(affix) {

	var affix_range = affix["affix-tier"]["affix-range"];
	var roll;
	affix_range.forEach(function(range) {
		roll = Math.floor(Math.random() * (range[1] + 1 - range[0]) + range[0]);
		if (range.length === 3) {
			range[2] = roll;
		} else {
			range.push(roll);
		}
	});

	return;

}

function divine() {
	current_item.prefixes.forEach(function(prefix) {
		randomRoll(prefix);
	});
	current_item.suffixes.forEach(function(suffix) {
		randomRoll(suffix)
	});
}

function addAffix() {

	if (current_item.prefixes.length === 3 && current_item.suffixes.length === 3) {
		return;
	}

	var rand = Math.floor(Math.random() * 2);
	if (rand === 0 && current_item.prefixes.length !== 3) {
		var affix = selectAffix(generateAvailableAffixes(), 1);
		randomRoll(affix.value);
		current_item.prefixes.push(affix.value);
	} else if (current_item.suffixes.length !== 3) {
		var affix = selectAffix(generateAvailableAffixes(), 2);
		randomRoll(affix.value);
		current_item.suffixes.push(affix.value);
	} else if (current_item.prefixes.length !== 3) {
		var affix = selectAffix(generateAvailableAffixes(), 1);
		randomRoll(affix.value);
		current_item.prefixes.push(affix.value);
	}
}

function exalt() {
	if (current_item.rarity !== 2) {
		return;
	} else if (current_item.prefixes.length !== 3 || current_item.suffixes.length !== 3) {
		addAffix();
	}
}

function alchemy() {
	if (current_item.rarity !== 0) {
		return;
	} else {
		var rand = Math.floor(Math.random() * 3) + 4;
		for (let i = 0; i < rand; i++) {
			addAffix();
		}
	}
	current_item.rarity = 2;
}

function scour() {
	if (current_item.rarity !== -1) {
		current_item.prefixes = [];
		current_item.suffixes = [];
		current_item.rarity = 0;
	}
}

function augment() {
	if (current_item.rarity !== 1) {
		return;
	} else if (current_item.prefixes.length === 0) {
		var affix = selectAffix(generateAvailableAffixes(), 1);
		randomRoll(affix.value);
		current_item.prefixes.push(affix.value);
	} else if (current_item.suffixes.length === 0) {
		var affix = selectAffix(generateAvailableAffixes(), 2);
		randomRoll(affix.value);
		current_item.suffixes.push(affix.value);
	}
}

function annul() {
	var count = current_item.prefixes.length + current_item.suffixes.length;
	if (count === 0) {
		return;
	} else {
		var rand = Math.floor(Math.random()*count);
		for (let i = 0; i < current_item.prefixes.length; i++) {
			if (rand === 0) {
				current_item.prefixes.splice(i, 1);
				return;
			} else {
				rand--;
			}
		}
		for (let i = 0; i < current_item.suffixes.length; i++) {
			if (rand ===0) {
				current_item.suffixes.splice(i, 1);
				return;
			} else {
				rand--;
			}
		}
	}
}

function blacksmith() {
	if (current_item.quality >= 20 || current_item.rarity == -1) {
		return;
	} else {
		switch (current_item.rarity) {
			case 0:
				if (current_item.quality <= 15) {
					current_item.quality += 5;
				} else {
					current_item.quality = 20;
				}
				return;
			case 1:
				if (current_item.quality >= 18) {
					current_item.quality += 2;
				} else {
					current_item.quality = 20;
				}
				return;
			case 2:
				current_item.quality++;
				return;
		}
			
	}
}