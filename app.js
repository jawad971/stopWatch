
let secondElapsed = 0;
let interval = null;

const time = document.querySelector('#time')
// const btn = document.querySelectorAll('button')

function padStart(value){
    return String(value).padStart(2,"0")
}

function setTime(){
    const min = Math.floor(secondElapsed / 60)
    const sec = secondElapsed % 60
    time.innerHTML = `${padStart(min)} : ${padStart(sec)}`
}

function timer(){
    secondElapsed++
    setTime()
}

function startClock() {
    // if (interval) resetClock
    if (interval) stopClock()
    interval = setInterval(timer,1000)
}

function stopClock() {
    clearInterval(interval)
    
}

function resetClock() {
    stopClock()
    secondElapsed = 0
     setTime()
}