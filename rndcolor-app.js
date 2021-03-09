const rndColorButton = document.querySelector('#rndColorB');
const rndColorBody = document.querySelector('#rndColorBody');
const rndColorH1 = document.querySelector('#rndColorH1');
rndColorButton.addEventListener('click',rnd)
    
function rnd() { 
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    const rndColorRGB = `rgb(${R}, ${G}, ${B})`;
    rndColorBody.style.backgroundColor = `${rndColorRGB}`;
    rndColorH1.innerText = rndColorRGB;
    }