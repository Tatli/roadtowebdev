function displayTime() {
    let clock = document.querySelector("#clock");
    clock.textContent = new Date().toLocaleTimeString();
}
displayTime();
setInterval(displayTime, 1000);
