document.getElementById('sub').disabled=true;
let inputValidArray=['false','false','false','false','false','false','false','false','false'];

// full Name Functions


let fName = document.forms[0].fullName;
fName.placeholder='ex : Ali_saad';
fName.title='one [A-Z][a-z] or more & one [ _ ] not in begin & length = 16';

function fullName(){
    fName.addEventListener('keypress',validInput);
    fName.addEventListener('blur',checkValidation);
}

function validInput(event){
    let key=event.key;
    let pat1 =/[a-z]/;
    let pat2 = /[A-Z]/;
    let inInput = fName.value;
    if(inInput.length == 16){
        alert("only 16 Character Is Valid" );
    }
    else if(key == '_' && inInput == '' || 
        key == '_' && inInput[inInput.length-1]=='_'){
            alert("_ can't be in start || two _ coming to gether" );
        event.preventDefault();
    }
    else if(pat1.test(key) || pat2.test(key) || key == '_' ){
        fName.value=inInput;
    }
    else{
        event.preventDefault();
    }
}

function checkValidation(){
    let nameValid = document.getElementById('Name-valid');
    if(fName.value.length <16){
        nameValid.innerText ='Invalid Name';
        nameValid.style.color='rgb(227, 5, 5)';
        inputValidArray[0]='false';
    }
    else{
        nameValid.innerText ='valid Name';
        nameValid.style.color='green';
        inputValidArray[0]='true';
    }
}

fullName();

// Email Functions

let email=document.forms[0].email;
email.placeholder='ex : xxxxxxx@xxxxx.com';
email.title='start With alpha '

function emailInput(){
    email.addEventListener('blur',validEmail);
}

function validEmail(){
    let emailValue=email.value;
    let emailValid=document.getElementById('email-valid');
    let pat1=/@/,pat2=/.com/;
    if(emailValue == '.' && emailValue[emailValue.length - 2] == '@'){

    }
    if(emailValue.indexOf('.') && emailValue[emailValue.indexOf('.') - 1] == '@' ||
        emailValue == '' || emailValue[0]=='@' ||
        !(pat1.test(emailValue)) || !(pat2.test(emailValue))){
            emailValid.innerText ='Invalid Email';
            emailValid.style.color='rgb(227, 5, 5)';
            inputValidArray[1]='false';
    }
    else{
        emailValid.innerText ='Valid Email';
        emailValid.style.color='green';
        inputValidArray[1]='true';
    }
}

emailInput();

// City Selector

let citySelector=document.forms[0].city;
citySelector.options[0].disabled=true;

function selectCity(){
    citySelector.addEventListener('blur',cityOption);
}

function cityOption(){
    let selectedOption = document.getElementById('select-option');
    let bool=false;
    for(op in citySelector.options){
        if(citySelector.options[op].selected && 
            citySelector.options[op].disabled == false){
                bool=true;
                break;
            }
    }
    if(!bool){
        selectedOption.innerText='Need To Select City';
        selectedOption.style.color='rgb(227, 5, 5)';
        inputValidArray[2]='false';
    }
    else{
        selectedOption.innerText='';
        inputValidArray[2]='true';
        // selectedOption.style.color='green';
    }
}

selectCity();


// gender radio && militrly

let genderOption=document.forms[0].gender;

function showHidden(){
    for(let i = 0;i<genderOption.length;i++){
        genderOption[i].addEventListener('click',genderCheck)
    }
}

function genderCheck(){
    let dis=document.getElementById('dis-none');
    let genderC=false;
    for(let i = 0;i<genderOption.length;i++){
        if(genderOption[i].checked == true){
            genderC=true;
        }
        if(genderOption[i].checked == true && genderOption[i].value=='male'){
            dis.style.display="block";
            onMiCheck();
            break;
        }
        else{
            dis.style.display='none';
            inputValidArray[8]='true';
        }
    }
    if(genderC) inputValidArray[3]='true';
    else inputValidArray[3]='false';
}

showHidden();

let militaryOption=document.forms[0].military;

function onMiCheck(){
for(let i = 0;i<militaryOption.length;i++){
        militaryOption[i].addEventListener('click',checkMi);
    }
}
function checkMi(){
    let militaryBool=false;
    for(let i = 0;i<militaryOption.length;i++){
        if(militaryOption[i].checked == true){
            militaryBool=true;
            break;
        }
    }
    if(militaryBool) inputValidArray[8]='true';
    else inputValidArray[8]='false';
}

// check course

let courseSelector = document.forms[0].course;

function checkCourse(){
    for(let i = 0 ; i < courseSelector.length ; i++){
        courseSelector[i].addEventListener('click',checkOption);
    }
}

function checkOption(){
    let courseText=document.getElementById('select-course');
    let courseBool = false;
    for(let i = 0 ; i < courseSelector.length ; i++){
        if(courseSelector[i].checked == true){
            courseBool = true;
            break;
        }
    }
    if(!courseBool){
        courseText.innerText='Need To select At Least One Course';
        courseText.style.color='rgb(227, 5, 5)';
        inputValidArray[4]='false'
    }
    else{
        courseText.innerText='';
        inputValidArray[4]='true'
    }
}

checkCourse();

// password 

let passwordOne=document.forms[0].Password1;
passwordOne.placeholder='ex : Aa#12 [#,@,!,&]';
passwordOne.title='At least one Capital char & Small Char optional Special char & Numbers len >=5'

