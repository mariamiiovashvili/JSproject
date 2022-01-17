"use strict";



//  info from server


// read more popup

let shopNow = document.querySelectorAll('.shop-now');
let overlayshopNow = document.getElementById('overlay');
let closeSignshopNow = document.getElementById('close');

shopNow.forEach( item => {
	item.addEventListener('click', () => {
		overlayshopNow.classList.add('show');
	});
	
	closeSignshopNow.addEventListener('click', () => {
		overlayshopNow.classList.remove('show');
	});
});

// get info from server

let content = document.getElementById('content');

function getinfo() {

	function render(){
		let recivedata = this.responseText;
		let convertdata = JSON.parse(recivedata);		

		convertdata.shopNow.forEach( el => {
			let hone = document.createElement('h1');
			hone.classList.add('h1-info');
			hone.textContent = el.h1;

			let image = document.createElement('img');
			image.classList.add('img-info');
			image.setAttribute('src', el.img);

			content.appendChild(hone);
			content.appendChild(image);
		});

		console.log(convertdata);
	}

	function showerror(){
		let span = document.createElement('span');
        span.setAttribute('class', 'error-span-style');
        span.textContent = "Error";

        let img2 = document.createElement('img');
        img2.setAttribute('src', 'https://www.freeiconspng.com/uploads/sign-red-error-icon-1.png');
		img2.setAttribute('alt', 'image');

		content.appendChild(span);
		content.appendChild(img2);
	}

	let xmlrequest = new XMLHttpRequest();

	xmlrequest.addEventListener('load', render);
	xmlrequest.addEventListener('error', showerror);
	xmlrequest.open('GET', 'https://www.mockachino.com/edaf676b-6963-4e/shopNow');
	xmlrequest.send();
}

getinfo();