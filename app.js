let startButton = document.getElementsByClassName('start-button')[0]
let countdown = document.getElementById("countdown")
startButton.addEventListener('click', beginCountdown)


function beginCountdown() {
//Here Im grabbing the number of seconds to use for the countdown
    let secondsInput = document.getElementById("seconds-input").value;

//Here Im setting the the time remaining to the seconds I entered
    let timeRemaining = secondsInput
//Here Im creating my timer, using setInterval to run this function every second.
    let downloadTimer = setInterval(function getTime(){
//This line will subtract 1 from the time remaining each time the function runs, which we've set to every second. For example, timeRemaining++ would add 1. 
      timeRemaining--;
//This is the line that puts the remaining time we have on the DOM so we can see it. 
      countdown.innerHTML = timeRemaining;
//Here  Ive set the interval to stop once the time remaining reaches 0. the clearInterval method stops the setInterval method we're using.      
      if(timeRemaining <= 0)
          clearInterval(downloadTimer);
      },1000);
  
}




