const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000; //.env later

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

//Might be good to put this in a seperate 'server.js' file
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})