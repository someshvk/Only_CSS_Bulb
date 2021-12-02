let myTimeout;
let flickeringTimeout;
const clickSound = new Audio('/sounds/click.mp3');
const flickeringSound = new Audio('/sounds/flicker.mp3');
let socialsElement = document.getElementsByClassName("buttons-container");
let textElement = document.getElementById("kmfid");
const bodyElement = document.body;
let bulbElement = document.getElementById('bulb');

function bulbActionFunction(){
    const decider = document.getElementById('lightswitch');
    if(decider.checked){
        document.documentElement.style.setProperty('--backgroundOnOff', '#fff');
        startBulb();
    }
    else{
        document.documentElement.style.setProperty('--backgroundOnOff', 'rgb(73, 75, 88)');
        stopBulb();
    }
}

function stopBulb(){
    clickSound.play();
    flickeringSound.pause();
    flickeringSound.currentTime = 0;
    clearTimeout(myTimeout);
    clearTimeout(flickeringTimeout);
    for(let i = 0; i < socialsElement.length; i++) 
        socialsElement[i].style.display = 'none';

    bulbElement.className = "off";
    bodyElement.classList.remove("bg-light-flickering");
    bodyElement.style.background = "rgb(11, 12, 26)";
    textElement.style.display = "none";
}

function startBulb(){
    clickSound.play();
    bulbElement.className = "on";
    bulbElement.classList.add("flickering");
    bodyElement.style.removeProperty('background');
    bodyElement.classList.add("bg-light-flickering");
    textElement.style.display = "inline-block";

    for(let i = 0; i < socialsElement.length; i++)
        socialsElement[i].style.display = 'inline-block';

    flickeringTimeout = setTimeout(function(){
        flickeringSound.play();
    }, 3000);
    myTimeout = setTimeout(function(){
        bulbElement.classList.remove("flickering");
        bodyElement.classList.remove("bg-light-flickering");
        bodyElement.style.background = "radial-gradient(circle, #bfdff3, #8eaec9)";
    }, 5800);
}