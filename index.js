//detecting button clicked or pressed
var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML; //detecting the button which is clicked
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
};


//for whole document i.e whole website page or detecting button pressed on keyboard
document.addEventListener('keypress',function(event){
    makeSound(event.key);  //detecting which key is pressed 
    buttonAnimation(event.key);
});


function makeSound(key)
{

    switch (key) {
        case "w":

            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;

        case "a":

            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();

            break;
        case "s":

            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();

            break;

        case "d":

            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();

            break;

        case "j":

            var snare = new Audio('sounds/snare.mp3');
            snare.play();

            break;

        case "k":

            var crash = new Audio('sounds/crash.mp3');
            crash.play();

            break;

        case "l":

            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

            break;

        default:
            console.log(buttonInnerHTML);

    }
}
// adding animation to buttons
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");   //adding pressed class in button
    setTimeout(function(){activeButton.classList.remove("pressed")},100); //using timeout function
                                                                          //100 or 0.1sec is a time to execute the class 
                                                                          //removal function 
}