let imgSrcArray=['images/one.jpg','images/Two.jpg','images/Three.jpg','images/Four.jpg','images/Five.jpg'];
var currentImgSrc= document.images[0].src;

var changTime;
function change(){
    changTime=setInterval(changImgSrc,800);
}

function stop(){
    clearInterval(changTime);
}

function changImgSrc(){
    let index = imgSrcArray.indexOf(currentImgSrc);
    if(index == imgSrcArray.length - 1){
        index = 0;
        currentImgSrc = imgSrcArray[index];
        ImgSrc(index);
    }
    else{
        index++;
        currentImgSrc = imgSrcArray[index]
        ImgSrc(index);
    }
}

function ImgSrc(x){
    document.images[0].src=imgSrcArray[x];
}
