const express = require('express');
const app = express();
const { numberInFullUS } = require('./controller/getNumbersUS');
const { numberInFullPT } = require('./controller/getNumbersPT');

app.use('/pt/:number', (req, res, next) => {
    const numberParam = req.params.number;
    res.status(200).send({
        number: numberInFullPT(numberParam)
    });
});

app.use('/us/:number', (req, res, next) => {
    const numberParam = req.params.number;
    res.status(200).send({
        number: numberInFullUS(numberParam)
    });
});

module.exports = app;