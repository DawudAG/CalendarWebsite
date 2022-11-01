localStorage.clear();
const calendar = {available: [], people: []};

function days(element) {
    console.log("days");
    var x = document.querySelectorAll('.days li');
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.color == 'white') {
            if (x[i].times == undefined){
                deactivate(x[i]);              
            }
            else {
                if (x[i].times.length == 0) {
                    deactivate(x[i]);
                }
                else {
                    colour(x[i]);
                }
                day = x[i].id
                for (let i = 0; i < calendar.available.length; i++) {
                    if (calendar.available[i][0] == day) {
                        calendar.available.splice(i,1)
                    }
                }
                arr = [day].concat(x[i].times)
                calendar.available.push(arr)
            }
        }
    }
    var y = document.querySelectorAll('.times li');
    for (let i = 0; i < y.length; i++) {
        deactivate(y[i]);
        }
    if (element.style.padding == '4px') {
        show(element);
    }
    activate(element);
}

function times(element) {
    console.log("times");
    var x = document.querySelectorAll('.days li')
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.color == 'white') {
            if (element.style.color != 'white') {
                save(x[i],element);
                activate(element);
            }
            else {
                remove(x[i],element);
                deactivate(element);
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

function colour(element) {
    console.log("colour");
    element.style.padding = '4px';
    element.style.background = '#1abc9c';
    element.style.color = '#777';
}

function save(day,time) {
    console.log('save')
    if (day.times == undefined) {
        day.times = [];
        day.times.push(time.id);
    }
    else {
        day.times.push(time.id);
    }
}

function remove(day, time) {
    console.log('remove');
    var index = day.times.indexOf(time.id);
    day.times.splice(index, 1);
  }

function show(day) {
    console.log('show');
    if (day.times != undefined) {
        for (let i = 0; i < day.times.length; i++) {
            time = document.getElementById(day.times[i]);
            activate(time);
        }
    }
}

function finish() {
    console.log('finish');
    var x = document.querySelectorAll('.days li');
    for (let i = 0; i < x.length; i++) {
        if (x[i].style.color == 'white') {
            if (typeof x[i].times != 'undefined') {
                day = x[i].id
                for (let i = 0; i < calendar.available.length; i++) {
                    if (calendar.available[i][0] == day) {
                        calendar.available.splice(i,1)
                    }
                }
                arr = [day].concat(x[i].times)
                calendar.available.push(arr)
            }
        }
    }
    localStorage.setItem('yes',JSON.stringify(calendar));
    var elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    console.log(calendar.available)
    window.open ("Cal2.html");
}