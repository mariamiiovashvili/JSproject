


const loadmore = document.querySelector('#loadmore');
    let currentItems = 4;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.list .list-element')];
        for (let i = currentItems; i < currentItems + 2; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 2;

        
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })


    let readmore = document.querySelectorAll('.BuyNow');
    let overlay = document.getElementById('overlay');
    let closeSign = document.getElementById('close');

     readmore.forEach( item => {
	     item.addEventListener('click', () => {
		    overlay.classList.add('show');
	});
	
	closeSign.addEventListener('click', () => {
		overlay.classList.remove('show');
	});
});










