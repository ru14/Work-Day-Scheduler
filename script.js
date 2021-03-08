const todaysDay = document.getElementById("currentDay");
const clock = document.getElementById("clock");
const nineAm = document.getElementById("nine");


// update function will stop the delay of time
function updateDay() {
    const nowTime = moment();
    const readableDay = nowTime.format("dddd,MMMM Do YYYY");
    todaysDay.textContent = readableDay;
}


function updateTime (){
    const nowTime = moment();
    const readableTime = nowTime.format("hh:mm A");
    clock.textContent = readableTime;
    console.log(readableTime);
}
setInterval(updateDay, 1000);
setInterval(updateTime, 1000);
updateDay()
updateTime();

// function nineAmTime (){
//     const nineAm = document.getElementById("nine");
//    if (nineAm === updateTime){
//     timeBlock.classList.add(present);
//    }
//    if (nineAm > updateTime){
//        timeBlock.classList.add(past);
//        timeBlock.classList.remove(present);
//    }
//    else {
//        timeBlock.classList.add(future);
//        timeBlock.classList.remove(present);
//        timeBlock.classList.remove(past);
//    }
   
//  }

var time11 = elements[0].dataset.startTime;


var format = 'hh:mm A'
var time = moment(time[0], format);
  beforeTime = updateTime > time,
  afterTime = updateTime < time;
  
if (time.isBetween(beforeTime, afterTime)) {
    const timeBlock = document.getElementById("nineam");
    timeBlock.classList.add("present");
    timeBlock.classList.remove("present");
  console.log('is between')

} 
for (let time = 0; time < array.length; time++) {
    const element = array[time];
    console.log(element)
    
}






// const currentTime = selectedBtn.dataset.present;
//     if (currentTime === "true") {
//         bodyElement.classList.add("present");
//         selectedBtn.classList.add("present");
//         userScore += 10;
//         console.log(userScore);

//     }
//     else {
//         bodyElement.classList.add("wrong");
//         selectedBtn.classList.add("wrong");
//         counter = counter - 15;
//     }
// };



















var time11 = elements[0].dataset.startTime;
var time11 = moment(elements[0].dataset.startTime, format)
elements[0]






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