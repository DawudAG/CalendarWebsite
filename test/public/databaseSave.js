function save() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    async function saveData(data) {
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    }
    for (let i = 0; i < 31; i++) {
        localStorage.getItem(i)
        saveData(data)
    }
}
console.log(localStorage)

async function getData() {
    data = {_id: '611d6f276ebf103cc487ea9b'}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/getdata', options)
    calendar = await response.json()
    calendar = JSON.parse(calendar)
    for (let i = 0; i < calendar.available.length; i++) {
        available = [...calendar.available[i]]
        day = document.getElementById(available.shift())
        day.times = available
        day.style.display = 'inline-block';
    }
}