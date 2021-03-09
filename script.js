const todaysDay = document.getElementById("currentDay");
const clock = document.getElementById("clock");


// update function will stop the delay of time
function updateDay() {
    const nowTime = moment();
    const readableDay = nowTime.format("dddd,MMMM Do YYYY");
    todaysDay.textContent = readableDay;
}


function updateTime() {
    const nowTime = moment();
    const readableTime = nowTime.format("hh:mm A");
    clock.textContent = readableTime;

}
setInterval(updateDay, 1000);
setInterval(updateTime, 1000);
updateDay()
updateTime();

var elements = document.getElementsByClassName("form-control");
console.log(elements);
var format = 'hh:mm A';


for (var item in elements) {
    if (item == "length") {
        break;
    }

    var element = elements[item];
    console.log(element);
    var startTime = moment(element.dataset.startTime, format);
    var endTime = moment(startTime).add(59, 'minutes');
    var currentTime = moment();
    if (currentTime.isBetween(startTime, endTime)) {
        console.log('is between');
        element.classList.add("present");
    } if (currentTime.isAfter(endTime)) {
        element.classList.add("past");
    } if (currentTime.isBefore(startTime)) {
        element.classList.add("future");
        console.log("future");
    }

    // populate saved values
    var savedValue = localStorage.getItem(element.dataset.startTime);
    if (savedValue !== null){
        elements[item].value = savedValue;
    }
}

function clickActionListener(element, e){
    e.preventDefault();
    var startTime = element.dataset.startTime;
    var inputValue = element.parentElement.previousElementSibling.value;
    if(inputValue.trim() != ""){
        localStorage.setItem(startTime, inputValue);
    }    
}






//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist