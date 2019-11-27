const express = require('express');
const app = express();

var ncount = 0;

app.use(express.json());



app.get('/', (req, res) => {
    res.send('Simple REST API');
});

app.get('/api/inc', (req,res) => {
   res.send(`${ncount++}`);
});

app.get('/loaderio-164579197705c967d8e4bf496fda2603' ,(req,res) => {
    res.send('loaderio-164579197705c967d8e4bf496fda2603');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
