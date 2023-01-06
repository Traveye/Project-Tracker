var currentDate = dayjs().format('MMM DD, YYYY hh:mm:ss a');
const headerEl = document.querySelector('.hero');

timeEl = document.createElement('p')
timeEl.textContent = currentDate
headerEl.appendChild(timeEl)

setInterval(function(){
    var timeUpdate = dayjs().format('MMM DD, YYYY hh:mm:ss a');
    timeEl.textContent = timeUpdate
 }, 1000);


// modal triggered by button on div left 
//div has a list
// add a new project
//project name input project type with a dropdown list "jquery" project due date
// cancel and add project buttons

// the above is stored in a div on the right using list jquery
// 