
var randomP1=Math.floor(Math.random()*6)+1;

var diceImg="/images/dice"+ randomP1 +".png";
document.querySelector(".img1").setAttribute("src",diceImg);

var randomP2=Math.floor(Math.random()*6)+1;

var diceImg="/images/dice"+ randomP2 +".png";
document.querySelector(".img2").setAttribute("src",diceImg);



if(randomP1 > randomP2){
    document.querySelector(".container h1").innerHTML=" 🏆 Player 1 wins";
}
else if(randomP1 < randomP2){
    document.querySelector(".container h1").innerHTML=" 🏆 Player 2 wins";
}
else{
    document.querySelector(".container h1").innerHTML=" 🤝 It's a Draw!! ";
}
