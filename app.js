const timeMinute = document.querySelector(".time-minute");
const timeSecond = document.querySelector(".time-second");
const timeMilisecond = document.querySelector(".time-milisecond");

const onay = document.querySelector("#onay");
const durdur = document.querySelector("#durdur");

let min = 0;
let sec = 0;
let msec = 0;
let stopTime = true;

onay.addEventListener("click", başlat);
durdur.addEventListener("click",durdurFonk);

function başlat(e) {
    if(stopTime ==true){
        stopTime = false;
        onay.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25       0 1 1-2.5 0v-3.5z"/>
        </svg>
        `
        işlem();

    }else if(stopTime ==false){
        stopTime = true;
        onay.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
        `
    }
    console.log(stopTime);
}


function durdurFonk(e) {

        stopTime = true;
        timeMinute.innerText = "00";
        timeSecond.innerText = "00";
        timeMilisecond.innerText = "00";
        min = 0;
        sec = 0;
        msec = 0;
        onay.innerHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
        `

}

function işlem(){
    if(stopTime==false){
        min = parseInt(min);
        sec = parseInt(sec);
        msec = parseInt(msec);

        msec += 1;

        if (msec == 99){
            sec += 1;
            msec = 0;
        }
        if(sec == 60) {
            min += 1;
            sec = 0;
            msec = 0;
        }

        if(msec < 10 || msec == 0){
            msec = "0" + msec;

        }

        if(sec < 10 || sec == 0){
            sec = "0" + sec;
        }

        if(min < 10 || min == 0){
            min = "0" + min;
        }

        timeMinute.innerText = min;
        timeSecond.innerText = sec;
        timeMilisecond.innerText = msec;

        setTimeout(işlem,10)
    }
}

