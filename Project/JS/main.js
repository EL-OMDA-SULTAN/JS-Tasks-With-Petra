// Valid Input To Accept Only Numbers From 1 To 26
let inPut=document.getElementById('input');

inPut.addEventListener('keypress',checkKey);
inPut.placeholder='Enter Number From 1 To 26'
function checkKey(event){
    let key=event.key;
    let pat=/[0-9]/;
    if(!(pat.test(key))){
        event.preventDefault()
    }
}

// Handel Onclick button if number not between 1 & 26

let butShow=document.getElementById('button-addon2');
butShow.addEventListener('click',validOrShow);

function validOrShow(){
    let divInvalid=document.getElementById('invalid-input');
    if(inPut.value >=1 && inPut.value <=26){
        divInvalid.innerText='';
        addChar();
    }
    else{
        divInvalid.innerText='Invalid Number Of Characters';
        divAddChr.innerHTML='';
        divShow.innerHTML='';
    }
}
let lettersArray="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 26 english letters

let divShow=document.getElementById('char-img'); // div to show characters images
let divAddChr=document.getElementById('char-button'); // div to add characters as buttons                
function addChar(){
    let buttonChar=[];
    divAddChr.innerHTML='';
    divShow.innerHTML='';
    for(let i=0; ; i++){
        let randomChar = lettersArray[Math.floor(Math.random() * 26)];
        if(buttonChar.length == inPut.value){
            break;
        }
        else if(buttonChar.includes(randomChar)){
            continue;
        }
        else{
            buttonChar.push(randomChar);
        }
    }
    for(let j = 0 ; j < buttonChar.length ;j++){
        let newButton=document.createElement('button');
        newButton.innerText=buttonChar[j];
        newButton.setAttribute('class','btn me-3 mb-3 show-img');
        divAddChr.appendChild(newButton);
    }
    showImage();
}

// show characters images 
function showImage(){
    let newImg=document.createElement('img');
    let but=document.getElementsByClassName('show-img');
    let sound=document.getElementById('audio');
    for(let i = 0 ; i < but.length ;i++ ){
        but[i].addEventListener('click',function(){
            divShow.innerHTML='';
            newImg.src='Images/char/'+but[i].innerText+'.jpg';
            sound.play();
            divShow.appendChild(newImg);
        });
    }
}