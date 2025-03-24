const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const fs = require('fs');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.get("/", (req, res)=>{
    const con = 'One Day, or Day One. YOU decide.';
    const params = {'title': 'Iron Fitness','content': con}
    res.status(200).render('index.pug', params)
});

app.post("/", (req, res)=>{
    nam = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.add;
    if(address==""){
        let outputToWrite = `The name of the client is ${nam}, age is ${age} years, they are of ${gender} gender. \n`;
        fs.writeFileSync('output.txt', outputToWrite);
    }
    else{
        let outputToWrite = `The name of the client is ${nam}, age is ${age} years, they are of ${gender} gender. They live at ${address}. \n`;
        fs.writeFileSync('output.txt', outputToWrite);
    }
    const params = {'message': 'Your form has been submitted succesfully!', 'title': 'Iron Fitness'}
    res.status(200).render('index.pug', params);
    
    
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});