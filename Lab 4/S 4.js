var color1=['red','green','yellow'];
var color2=['dimgrey','white','chartreuse'];
function inDown(){
    document.getElementById("p1").style.color=color1[Math.floor(Math.random() *color1.length)];
}

function inUp(){
    document.getElementById("p1").style.color=color2[Math.floor(Math.random() *color2.length)];
}

function restColor(){
document.getElementById("p1").style.color='black';
}

function mousePosition(event){
    let x1=event.screenX;
    let x2=event.screenY;
    document.getElementById('mouse-posation').innerText='Mouse Position :'+'In X : '+ x1 +'  In Y : ' + x2;
}

function keyDown(event){

    let x=event.key;
    let y=event.shiftKey;
    let z=event.altKey;
    var na = document.getElementById('input-res').innerText.substring(14);

    if(y && z){
        alert('You Press Alt + Shift');
    }
    else if(x == 'Backspace'){
        na=na.slice(0,-1);
        document.getElementById('input-res').innerText='Input result :' + na;
    }
    else if(x.length == 1 ){
        document.getElementById('input-res').innerText+=x;
    }

    na = document.getElementById('input-res').innerText.substring(14);
    if(na[0] == 'E' || na[0] == 'e'){
        document.getElementById('print-name').innerText='My Name : Elomda Sultan';
    }
    else{
        document.getElementById('print-name').innerText='My Name : '; 
    }
}

