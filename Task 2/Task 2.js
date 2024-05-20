 // current date and time in local format on the page
function getD(){
    var lDate = new Date()

    document.getElementById('d1').innerText='Date : '+lDate.toLocaleDateString();
    document.getElementById('d2').innerText='Time : '+lDate.toLocaleTimeString();
}


// Sort the array numerically descending
var arr=[60,100,10,15,85];
 //      manual sort
for(var i = 0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            var z=arr[j];
            arr[j]=arr[i];
            arr[i]=z;
        }
    }
}
console.log('Sorting Array = ' + arr);
// console.log(arr.sort(function(a, b){return a - b}))

// Create an array of objects
var obArr =[
    { name:'omda',degree:100 },
    { name:'ali',degree:90 },
    { name:'saad',degree:80 },
    { name:'mohamed',degree:70 },
    { name:'aya',degree:60 },
    { name:'nada',degree:50 },
    { name:'fady',degree:40 },
    { name:'hady',degree:30 },
];

// Find student Name, who got degree between 90 and 100
var text='';
for(a in obArr){
    if(obArr[a].degree >=90 && obArr[a].degree<=100 ){
        text+=obArr[a].name+' ';
    }
}
console.log('students that git 90 or more : \n'+ text)

// Print students names, who got a degree less than 60
var text='';
for(a in obArr){
    if(obArr[a].degree <60){
        text+=obArr[a].name+' ';
    }
}
console.log('students that git less  than 60 : \n'+ text)

//  Add a new student to the array
obArr.push({ name:'gamal',degree:75 })
for(a in obArr){
    console.log(obArr[a])
}
console.log('------------------------------------\n---------------------------------')

//  Remove the last student of the array

obArr.pop();
for(a of obArr){
    console.log(a)
}