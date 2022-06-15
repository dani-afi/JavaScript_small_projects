const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('min');
const secondsEl=document.getElementById('seconds');




const newYears='15 Jun 2023';

function countDown(){
    const newYearsDate= new Date(newYears);
    const currentDate=new Date();
    
    const totalSeconds=(newYearsDate - currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const min=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds%60);
    

    console.log(days,hours,min,seconds);

daysEl.innerHTML=days;
hoursEl.innerHTML=formatTime(hours);
minsEl.innerHTML=formatTime(min);
secondsEl.innerHTML=formatTime(seconds);
}

function formatTime(time){
    return  time <10 ?`0${time}`:time;
}

//initial call
countDown();

setInterval(countDown,1000)
