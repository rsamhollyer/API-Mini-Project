export const ajax = (url, callback, method = "GET") => {
	const request = new XMLHttpRequest();
	request.addEventListener("readystatechange", (evt) => {
		let req = evt.target;
		if (req.readyState !== 4) return;
		if (req.status === 200) return callback(req.response);
		callback("");
	});
	request.open(method, url);
	request.send();
};

// let body = document.querySelector("body");
// let createULEL = document.createElement("ul");
// let LIEL1 = document.createElement("li");
// let LIEL2 = document.createElement("li");
// let LIEL3 = document.createElement("li");
// let LIEL4 = document.createElement("li");

// body.append(createULEL);
// createULEL.innerText = "THis is a list";
// createULEL.append(LIEL1, LIEL2, LIEL3, LIEL4);

// ajax("./test.txt", (r) => {
// 	LIEL1.append(r);
// 	LIEL2.append(r);
// 	LIEL3.append(r);
// 	LIEL4.append(r);
// });
