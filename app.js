 const getSecondsAngle = (seconds)=>{
    return Math.floor(seconds*360/60 - 90)
}

const getMinutesAngle = (minutes)=>{
    return Math.floor(minutes*360/60 - 90)
}
const getHoursAngle = (hours)=>{
    return Math.floor(hours*360/12 - 90)
}

const tickClock = () =>{
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const secondsHand = document.querySelector('.second');
    const minutesHand = document.querySelector('.minute');
    const hoursHand = document.querySelector('.hour');
    const secondsAngle = getSecondsAngle(seconds);
    const minutesAngle = getMinutesAngle(minutes);
    const hoursAngle = getHoursAngle(hours);
    setRotation(secondsHand,secondsAngle);
    setRotation(minutesHand,minutesAngle);
    setRotation(hoursHand,hoursAngle);


} 

const setRotation = (element, rotation) =>{
    element.style.transform = `rotate(${rotation}deg)`;
}


setInterval(tickClock , 1000);
