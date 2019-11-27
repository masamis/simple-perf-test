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

app.get('loaderio-0d1ea6833e5eb9b16892d568f3d73932',req,res) => {
    res.send('loaderio-0d1ea6833e5eb9b16892d568f3d73932');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
