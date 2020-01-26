//TODO: Sockets and Links

//Default Stats.
const baseStats = {
	"ar-es": [150, 200],
	"maximum-life": [7, 12],
	"fire-light-res": [20,30]
};

//Properities and State of the current item.
const currentItem = {
	"corrupted": false,
	"quality": 0,
	"ar-es": 0,
	"maximum-life": 0,
	"fire-light-res": 0,
	"implicits": [],
	"rare": false
};

//Pool of Possible Implicit Rolls, default corrupted implicits for gloves.
const implicits = [
	{
		"id": "_c00",
		"affix": "Curse Enemies with Level # Despair on Hit",
		"values": [
			10,
			12
		]
	},
	{
		"id": "_c01",
		"affix": "Curse Enemies with Level # Elemental Weakness on Hit",
		"values": [
			10,
			12
		]
	},
	{
		"id": "_c02",
		"affix": "Curse Enemies with Level # Enfeeble on Hit",
		"values": [
			10,
			12
		]
	},
	{
		"id": "_c03",
		"affix": "Curse Enemies with Level # Temporal Chains on Hit",
		"values": [
			10,
			12
		]
	},
	{
		"id": "_c04",
		"affix": "Curse Enemies with Level # Vulnerability on Hit",
		"values": [
			10,
			12
		]
	},
	{
		"id": "_c05",
		"affix": "+# to level of Socketed Gems",
		"values": [
			1
		]
	},
	{
		"id": "_c06",
		"affix": "Attacks have +#% to Critical Strike Chance",
		"range": [
			0.5,
			0.8,
			0.1
		]
	},
	{
		"id": "_c07",
		"affix": "#% increased Attack Speed",
		"range": [
			8,
			10,
			1
		]
	},
	{
		"id": "_c08",
		"affix": "#% increased Cast Speed",
		"range": [
			8,
			10,
			1
		]
	},
	{
		"id": "_c09",
		"affix": "Spells have +#% to Critical Strike Chance",
		"range": [
			0.5,
			0.8,
			0.1
		]
	},
	{
		"id": "_c10",
		"affix": "+# to Maximum Frenzy Charges",
		"values": [
			1
		]
	},
	{
		"id": "_c11",
		"affix": "+# to Level of Socketed Duration Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c12",
		"affix": "+# to Level of Socketed AoE Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c13",
		"affix": "+# to Level of Socketed Aura Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c14",
		"affix": "+# to Level of Socketed Curse Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c15",
		"affix": "+# to Level of Socketed Trap or Mine Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c16",
		"affix": "+# to Level of Socketed Warcry Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c17",
		"affix": "+# to Level of Socketed Projectile Gems",
		"values": [
			2
		]
	},
	{
		"id": "_c18",
		"affix": "#% increased maximum Life",
		"range": [
			4,
			6,
			1]
	},
	{
		"id": "_c19",
		"affix": "#% increased maximum Energy Shield",
		"range": [
			4,
			6,
			1]
	}
];

window.addEventListener("DOMContentLoaded", (evt) => {

	//Displays all possible implicit rolls.
	implicits.forEach(function(currentImplicit) {
		const newNode = document.createElement("div");
		newNode.className = "corrupt-implicit-affix";
		newNode.innerHTML = currentImplicit.affix + "<br>";
		document.getElementsByClassName("potential-implicits")[0].appendChild(newNode);
	});

	//Reset button, resets item properities to default.
	document.getElementById("button-reset").addEventListener("click", generateNew);

	//Adds onclick functions for each currency item.
	document.getElementById("Vaal").addEventListener("click", vaal);
	document.getElementById("Divine").addEventListener("click", divine);
	document.getElementById("Blessed").addEventListener("click", blessed);
	document.getElementById("Armourer").addEventListener("click", armourer);

	//Modal Button, changes visibility.
	const helpModal = document.getElementById("help-modal");
	document.getElementById("help").addEventListener("click", function() {
		helpModal.style.display = "block";
	});
	document.getElementsByClassName("close-modal")[0].addEventListener("click", function() {
		helpModal.style.display = "none";
	});
	window.addEventListener("click", function(event) {
		if (event.target == helpModal) {
			helpModal.style.display = "none";
		}
	});

	//Initializes the first crafting base.
	generateNew();
});

