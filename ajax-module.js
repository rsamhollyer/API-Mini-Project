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
