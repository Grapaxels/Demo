var slideImg = document.getElementById("slideImg");

var images = new Array(
  "images/logo2.jpeg",
  "images/logo3.jpeg",
  "images/logo4.jpeg",
  "images/logo5.jpeg",
  "images/logo6.jpeg",
  "images/logo7.jpeg",
  "images/logo8.jpeg"
);
var len = images.length;
var i = 0;

function slider(){
  if(i>len-1){
    i=0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()',3000);
}

