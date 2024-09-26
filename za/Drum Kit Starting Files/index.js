var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i=0; i < numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
       // document.getElementById("msg").innerHTML ="Click"+i;
        //var audio = new Audio("za\Drum Kit Starting Files\sounds\tom-1.mp3");
        //audio.play();
    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML){
        case "w":
            var tom1 = new Audio("za\Drum Kit Starting Files\sounds\tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("za\Drum Kit Starting Files\sounds\tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("za\Drum Kit Starting Files\sounds\tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("za\Drum Kit Starting Files\sounds\tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("za\Drum Kit Starting Files\sounds\crash.mp3");
            crash.play();
            break;
        case "k":
            var kickbass = new Audio("za\Drum Kit Starting Files\sounds\kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var snare = new Audio("za\Drum Kit Starting Files\sounds\snare.mp3");
            snare.play();
            break;


 } });
}

document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("msg").innerHTML = document.getElementById("txt").value;
});

document.body.addEventListener("keydown",function(event){
    console.log(event.key);

    switch(buttonInnerHTML){
        case "w":
            var tom1 = new Audio("za\Drum Kit Starting Files\sounds\tom-1.mp3");
            audio.play();
            break;
        case "a":
            var tom2 = new Audio("za\Drum Kit Starting Files\sounds\tom-2.mp3");
            audio.play();
            break;
        case "s":
            var tom3 = new Audio("za\Drum Kit Starting Files\sounds\tom-3.mp3");
            audio.play();
            break;
        case "d":
            var tom4 = new Audio("za\Drum Kit Starting Files\sounds\tom-4.mp3");
            audio.play();
            break;
        case "j":
            var crash = new Audio("za\Drum Kit Starting Files\sounds\crash.mp3");
            audio.play();
            break;
        case "k":
            var kickbass = new Audio("za\Drum Kit Starting Files\sounds\kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var snare = new Audio("za\Drum Kit Starting Files\sounds\snare.mp3");
            audio.play();
            break;
} });
