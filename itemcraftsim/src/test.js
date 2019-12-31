var affixes = require('./JSON/one-hand-sword-affixes.json');
var item_bases = require('./JSON/one-hand-sword.json');

var current_item = {
	rarity: 0,
	base_type: item_bases[0],
	item_level: 50,
	prefixes: [],
	suffixes: []
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

alchemy();
console.log(current_item);
exalt();
console.log(current_item);
annul();
console.log(current_item);
annul();
console.log(current_item);
annul();
console.log(current_item);
annul();
console.log(current_item);
annul();
console.log(current_item);
annul();
console.log(current_item);