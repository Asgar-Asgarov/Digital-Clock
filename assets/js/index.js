const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second   = document.getElementById("second");
const ampm = document.getElementById("ampm");

function updateClock(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let halfday ="AM";
     

   hours =  (hours<10) ? "0" + hours : hours;    
   minutes = (minutes<10) ? "0" + minutes : minutes;
   seconds = (seconds<10) ? "0" + seconds :seconds;


    if (hours>12) {
        hours=hours-12;
        halfday="PM"
    }
   


    hour.innerText=hours;
    minute.innerText=minutes;
    second.innerText=seconds;
    ampm.innerText=halfday;
  

    setTimeout(() => {
        updateClock();
    }, 1000);
}


updateClock();
