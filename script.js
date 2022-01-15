"use strict";

// let burgerButton = document.getElementById('toggleButton');
// let navBar = document.getElementById('navigation-ul');


// burgerButton.addEventListener('click', function() {
//     navBar.classList.toggle('toggle');
//     burgerButton.classList.toggle('active');
// })




// slider

let dataSlider = [
    {
        id: 1,
        imgUrl:'images/teaa4.jpg',
        title: 'Chill,Cure & Move',
        paragraph:'Chamomile,Ginger & green tea'
    },{
        id: 2,
        imgUrl:'images/teaaaaa.jpg',
        title: 'Herbal Tea',
        paragraph:'Chamomile,Peppermint & Lemon Balm'
    },{
        id: 3,
        imgUrl:'images/teeea.jpg',
        title: 'Sophias',
        paragraph:'Pure Green,East rose & Wild Berry'
    },{
        id: 4,
        imgUrl:'images/tteaaa.jpg',
        title: 'Tea Atelier',
        paragraph:'Black, White,green & herbal'
    },{
        id: 5,
        imgUrl:'images/te.jpeg',
        title: 'Dopigenn',
        paragraph:'Black,green & herbal'
    }
];

let sliderIndex = 0;
let arrowRight = document.getElementById('right-arrow');
let arrowLeft = document.getElementById('left-arrow');
let sliderContent = document.getElementById('slider_content');
let serviceWrapper = document.getElementById('service-wrapper');
let selectorList = document.getElementsByClassName('selector');

function createWrapperDiv(){
    let wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('class', 'box-wrapper');

    return wrapperDiv;
}

function createBoxDiv(){
    let boxDiv = document.createElement('div');
    boxDiv.setAttribute('class', 'box');

    return boxDiv;
}

function createImgTag(item){
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', item.imgUrl);
    imgTag.setAttribute('alt', 'image');

    return imgTag;
}

function createH3Tag(item){
    let H3Tag = document.createElement('h3');
    H3Tag.append(item.title);

    return H3Tag;
}

function createPtag(item){
    let pTag = document.createElement('p');
    pTag.append(item.paragraph);

    return pTag;
}

function createSliderSelector(){
    let selectors = document.createElement('div');
    selectors.classList.add('selectors');

    dataSlider.forEach( (element) => {
        let selector = document.createElement('div');
        selector.classList.add('selector');
        selector.setAttribute('data-id', element.id - 1);

        selector.onclick = function(event){
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            slider();
        };

        selectors.appendChild(selector);
    });

    return selectors;
}

function slider(){
    sliderContent.innerHTML = '';
    let sliderItemWrapper = createWrapperDiv(dataSlider[sliderIndex]);
    let sliderItem = createBoxDiv(dataSlider[sliderIndex]);
    let imageTag = createImgTag(dataSlider[sliderIndex]);
    let tagH3 = createH3Tag(dataSlider[sliderIndex]);
    let paragraphTag = createPtag(dataSlider[sliderIndex]);
    let selectors = createSliderSelector();

    sliderItem.appendChild(imageTag);
    sliderItem.appendChild(tagH3);
    sliderItem.appendChild(paragraphTag);
    sliderItemWrapper.appendChild(sliderItem);
    sliderContent.appendChild(sliderItemWrapper);
    sliderContent.appendChild(selectors);
    console.log(sliderItemWrapper);
    activeSelector();
}

function activeSelector(){
    selectorList[sliderIndex].classList.add('active-selector');
}

function clickLeft(){
    if(sliderIndex <= 0){
        sliderIndex = dataSlider.length - 1;
        slider();
        return;
    }
    sliderIndex--;
    slider();
}

function clickRight(){
    if(sliderIndex >= dataSlider.length - 1){
        sliderIndex = 0;
        slider();
        return;
    }
    sliderIndex++;
    slider();
}

arrowRight.addEventListener('click', clickRight);
arrowLeft.addEventListener('click', clickLeft);

setInterval( () => {
    clickRight();
}, 5000);

slider();


