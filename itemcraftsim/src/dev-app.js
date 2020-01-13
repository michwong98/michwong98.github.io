const baseStats = {
	"ar-es": [150, 200],
	"maximum-life": [7, 12],
	"fire-light-res": [20,30]
};

const currentItem = {
	"corrupted": false,
	"quality": 0,
	"ar-es": 0,
	"maximum-life": 0,
	"fire-light-res": 0,
	"implicits": [],
	"rare": false
};

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

	implicits.forEach(function(currentImplicit) {
		const newNode = document.createElement("div");
		newNode.className = "corrupt-implicit-affix";
		newNode.innerHTML = currentImplicit.affix + "<br>";
		document.getElementsByClassName("potential-implicits")[0].appendChild(newNode);
	});

	document.getElementById("button-reset").addEventListener("click", generateNew);
	document.getElementById("Vaal").addEventListener("click", vaal);
	document.getElementById("Divine").addEventListener("click", divine);
	document.getElementById("Blessed").addEventListener("click", blessed);
	document.getElementById("Armourer").addEventListener("click", armourer);

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

	generateNew();
});

function generateNew() {

	currentItem["corrupted"] = false;
	currentItem["quality"] = 0;
	currentItem["ar-es"] = Math.floor( Math.random() * 51 ) + 150;
	currentItem["maximum-life"] = Math.floor( Math.random() * 6 )  + 7;
	currentItem["fire-light-res"] = Math.floor( Math.random() * 11 ) + 20;
	currentItem["implicits"] = [];
	currentItem["rare"] = false;

	document.getElementsByClassName("item-display-wrapper")[0].style.filter = "brightness(100%)";

	document.getElementById("qual").innerHTML = 0;
	document.getElementById("quality-wrapper").style.display = "none";
	document.getElementById("ar").innerHTML = Math.floor(121 * (1 + currentItem["ar-es"]/100));
	document.getElementById("es").innerHTML = Math.floor(24 * (1 + currentItem["ar-es"]/100));

	document.getElementById("stat-ar-es").innerHTML = currentItem["ar-es"];
	document.getElementById("stat-maximum-life").innerHTML = currentItem["maximum-life"];
	document.getElementById("stat-fire-light-res").innerHTML = currentItem["fire-light-res"];

	document.getElementById("corruption-state").style.display = "none";
	document.getElementById("implicits").style.display = "none";

	let currentImplicits = document.getElementById("implicits").getElementsByClassName("item-stat");
	for (let i = currentImplicits.length - 1; i >= 0; i--) {
		currentImplicits[i].remove();
	}

}

function armourer() {
	if (currentItem.rare) {
		return;
	} else if (currentItem.quality < 20) {
		currentItem.quality++;
		document.getElementById("qual").innerHTML = currentItem.quality;
		document.getElementById("quality-wrapper").style.display = "block";
		document.getElementById("ar").innerHTML = Math.floor(121 * (1 + (currentItem["ar-es"] + currentItem.quality)/100));
		document.getElementById("es").innerHTML = Math.floor(24 * (1 + (currentItem["ar-es"] + currentItem.quality)/100));
	}
}

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

function vaal() {

	if (currentItem.rare) {
		return;
	} else {
		const random = Math.floor(Math.random() * 2);
		switch(random) {
			case 0: 
				currentItem.rare = true;
				document.getElementsByClassName("item-display-wrapper")[0].style.filter = "brightness(70%)";
				return;
			case 1:
				generateImplicit();
				return;
		}
	}
}

function generateImplicit() {
	if (currentItem.implicits.length >= 5) {
		return;
	}
	let num = Math.floor(Math.random() * implicits.length);
	let implicit = implicits[num];
	let hasImplicit = true;
	while (hasImplicit) {
		hasImplicit = false;
		for (let i = 0; i < currentItem.implicits.length; i++) {
			const currentImplicit = currentItem.implicits[i];
			if (currentImplicit.id === implicit.id) {
				hasImplicit = true;
				break;
			}
		}
		if (hasImplicit) {
			num = Math.floor(Math.random() * implicits.length);
			implicit = implicits[num];
		}
	}
	const newImplicit = {
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

	const existingImplicits = document.getElementById("implicits").getElementsByClassName("item-stat");
	for (let i = existingImplicits.length - 1; i >= 0; i--) {
		existingImplicits[i].remove();
	}

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