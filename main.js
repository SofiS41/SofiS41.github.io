'use strict'

let date = new Date();

// 1st block - date
let dd = date.getDate();
let mm = date.getMonth()+1;
let yy = date.getFullYear();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
document.querySelector('.date').textContent = `${dd}.${mm}.${yy}`

setInterval(function(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if (s < 10) s = `0${s}`;
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    
    document.querySelector('.time').innerHTML = `${h}:${m}:${s}`;
});


// 2nd block - stopwatch
const time = document.querySelector('.ex-t-timer');
let millisec = 0;
let tim;
function timeStart(){
    time.style.color = "rgb(3, 236, 236)";
    clearInterval(tim);

    tim = setInterval(() => {
    millisec += 10;
    let dateTimer = new Date(millisec);
    let hour = dateTimer.getUTCHours();
    let min = dateTimer.getUTCMinutes();
    let sec = dateTimer.getUTCSeconds();
    let ms = dateTimer.getUTCMilliseconds();
    time.innerHTML = ('0'+hour).slice(-2) +':'+ ('0'+min).slice(-2) +':'+ ('0'+sec).slice(-2) +':'+ ('0'+ms).slice(-3,-1);
    }, 10);
    document.getElementById('ex-t-loop').disabled = true;
    document.getElementById('ex-t-reset').disabled = true;
}
function timeLoop() {
  let p = document.createElement('p');
  p.textContent = `${time.innerHTML}`;
  document.querySelector('.stoped-time').append(p);
  if(document.querySelector('.stoped-time').children.length > 4){
    document.querySelector('.stoped-time').style.overflowY = 'scroll';
  }
}
function timePaused() {
  time.style.color = "red";
  clearInterval(tim);
  document.getElementById('ex-t-loop').disabled = false;
  document.getElementById('ex-t-reset').disabled = false;
}
function timeReset(){
  time.style.color = "rgb(3, 236, 236)";
  setInterval(tim);
  millisec = 0;
  time.innerHTML = "00:00:00:00";
  document.querySelector('.stoped-time').innerHTML = "";
  document.querySelector('.stoped-time').style.overflowY = 'unset';
}

document.addEventListener('click', (e) => {
  const btn = e.target;
  if(btn.id === 'ex-t-start') timeStart();
  if(btn.id === 'ex-t-loop') timeLoop();
  if(btn.id === 'ex-t-stop') timePaused();
  if(btn.id === 'ex-t-reset') timeReset();
});


// 3rd block timer
let add = document.querySelector('.add-min');
let sub = document.querySelector('.sub-min');
let count = 10;
document.querySelector('.min-amount').textContent = count;

add.addEventListener('click', ()=>{
    count++;
    document.querySelector('.min-amount').textContent = count;
    timtim();
});
sub.addEventListener('click', ()=>{
  count--;
  document.querySelector('.min-amount').textContent = count;
  timtim();
});


function timtim(){
  let timerCount = date.setMinutes(count, 0, 0);
  let minutes = Math.floor((timerCount % (1000 * 60 * 60 ))/(1000 * 60));
  let seconds = Math.floor((timerCount % (1000 * 60))/1000);
  let timer;

  function start(){
    let m = minutes;
    let s = seconds;
    timer = setInterval(()=>{
      if(s == 0){
        s = 60;
        m--;
      }
      if(m<10) m = `0${Number(m)}`;
      s--;
      if(s<10) s = '0' + s;
      document.querySelector('.run-time').textContent = `${m}:${s}`;
    }, 1000);
    document.querySelector('.start-timer').disabled = true;
    document.querySelector('.stop-timer').disabled = false;
    document.querySelector('.reset-timer').disabled = true;
  }
  function stop(){
    clearInterval(timer);
    document.querySelector('.start-timer').disabled = false;
    document.querySelector('.stop-timer').disabled = true;
    document.querySelector('.reset-timer').disabled = false;
  }
  function reset(){
    document.querySelector('.run-time').textContent = '00:00';
  }

  document.querySelector('.start-timer').addEventListener('click', start);
  document.querySelector('.stop-timer').addEventListener('click', stop);
  document.querySelector('.reset-timer').addEventListener('click', reset);
}
timtim();
