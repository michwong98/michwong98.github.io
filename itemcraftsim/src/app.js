var item_types = ["one hand sowrd"];
var base_types = [];
var affixes = [];
var current_item = {
	"base_type": "",
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

	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "./JSON/" + item_type + ".json", true);
	xhr1.onreadystatechange = function() {
		if (xhr1.readyState == 4 && xhr1.status == "200") {

			base_types = JSON.parse(xhr1.responseText).bases;
			
			var first = item_base_field.firstElementChild();
			while (first) {
				first.remove();
				first = item_base_field.firstElementChild();
			}

			console.log(base_types)


			base_types.forEach(function(base) {
				var new_node = document.createElement("option");
				new_node.setAttribute("value", base["item-name"]);
				new_node.value = base["item-name"];

				item_base_field.appendChild(new_node);
			});
		}
	};
	xhr1.send(null);

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
	var item_level = item_level_field.value;
	if (item_Level === null || item_level < 1 || item_level > 100) {
		return;
	}

	current_item.base_type = item_base;
	current_item.item_level = item_type_field;
	current_item.rarity = 0;
	current_item.prefixes = [];
	current_item.suffixes = [];

	document.getElementById("crafting-display").setAttribute("visibility", "visible");

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