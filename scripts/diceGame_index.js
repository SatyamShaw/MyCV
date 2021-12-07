var randomNumber1= Math.ceil(Math.random()*6);
var randomNumber2= Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", "Images/dice"+ randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "Images/dice"+ randomNumber2+".png");

if(randomNumber1> randomNumber2)
  document.querySelector("h1").innerText="Player1 Won, Refresh to play again"
 else if(randomNumber1 == randomNumber2) {
   document.querySelector("h1").innerText="Draw!, Refresh to play again"
 }
 else  {
   document.querySelector("h1").innerText="Player2 Won, Refresh to play again"
 }
