function keyCode(event){
    let key_code=event.keyCode;
    let key_value=event.key;
    alert('you press a key with name : / ' +
        key_value + ' / and his code = ' + key_code);
}

function mouseKey(event){
    let mouse = event.button;
    // console.log(mouse);
    if(mouse == 0){
        alert('You Press Left click !');
    }
    else if(mouse == 2){
        alert('You Press Right click !');
    }
    else if(mouse == 1){
        alert('You Press Wheel In Mouse !');
    }
}
document.getElementById('btn1').addEventListener('click',startClock);
// document.getElementById('btn2').addEventListener('click',stopClock);
// document.getElementById('btn3').addEventListener('click',timeGap);

function startClock(){
    alert('Clock Is Start !');
    showClock();
}

let timer;
let curTime;

function showClock(){
    curTime = new Date();
    document.getElementById('clock-show').innerText='Time : ' + curTime.toLocaleTimeString();
    timer = setInterval(showClock,1000);
}

// function stopClock(){
//     document.getElementById('clock-stop').innerText='Stop Time : ' + curTime.toLocaleTimeString();
// }

// function timeGap(){
//     var x = document.getElementById('clock-stop').innerText;
//     console.log(x);
//     var y = curTime.toLocaleTimeString();
//     // document.getElementById('clock-gap').innerText = 'Time Gap : ' + 
//     // Math.abs(parseInt( y[0] ) - parseInt( x[12] )) + 
//     // Math.abs(parseInt( y[1] ) - parseInt( x[13] )) + ':'+
//     // Math.abs(parseInt( y[3] ) - parseInt( x[15] )) + 
//     // Math.abs(parseInt( y[4] ) - parseInt( x[16] )) + ':'+
//     // Math.abs(parseInt( y[6] ) - parseInt( x[18] )) +
//     // Math.abs(parseInt( y[7] ) - parseInt( x[19] ));

//     // var str='';
//     // let counter=0;
//     // for(let i=0 ; i < 8 ; i++ ){
//     //     counter++;
//     //     if(i == 2 || i == 5){
//     //         continue;
//     //     }
//     //     else if(y[i] > x[i+12]){
//     //         if(counter%2==0){
//     //             str+=':'+Math.abs(parseInt( y[i] ) - parseInt( x[i+12] ));
//     //         }
//     //         else{
//     //             str+=Math.abs(parseInt( y[i] ) - parseInt( x[i+12] ));
//     //         }
//     //     }
//     //     else{
//     //         str+='0';
//     //     }
//     // }
//     // console.log(str);
//     // document.getElementById('clock-gap').innerText = 'Time Gap : ' +str;
// }