//Reset function. Removes modifications and reverts to default values.
function generateNew() {

	//Resets Values and State to Default.
	currentItem["corrupted"] = false;
	currentItem["quality"] = 0;
	currentItem["ar-es"] = Math.floor( Math.random() * 51 ) + 150;
	currentItem["maximum-life"] = Math.floor( Math.random() * 6 )  + 7;
	currentItem["fire-light-res"] = Math.floor( Math.random() * 11 ) + 20;
	currentItem["implicits"] = [];
	currentItem["rare"] = false; //Rare item quality prevents further modifying.

	//Filter changes when item is set to rare quality.
	document.getElementsByClassName("item-display-wrapper")[0].style.filter = "brightness(100%)";

	//Resets quality and recalculates ar/es values.
	document.getElementById("qual").innerHTML = 0;
	document.getElementById("quality-wrapper").style.display = "none";
	document.getElementById("ar").innerHTML = Math.floor(121 * (1 + currentItem["ar-es"]/100));
	document.getElementById("es").innerHTML = Math.floor(24 * (1 + currentItem["ar-es"]/100));
	document.getElementById("stat-ar-es").innerHTML = currentItem["ar-es"];
	document.getElementById("stat-maximum-life").innerHTML = currentItem["maximum-life"];
	document.getElementById("stat-fire-light-res").innerHTML = currentItem["fire-light-res"];

	//When corrupted state is removed, hide the corruption text line.
	document.getElementById("corruption-state").style.display = "none";
	document.getElementById("implicits").style.display = "none";

	//Deletes existing implicits from display.
	let currentImplicits = document.getElementById("implicits").getElementsByClassName("item-stat");
	for (let i = currentImplicits.length - 1; i >= 0; i--) {
		currentImplicits[i].remove();
	}

}

//Adds quality, affects ar/es values.
function armourer() {
	if (currentItem.rare) {
		return;
	} else if (currentItem.quality < 20) { //Maximum quality is 20%.
		currentItem.quality++;
		document.getElementById("qual").innerHTML = currentItem.quality;
		document.getElementById("quality-wrapper").style.display = "block";
		//Quality increases the ar/es values.
		document.getElementById("ar").innerHTML = Math.floor(121 * (1 + (currentItem["ar-es"] + currentItem.quality)/100));
		document.getElementById("es").innerHTML = Math.floor(24 * (1 + (currentItem["ar-es"] + currentItem.quality)/100));
	}
}

//Generates new random values for explicit modiifiers.
function divine() {

	if (currentItem.rare) {
		return;
	} else {
		currentItem["ar-es"] = Math.floor( Math.random() * 51 ) + 150;
		currentItem["maximum-life"] = Math.floor( Math.random() * 6 )  + 7;
		currentItem["fire-light-res"] = Math.floor( Math.random() * 11 ) + 20;
		document.getElementById("ar").innerHTML = Math.floor(121 * (1 + (currentItem["ar-es"] + currentItem.quality)/100));
		document.getElementById("es").innerHTML = Math.floor(24 * (1 + (currentItem["ar-es"] + currentItem.quality)/100));
		document.getElementById("stat-ar-es").innerHTML = currentItem["ar-es"];
		document.getElementById("stat-maximum-life").innerHTML = currentItem["maximum-life"];
		document.getElementById("stat-fire-light-res").innerHTML = currentItem["fire-light-res"];
	}

}

