const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')

let tasks =  []
;
 
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

app.get('/home', (req, res) => {
     console.log('home');
   fs.readFile('todos.txt', 'utf8', function (err, data) {
       if (err) throw err;
         console.log('OK: ' + data);
         tasks = (data)
         //I need the writen data plus the new tasks
        res.send(tasks)
     });
});
app.post('/addtodos', (req, res) => {
    console.log(req.body)
    tasks = req.body.newState

    task = JSON.stringify(req.body.newState)

    fs.writeFile('todos.txt', task, 'utf8', (err) => {
        if (err) throw err;
        console.log('File Saved!');
    });
    res.send('File saved')
});