let timer ;
let sec = 0;
let min = 0;
let hr = 0;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let timerElement = document.getElementById("timer");

startButton.addEventListener("click", function(){
  timer = setInterval(TimeHandler, 1000);
  resetButton.disabled = true;
});

stopButton.addEventListener("click", function(){
  timer = clearInterval(timer);
  resetButton.disabled = false;
});

resetButton.addEventListener("click", function(){
  timer = clearInterval(timer);
  resetButton.disabled = true;
  sec = 0;
  min = 0;
  hr = 0;
  timerElement.innerHTML = "00:00:00";
})

function TimeHandler(){
  sec++;
  if(sec == 60){
    sec = 0;
    min++;
  }
  if(min == 60){
    min = 0;
    hr++;
  }
  displayTime();
}

function displayTime(){
  let second = sec;
  let minute = min;
  let hour = hr;

  if(sec < 10){
    second = "0" + sec;
  }
  if(min < 10){
    minute = "0" + min;
  }
  if(hr < 10){
    hour = "0" + hr;
  }
  timerElement.innerHTML = hour + ":" + minute + ":" + second;
}