//Randomly modifies:
//0 Sets item rarity to rare, disabling further modifications
//1 Generates a new implicit modifier
function vaal() {

	if (currentItem.rare) {
		return;
	} else {
		const random = Math.floor(Math.random() * 2);
		switch(random) {
			case 0: 
				currentItem.rare = true;
				//Filter changes to indiciate rare status.
				document.getElementsByClassName("item-display-wrapper")[0].style.filter = "brightness(70%)";
				return;
			case 1:
				generateImplicit();
				return;
		}
	}
}

//Function called by Vaal, generates a random implicit modifier from implicit pool.
//TODO: replace fifth implicit on maximum implicit count
function generateImplicit() {
	if (currentItem.implicits.length >= 5) {
		return;
	}
	let num = Math.floor(Math.random() * implicits.length);
	let implicit = implicits[num];
	let hasImplicit = true;
	while (hasImplicit) { //Check if implicit already exists on the current item.
		hasImplicit = false;
		for (let i = 0; i < currentItem.implicits.length; i++) {
			const currentImplicit = currentItem.implicits[i];
			if (currentImplicit.id === implicit.id) {
				hasImplicit = true;
				break;
			}
		}
		if (hasImplicit) { //Select a random corruption implicit.
			num = Math.floor(Math.random() * implicits.length);
			implicit = implicits[num];
		}
	}
	const newImplicit = { //Copies the id and despcritor of the affix.
		"id": implicit.id.slice(),
		"affix": implicit.affix.slice()
	}
	if (implicit.hasOwnProperty("values")) {
		const randomNum = Math.floor(Math.random() * implicit.values.length);
		const value = implicit.values[randomNum];
		newImplicit.value = value;
		newImplicit.values = implicit.values.slice();
	} else if (implicit.hasOwnProperty("range")) {
		newImplicit.value = implicit.range[2]*Math.floor(Math.random() * (1+(implicit.range[1] - implicit.range[0])/implicit.range[2])) + implicit.range[0];
		newImplicit.range = implicit.range.slice();
	}
	currentItem.implicits.push(newImplicit);
	const implicitsDisplay = document.getElementById("implicits");
	implicitsDisplay.style.display = "block";
	let itemAffix = newImplicit.affix.slice();
	let affixText = itemAffix.replace("#", newImplicit.value);
	const newImplicitStat = document.createElement("span");
	implicitsDisplay.appendChild(newImplicitStat);
	newImplicitStat.className = "item-stat"
	newImplicitStat.innerHTML = '<span class="stat-mod">' + affixText + '</span>';
	newImplicitStat.appendChild(document.createElement("br"));
	document.getElementById("corruption-state").style.display = "block";
}

//Generates new random values for implicit modiifiers.
function blessed() {

	if (currentItem.rare) {
		return;
	} else {
		currentItem.implicits.forEach(function(implicit) {
			if (implicit.hasOwnProperty("values")) {
				implicit.value = implicit.values[Math.floor(Math.random() * implicit.values.length)];
			} else if (implicit.hasOwnProperty("range")) {
				implicit.value = implicit.range[2]*Math.floor(Math.random() * (1+(implicit.range[1] - implicit.range[0])/implicit.range[2])) + implicit.range[0];
			}
		});
	}

	//Removes implicits from display.
	const existingImplicits = document.getElementById("implicits").getElementsByClassName("item-stat");
	for (let i = existingImplicits.length - 1; i >= 0; i--) {
		existingImplicits[i].remove();
	}

	//Adds implicits to item display.
	const implicitsDisplay = document.getElementById("implicits");
	currentItem.implicits.forEach(function(implicit) {
		const itemAffix = implicit.affix.slice();
		const affixText = itemAffix.replace("#", implicit.value);
		const newImplicitStat = document.createElement("span");
		implicitsDisplay.appendChild(newImplicitStat);
		newImplicitStat.className = "item-stat"
		newImplicitStat.innerHTML = '<span class="stat-mod">' + affixText + '</span>';
		newImplicitStat.appendChild(document.createElement("br"));
	});

} 