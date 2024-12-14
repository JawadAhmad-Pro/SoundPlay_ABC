let a = document.getElementsByClassName('A');
let b = document.getElementsByClassName('B')
let c = document.getElementsByClassName('C')
let d = document.getElementsByClassName('D')
let e = document.getElementsByClassName('E')
let f = document.getElementsByClassName('F')



const stopBtn = document.getElementById('btn');


const sounds = {
    A: new Audio('sounds/A_sound.mp3'),
    B: new Audio('sounds/B_sound.mp3'),
    C: new Audio('sounds/C_sound.mp3'),
    D: new Audio('sounds/D_sound.mp3'),
    E: new Audio('sounds/E_sound.mp3'),
    F: new Audio('sounds/F_sound.mp3')
}

let allElements = [
    ...a,
    ...b,
    ...c,
    ...d,
    ...e,
    ...f
];

stopBtn.addEventListener('click', disabledSound)


function disabledSound () {
   Object.keys(sounds).forEach(key =>{
    sounds[key].pause();
    sounds[key].currentTime = 0;
   })
}

function getVal (allElements) {
allElements.forEach(element => {
    element.addEventListener("click", () =>{
        disabledSound();
    if(element.className === "A"){
        sounds.A.play();
    }else if(element.className === "B"){
        sounds.B.play();
    }else if(element.className === "C"){
        sounds.C.play();
    }else if(element.className === "D"){
        sounds.D.play();
    }else if(element.className === "E"){
        sounds.E.play();
    }else if (element.className === "F"){
        sounds.F.play();
      }
    })
  });
}


getVal(allElements);