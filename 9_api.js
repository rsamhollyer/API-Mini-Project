import { ajax } from "./ajax-module.js";

ajax("https://api.punkapi.com/v2/beers ", (resultArray) => {
	let body = document.querySelector("body");
	let main = document.querySelector("main");
	let h1El = document.createElement("h1");
	let mainEl = document.createElement("main");
	h1El.innerText = "BEERS";
	h1El.classList.add("title");
	body.prepend(mainEl);
	body.prepend(h1El);
	resultArray = JSON.parse(resultArray);
	resultArray.forEach((beer) => {
		let outerDivEl = document.createElement("div");
		let imgEl = document.createElement("img");
		let sectionEl = document.createElement("section");
		let titleEl = document.createElement("h2");
		let foodPairEl = document.createElement("h4");
		let paraEl = document.createElement("p");
		let foodsParaEl = document.createElement("p");
		let spanEl = document.createElement("span");

		main.append(outerDivEl);
		outerDivEl.append(imgEl, sectionEl, spanEl);
		sectionEl.append(titleEl, paraEl, foodPairEl, foodsParaEl);
		imgEl.src = beer.image_url;
		titleEl.append(beer.name);
		paraEl.append(beer.description);
		foodPairEl.innerText = "Pairs Well With:";
		foodsParaEl.append(beer.food_pairing);

		paraEl.classList.add("description");
		foodsParaEl.classList.add("food-pairing");
		spanEl.classList.add("fas", "fa-times-circle");
	});
});
const handleCloseClick = (e) => {
	if (e.target.tagName !== "SPAN") return;
	e.target.parentNode.remove();
};

main.addEventListener("click", handleCloseClick);
