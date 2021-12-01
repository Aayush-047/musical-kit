var i;
for(i=0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){

        makeSound(this.innerHTML);
        animations(this.innerHTML);

  });
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animations(event.key);
});

function makeSound(sound){
  switch(sound){

    case "w" :
    var audio1=new Audio("sounds/crash.mp3");
    audio1.play();
    break;

    case "a" :
    var audio2=new Audio("sounds/kick-bass.mp3");
    audio2.play();
    break;

    case "s" :
    var audio1=new Audio("sounds/snare.mp3");
    audio1.play();
    break;

    case "d" :
    var audio1=new Audio("sounds/tom-1.mp3");
    audio1.play();
    break;

    case "j" :
    var audio1=new Audio("sounds/tom-2.mp3");
    audio1.play();
    break;

    case "k" :
    var audio1=new Audio("sounds/tom-3.mp3");
    audio1.play();
    break;

    case "l" :
    var audio1=new Audio("sounds/tom-4.mp3");
    audio1.play();
    break;

    default :
    console.log(this.innerHTML);

  }

}

function animations(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  },100);
}
