const date =document.getElementById("date");
const day =document.getElementById("day");
const month =document.getElementById("month");
const year =document.getElementById("year");


const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]



function getCalendar(){    
    const currentDate = new Date();
    day.innerHTML =  weekDays[currentDate.getDay()];
    date.innerHTML = (currentDate.getDate()<10?"0":"") + currentDate.getDate();
    month.innerHTML = monthName[currentDate.getMonth()];
    year.innerHTML = currentDate.getFullYear();
}
window.addEventListener("onload", getCalendar())
