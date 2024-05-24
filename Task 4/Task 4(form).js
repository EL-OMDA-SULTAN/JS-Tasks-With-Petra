function showTerms(){
    document.getElementById('terms-text').innerText='Long text of terms and conditions...';
}

function checkChar(event){
    let key = event.key;
    if(!isNaN(key) || !(key>='a' && key <='z' || key>='A' && key <='Z')){
        event.preventDefault()
    }
}

function submitData(){
    let newWindow=window.open('index.html');
    newWindow.alert('submit Successfully');
}