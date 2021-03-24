window.onload=changeimg;

//start point
var img = 0;
var time=3000; //3s

function changeimg(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for(i=0; i<x.length; i++){
        x[i].style.display="none";
    }
    img++;
    if(img>x.length){
        img=x.length;
        
    }
    x[img-1].style.display = "block";
        
    setTimeout(changeimg,time);
}