let passwordTwo=document.forms[0].Password2;

function checkPassword(){
    passwordOne.addEventListener('blur',validPassword);
    passwordOne.addEventListener('keypress',checkStrong);
    passwordTwo.addEventListener('blur',validPassword2)
}


function validPassword(){
    strongText=document.getElementById('pass-strong');
    let passValue=passwordOne.value;
    let ptt1=/[A-Z]/,ptt2=/[a-z]/,ptt3 = / #|@|!|& /,ptt4=/[0-9]/;
    if(passwordOne.value == '' || passwordOne.value.length <5){
        strongText.innerText='Invalid Password';
        strongText.style.color='rgb(227, 5, 5)';
        inputValidArray[5]='false';
    }
    else{
        strongText.innerText='';
    }
    let capChar=0;
    let smallChar=0;
    let spChar=0;
    let numCount=0;
    for(let i = 0 ; i < passValue.length;i++ ){
        if(ptt1.test(passValue[i])) capChar++;
        else if(ptt2.test(passValue[i])) smallChar++;
        else if(ptt3.test(passValue[i])) spChar++;
        else if(ptt4.test(passValue[i])) numCount++;
    }
    if(passValue.length >=5 ){
        if(capChar == 0 || smallChar == 0 || spChar == 0 || numCount == 0){
            strongText.innerText='Invalid Password';
            strongText.style.color='rgb(227, 5, 5)';
            inputValidArray[5]='false';
        }
        else if(capChar == 2 && smallChar == 2 && spChar == 1 && numCount == 2 ){
            strongText.innerText='Medium strong';
            strongText.style.color='yellow';
            inputValidArray[5]='true';
        }
        else if(capChar > 2 && smallChar > 2 && spChar > 1 && numCount > 2 ){
            strongText.innerText='Strongly';
            strongText.style.color='green';
            inputValidArray[5]='true';
        }
        else{
            strongText.innerText='Weak Password';
            strongText.style.color='rgb(227, 5, 5)';
            inputValidArray[5]='true';
        }
    }
}

function checkStrong(event){
    let key=event.key;
    let passValue=passwordOne.value;
    let ptt1=/[A-Z]/,ptt2=/[a-z]/,ptt3 = / #|@|!|& /,ptt4=/[0-9]/;
    if(ptt1.test(key) || ptt2.test(key) || ptt3.test(key) || ptt4.test(key) ){
        passwordOne.value = passValue; 
    }
    else{
        event.preventDefault();
    }
}


function validPassword2(){
    let passEq=document.getElementById('pass-equel');
    if(passwordTwo.value != passwordOne.value ){
        passEq.innerText = 'PassWord Not equal';
        passEq.style.color='rgb(227, 5, 5)';
        inputValidArray[6]='false';
    }
    else if(passwordTwo.value == passwordOne.value && passwordOne.value !=''){
        passEq.innerText = 'PassWord equal';
        passEq.style.color='green';
        inputValidArray[6]='true';
    }
    else{
        passEq.innerText = '';
        inputValidArray[6]='false';
    }
}
checkPassword();

// terms

let termsCheck=document.forms[0].terms;

function checkTerms(){
    termsCheck.addEventListener('blur',validCheck);
    termsCheck.addEventListener('click',textShow)
}

function validCheck(){
    let termsText = document.getElementById('terms-check');
    if(termsCheck.checked == false){
        termsText.innerText='You Must Check Terms';
        termsText.style.color='rgb(227, 5, 5)';
        inputValidArray[7]='false';
    }
    else {
        termsText.innerText='';
        inputValidArray[7]='true';
    }
}

function textShow(){
    let termsText = document.getElementById('terms-check');
    if(termsCheck.checked){
        termsText.innerText='';
        inputValidArray[7]='true';
    }
    else{
        inputValidArray[7]='false';
    }
}
checkTerms();


//     let nameValid = document.getElementById('Name-valid'); // valid Name
//     let emailValid=document.getElementById('email-valid'); // Valid Name
//     let selectedOption = document.getElementById('select-option'); // color ='green'
//     // let militaryOption=document.forms[0].military; // militaryCheck()
//     // let genderOption=document.forms[0].gender;
//     let courseText=document.getElementById('select-course'); // ''
//     let strongText=document.getElementById('pass-strong'); //  != Invalid Password
//     let passEq=document.getElementById('pass-equel'); //  PassWord equal
//     let termsText = document.getElementById('terms-check'); // ''
// if(nameValid.innerText == 'valid Name' && nameValid.innerText != ''
//         && emailValid.innerText == 'Valid Name' && emailValid.innerText != ''
//         && selectedOption.style.color == 'green' &&
//         courseText.style.color == 'green'&& strongText.innerText != 'Invalid Password'
//         && strongText.innerText != '' && passEq.innerText == 'PassWord equal'
//         && termsText.style.color == 'green'){
//         document.getElementById('sub').disabled=false;
// }

let sub=document.forms[0];

sub.addEventListener('change',checkSubmit);

function checkSubmit(){
    // console.log(inputValidArray);
    let checkBool = true;
    for(let i = 0 ; i < inputValidArray.length ; i++){
        if(inputValidArray[i]=='false'){
            checkBool=false;
            break;
        }
    }
    if(checkBool) document.getElementById('sub').disabled=false;
    else document.getElementById('sub').disabled=true;
}