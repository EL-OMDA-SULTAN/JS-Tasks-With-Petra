/*is play an alert message after clicking the 'Start count!' 
button, but with a delay of 3 seconds
*/
function showAlert(){
    alert('Three Seconds Is Over');
}

function countStart(){
    timer();
    counter();
    setTimeout(setSpan,3000)
}

function timer(){
    setTimeout(showAlert,3000);
}

function counter(){
    let x=2;
    document.getElementById('counter').innerText=3;
    const timer = setInterval(function() {
        document.getElementById('counter').innerText=x; 
        x--;
        if (x == 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function setSpan(){
    document.getElementById('counter').innerText=0;
}

setSpan();

/*  make Three buttons and Three radio buttons  */

var newWindow;

function openWindow(){
    newWindow = window.open('about.html',"_blank","width=250, height=250 ,top=470 ,left=650");
    newWindow.document.write('<p>This Is New Window</p>');
    changeColor();
}

function changeColor(){
    let inputArray = document.getElementsByTagName('input');
    //console.log(inputArray);
    for(let i = 0 ; i < inputArray.length ; i++){
        if(inputArray[i].checked){
            switch(i){
                case 0:
                    newWindow.document.body.style.backgroundColor = 'lightgreen';
                    newWindow.focus();
                    break;
                case 1:
                    newWindow.document.body.style.backgroundColor = 'lightyellow';
                    newWindow.blur();
                    break;
                case 2:
                    newWindow.document.body.style.backgroundColor = 'pink';
                    newWindow.focus();
                    break;
            }
        }
    }
}

function closeWindow(){
    if( newWindow == undefined || newWindow.closed){
        alert('No Window To Close');
    }
    else{
        newWindow.close();
    }
    
}

function checkClose(){
    if(newWindow == undefined){
        alert('No Window Open Yet');
    }
    else if(newWindow.closed){
        alert('Window Is Closed');
    }
    else {
        alert('Window Is Still Open');
    }
}