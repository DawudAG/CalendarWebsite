const person = {id: 'one', name: 'beast', busyTimes: [], bestTimes: []};
stage = 'busy'

calendar = JSON.parse(localStorage.getItem('yes'));

for (let i = 0; i < calendar.available.length; i++) {
    available = [...calendar.available[i]]
    day = document.getElementById(available.shift())
    day.times = available
    day.style.display = 'inline-block';
}

function days(element) {
    console.log("days");
    var x = document.querySelectorAll('.days2 li');
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.color == 'white') {
            if (x[i].bestTimes != undefined) {
                day = x[i].id
                for (let i = 0; i < person.bestTimes.length; i++) {
                    if (person.bestTimes[i][0] == day) {
                        person.bestTimes.splice(i,1)
                    }
                }
                arr = [day].concat(x[i].bestTimes)
                person.bestTimes.push(arr)
            }
            if (x[i].busyTimes != undefined) {
                day = x[i].id
                for (let i = 0; i < person.busyTimes.length; i++) {
                    if (person.busyTimes[i][0] == day) {
                        person.busyTimes.splice(i,1)
                    }
                }
                arr = [day].concat(x[i].busyTimes)
                person.busyTimes.push(arr)
            }
            deactivate(x[i]);
            }
    }
    var y = document.querySelectorAll('.times2 li')
    for (let i = 0; i < y.length; i++) {
        deactivate(y[i]);
        y[i].style.display = 'none';
    }
    activate(element);
    show(element);
    if (element.bestTimes != undefined) {
        showBestTimes(element);
    }
    if (element.busyTimes != undefined) {
        showBusyTimes(element);
    }
}

function times(element) {
    console.log("times");
    var x = document.querySelectorAll('.days2 li')
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.color == 'white') {
            if (stage == 'best') {
                if (element.style.background == 'darkred') {
                    break
                }
                if (element.style.color != 'white') {
                    saveBest(x[i],element);
                    activate(element);
                }
                else {

                    removeBest(x[i],element);
                    deactivate(element);
                }
            }
            else {
                if (element.style.background == 'rgb(26, 188, 156)') {
                    break
                }
                if (element.style.color != 'white') {
                    saveBusy(x[i],element);
                    busy(element);
                }
                else {
                    removeBusy(x[i],element);
                    deactivate(element);
                }
            }
        }
      }
}

function deactivate(element) {
  console.log("deactivate");
  element.style.padding = '10px';
  element.style.background = '#eee';
  element.style.color = '#777';
}

function activate(element) {
  console.log("activate");
  element.style.padding = '5px';
  element.style.background = '#1abc9c';
  element.style.color = 'white';
}

function busy(element) {
    console.log("activate");
    element.style.padding = '5px';
    element.style.background = 'darkred';
    element.style.color = 'white';
}

function saveBusy(day,time) {
    console.log('saveBusy')
    if (day.busyTimes == undefined) {
        day.busyTimes = [];
        day.busyTimes.push(time.id);
    }
    else {
        day.busyTimes.push(time.id);
    }
}

function removeBusy(day, time) {
    console.log('removeBusy');
    var index = day.busyTimes.indexOf(time.id);
    day.busyTimes.splice(index, 1);
}

function saveBest(day,time) {
    console.log('saveBest')
    if (day.bestTimes == undefined) {
        day.bestTimes = [];
        day.bestTimes.push(time.id);
    }
    else {
        day.bestTimes.push(time.id);
    }
}

function removeBest(day, time) {
    console.log('removeBest');
    var index = day.bestTimes.indexOf(time.id);
    day.bestTimes.splice(index, 1);
}

function show(day) {
    for (let i = 0; i < day.times.length; i++) {
        time = document.getElementById(day.times[i]);
        time.style.display = 'inline-block'
    }
}

function showBusyTimes(day) {
    console.log('showBusyTimes');
    for (let i = 0; i < day.busyTimes.length; i++) {
        time = document.getElementById(day.busyTimes[i]);
        busy(time);
    }
}

function showBestTimes(day) {
    console.log('showBestTimes');
    for (let i = 0; i < day.bestTimes.length; i++) {
        time = document.getElementById(day.bestTimes[i]);
        activate(time);
    }
}

function back() {
    console.log('back');
    stage = 'busy';
    var back = document.getElementsByClassName('backButton');
    var next = document.getElementsByClassName('nextButton');
    var done = document.getElementsByClassName('doneButton');
    back[0].style.display = 'none';
    next[0].style.display = 'inline-block';
    done[0].style.display = 'none';
}

function next() {
    console.log('next');
    stage = 'best';
    var back = document.getElementsByClassName('backButton');
    var next = document.getElementsByClassName('nextButton');
    var done = document.getElementsByClassName('doneButton');
    back[0].style.display = 'inline-block';
    next[0].style.display = 'none';
    done[0].style.display = 'inline-block';
}

function done() {
    console.log('done');
    var x = document.querySelectorAll('.days2 li');
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.color == 'white') {
            console.log('yaya')
            if (x[i].bestTimes != undefined) {
                day = x[i].id
                for (let i = 0; i < person.bestTimes.length; i++) {
                    if (person.bestTimes[i][0] == day) {
                        person.bestTimes.splice(i,1)
                    }
                }
                arr = [day].concat(x[i].bestTimes)
                person.bestTimes.push(arr)
            }
            if (x[i].busyTimes != undefined) {
                day = x[i].id
                for (let i = 0; i < person.busyTimes.length; i++) {
                    if (person.busyTimes[i][0] == day) {
                        person.busyTimes.splice(i,1)
                    }
                }
                arr = [day].concat(x[i].busyTimes)
                person.busyTimes.push(arr)
            }
        }
    }
    calendar.people.push(person)
    console.log(person)
    var elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}