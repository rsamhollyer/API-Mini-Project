import { ajax } from "./ajax-module.js";

let main = document.querySelector("main");

ajax("https://api.punkapi.com/v2/beers ", (resultArray) => {
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
		spanEl.classList.add("fas", "fa-times-circle");
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
	});
});
const handleCloseClick = (e) => {
	if (e.target.tagName !== "SPAN") return;
	console.log(e.target.parentNode);
	e.target.parentNode.remove();
};

main.addEventListener("click", handleCloseClick);
