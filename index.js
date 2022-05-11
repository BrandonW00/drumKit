var buttons = document.querySelectorAll(".drum");

for(i=0; i<buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);
}
document.addEventListener("keydown", handleClick);
function handleClick(e){
  var buttonInnerHTML = this.innerHTML;
  var buttonPressInnerHTML = e.key;
  switch(buttonInnerHTML || buttonPressInnerHTML){
    case "w":
      alert("w button is working");
      var tomOne = new Audio("sounds/tom-1.mp3");
      tomOne.play();
      break;
    case "a":
      alert("a button is working");
      var tomTwo = new Audio("sounds/tom-2.mp3");
      tomTwo.play();
      break;
    case "s":
      alert("s button is working");
      var tomThree = new Audio("sounds/tom-3.mp3");
      tomThree.play();
      break;
    case "d":
      alert("d button is working");
      var tomFour = new Audio("sounds/tom-4.mp3");
      tomFour.play();
      break;
    case "j":
      alert("j button is working");
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      alert("k button is working");
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      alert("l button is working");
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
      default:
        console.log(buttonInnerHTML);
  }
}
