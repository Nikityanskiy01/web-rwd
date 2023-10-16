const form = document.querySelector('.temperature__form');
const buttonForm = document.querySelector('.temperature__button');
const temperatureURL = "http://194.67.93.117:80/temp";
const toast = document.querySelector(".toast");
const gallery = document.querySelector(".gallery__wrapper");
const imagesURL = "http://194.67.93.117:80/images";
const retryButton = document.querySelector(".gallery__button");
const messageErrorText = document.querySelector('.message__error')
const loader = document.querySelector('.gallery__loader')

form.addEventListener('submit', sendRequest)



const toaster = (response) => {
	console.log(response)
	const cross = document.querySelector(".toast__button");
	const name = document.querySelector(".name");
	const message = document.querySelector(".message");
	name.innerText = `${response.status}`
	message.innerText = `${response.message}`


	const slideRight = function () {
		toast.style.display = "flex";
		toast.classList.toggle("slide-right");
	};
	setTimeout(slideRight, 2000);

	const slideLeft = function () {
		toast.classList.add("slide-left");
		setTimeout(function () {
			toast.classList.remove("slide-left");
		}, 1000);
	};

	const toastDisplayNone = function () {
		toast.className = 'toast'
		toast.style.display = "none";
	};

	cross.addEventListener("click", function () {
		slideLeft();
		setTimeout(toastDisplayNone, 1000);

	});

	form.addEventListener('submit', function () {
		slideLeft();
		setTimeout(toastDisplayNone, 1000)
	});

	retryButton.addEventListener('submit', function () {
		slideLeft();
		setTimeout(toastDisplayNone, 1000)
	})

};


async function sendRequest(e) {
	e.preventDefault();
	buttonForm.disabled = true;
	const auditoriumInput = form.querySelector('#temperature-auditorium');
	const temperatureInput = form.querySelector('#temperature-temp');

	const requestBody = {
		class: auditoriumInput.value,
		temp: +temperatureInput.value,
	};

	try {
		await fetchRequest("POST", temperatureURL, requestBody);
		buttonForm.disabled = false;
	} catch (error) {
		buttonForm.disabled = false;
	}
}

function showToasts(response) {
	console.log(response)
	if (response.status =="error") {
		toast.classList.add('toast__error')
	} else {
		toast.classList.remove('toast__error')
	}
	toaster(response);
}


async function fetchRequest(method, url, body = null) {
	try {
		const response = await fetch(url, {
			method: method,
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			const responseJSON = await response.json();
			showToasts(responseJSON);
			form.reset();
			return responseJSON;
		} else {
			const error = await response.json();
			const e = new Error("Something went wrong");
			e.data = error;
			showToasts(error[0]);
			throw e;
		}
	} catch (e) {
		return e;
	}
}



document.addEventListener("DOMContentLoaded", loadImages);
retryButton.addEventListener("click", loadImages);


async function loadImages() {
	
	const response = await getImages("GET", imagesURL);

	if (!Array.isArray(response)) return;

	if (response.length === 0) {
		messageErrorText.innerHTML = "Images are not found";
		return;
	} else {
		messageErrorText.innerHTML = ''
	}

	gallery.innerHTML = "";


	response.forEach((imageData) => {
		const imageElement = document.createElement('img');
		imageElement.src = imageData.url;
		imageElement.alt = imageData.alt;
		imageElement.classList.add('gallery__img');

		const captionElement = document.createElement('figcaption');
		captionElement.innerText = imageData.description;
		captionElement.classList.add('gallery__description');

		const figureElement = document.createElement('figure');
		figureElement.appendChild(imageElement);
		figureElement.appendChild(captionElement);
		figureElement.classList.add('gallery__icon');

		const linkElement = document.createElement('a');
		linkElement.classList.add('gallery__link');

		const blockImage = document.createElement('div');
		blockImage.appendChild(figureElement);
		blockImage.appendChild(linkElement);

		gallery.appendChild(blockImage);
	});
}

async function getImages(method, url) {

	try {
		loader.style.display = 'block'
		const response = await fetch(url, {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
		});
		loader.style.display = 'none'
		if (response.ok) {
			const responseJSON = await response.json();
			return responseJSON;
		} else {
			const error = await response.json();
			const e = new Error("Something went wrong");
			e.data = error;
			showToasts(error[0])
			throw e;
		}
	} catch (e) {
		throw e;
	}
}