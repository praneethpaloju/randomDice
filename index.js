var randomNumber1=Math.floor(Math.random()*6)+1;

var randomNumber2=Math.floor(Math.random()*6)+1;

document.getElementsByTagName("img")[0].setAttribute("src","/images/dice"+randomNumber1+".png");

document.getElementsByClassName("img2")[0].setAttribute("src","/images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[1].textContent="Player1 Wins!";
} else if( randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[1].textContent="Player2 Wins!";
} else {
    document.querySelectorAll("h1")[1].textContent="Draw!";
}