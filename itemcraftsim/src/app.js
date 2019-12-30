var item_types = ["one hand sowrd"];
var base_types = [];
var affixes = [];
var current_item = {};
var item_type_field, base_type_field, item_level_field;



window.addEventListener("DOMContentLoaded", (evt) => {

	item_type_field = document.getElementById("item-type");
	base_type_field = document.getElementById("base-type");
	item_level_field = document.getElementById("item-level");

	item_type_field.addEventListener("change", baseTypeChange);


});

function baseTypeChange() {

	var item_type = item_type_field.value;

	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "./JSON/" + item_type + ".json", true);
	xhr1.onreadystatechange = function() {
		if (xhr1.readyState == 4 && xhr1.status == "200") {
			var base_types = JSON.parse(xhr1.responseText).bases;
			console.log(base_types);
		}
	};
	xhr1.send(null);

	var xhr2 = new XMLHttpRequest();
	xhr2.open("GET", "./JSON/" + item_type + "-affixes.json", true);
	xhr2.onreadystatechange = function() {
		if (xhr2.readyState == 4 && xhr2.status == "200") {
			affixes = JSON.parse(xhr2.responseText);
		}
	}
	xhr2.send(null);

}

/*

function generateNewItem() {

	item_type_field = document.getElementById("item-type");
	base_type_field = document.getElementById("base-type");
	item_level_field = document.getElementById("item-level");

	base_types.map(function(base) {
		if (base.name === base_type_field)
	});

}

*/