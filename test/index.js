const express = require('express');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

app.get('/api', (request, response) => {
    const data = {available: [2,4], people: ['d','g']};
    response.json(data);
});

app.post('/api', (request, response) => {
    console.log(request.body)
});

app.post('/getdata', async(request, response) => {

    const data = request.body
    console.log(data)
    console.log("yes")
    
    await Calendar.find(data,(err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data[0].calendar);
    })

});