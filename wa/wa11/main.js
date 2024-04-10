const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = [`images/gnome1.jpg`, `images/gunther.JPG`, `images/meInDrag.jpg`, `images/sadClown.jpg`, `images/snow.jpg`];

/* Declaring the alternative text for each image file */

const altText = {
    'images/gnome1.jpg' : 'A strangely attactive gnome',
    'images/gunther.JPG' : 'The God Orgalorg',
    'images/meInDrag.jpg' : 'Me, Peter Burke looking confused in drag.',
    'images/sadClown.jpg' : 'A sad, decript, dying clown',
    'images/snow.jpg' : 'A land of silence covered in white'
}



/* Looping through images */
for(let i = 0; i < fileNames.length; i++){

    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', altText[fileNames[i]]);
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


