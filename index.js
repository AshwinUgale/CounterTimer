const daysElement= document.querySelector(".days");
const hoursElement= document.querySelector(".hours");
const minutesElement= document.querySelector(".minutes");
const secondsElement= document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");


const second=1000,
 minute=60*second,
 hour=60*minute,
 day=24*hour;

const timerFunction=()=>{

    let now = new Date(),
        dd= String(now.getDate()).padStart(2,"0"),
        mm=String(now.getMonth()+1).padStart(2,"0"),
        yyyy=now.getFullYear();

    const enteredDay= prompt("Enter Day").padStart(2,"0");
    const enteredMonth= prompt("Enter Month").padStart(2,"0");
    
    now=`${mm}/${dd}/${yyyy}`;
    

    let targetData = `${enteredMonth}/${enteredDay}/${yyyy}`;

    if(now>targetData){
        targetData=`${enteredMonth}/${enteredDay}/${yyyy+1}`;
    };

    const intervalId=setInterval(()=>{
        const timer = new Date(targetData).getTime();
        const today = new Date().getTime();
        const difference = timer-today;
        const leftDay = Math.floor(difference/day);
        const leftHour = Math.floor((difference%day)/hour);
        const leftMinute = Math.floor((difference%hour)/minute);
        const leftSecond = Math.floor((difference%minute)/second);

        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;

        if(difference<0){
            counterTimer.style.display="none";
            heading.innerText="Time's up";
            clearInterval(intervalId);
            
        }

    },0);

};

timerFunction();