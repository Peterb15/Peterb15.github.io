const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */

const altText = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Closeup of sea shore',
    'pic3.jpg' : 'Purple flowers',
    'pic4.jpg' : 'Picture of Hieroglyphs',
    'pic5.jpg' : 'Closeup of moth'
}



/* Looping through images */
for(let i = 0; i < fileNames.length; i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', alterTextt[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', temp => {
        displayedImage.setAttribute('src', temp.target.src);
        displayedImage.setAttribute('alt', temp.target.alt);

    });
}
    

/* Wiring up the Darken/Lighten button */


btn.addEventListener('click', btnFunction);

function btnFunction() {
    const currentSetting = btn.getAttribute('class');
    if(currentSetting == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}


