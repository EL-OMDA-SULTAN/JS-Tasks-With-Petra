function addAlert(){
    alert('all done');
}

var st;
function setTime(){
    st=setTimeout(addAlert,3000);
}

function addText(){
    document.getElementById('p1').innerText='Alert Is Start';
    setTime();
}

function clearText(){
    clearTimeout(st);
    document.getElementById('p1').innerText='All compleated';
}