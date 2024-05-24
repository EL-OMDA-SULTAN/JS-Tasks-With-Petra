function showTerms(){
    document.getElementById('terms-text').innerText='Long text of terms and conditions...';
}

function submitData(){
    let newWindow = window.open('index.html','_self');
    // let addUrl=encodeURIComponent(new URLSearchParams(new FormData(document.forms[0])))
    let addUrl='?name='+document.getElementById('name').value+'?terms='+
    document.getElementById('terms').value;
    const url = 'index.html'+ addUrl;
    newWindow.location.href =url;
    // let newWindow=window.open('index.html');
    newWindow.alert('submit Successfully');
}

document.getElementById('f-btn').addEventListener('click',setValidate)

function setValidate(){
    document.forms[0].terms.required=true;
    document.forms[0].name.required=true;
    // document.getElementById('terms').required=true;
    // document.getElementById('name').required=true;
    let inText=document.getElementById('name').value;
    for(i in inText){
        if(!(inText[i]>='a' && inText[i] <='z' || inText[i]>='A' && inText[i] <='Z')){
            alert('Only Alphapet');
            document.getElementById('name').value ='';
            break;
        }
    }
    document.forms[0].addEventListener('submit',submitData);
}


    // Another Ans 
// function showTerms(){
//     document.getElementById('terms-text').innerText='Long text of terms and conditions...';
// }

// function checkChar(event){
//     let key = event.key;
//     if(!isNaN(key) || !(key>='a' && key <='z' || key>='A' && key <='Z')){
//         event.preventDefault()
//     }
// }

// function submitData(){
//     let newWindow=window.open('index.html');
//     newWindow.alert('submit Successfully');
// }