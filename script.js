let jokeContent = document.querySelector("#quote");
let nextButton = document.querySelector("#next");
document.addEventListener('DOMContentLoaded',NextQuote);

async function NextQuote() {
	const url = await fetch("https://icanhazdadjoke.com/", {
		headers: {
			'Accept': 'application/json'
		}
	}); 
	const obj = await url.json();
	jokeContent.innerHTML = obj.joke;
}

nextButton.addEventListener('click', NextQuote);
