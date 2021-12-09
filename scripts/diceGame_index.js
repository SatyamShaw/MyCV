
document.querySelector(".rollDice").addEventListener("click", rollDice);

function rollDice()
{
  var randomNumber1= Math.ceil(Math.random()*6);
  var randomNumber2= Math.ceil(Math.random()*6);

  document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2+".png");

  document.querySelector("h1").setAttribute("src", "images/dice"+ randomNumber2+".png");

  if(randomNumber1> randomNumber2)
    document.querySelector("h1").innerText="Player1 Won"
   else if(randomNumber1 == randomNumber2) {
     document.querySelector("h1").innerText="Draw!"
   }
   else  {
     document.querySelector("h1").innerText="Player2 Won"
   }
}
