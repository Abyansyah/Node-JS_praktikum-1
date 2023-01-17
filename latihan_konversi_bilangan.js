const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/biner/:biner', (req, res) => {
  let biner = Number(req.params.biner);
  let dec = parseInt(biner, 2);
  let oktal = parseInt(biner, 2).toString(8);
  let hexa = parseInt(biner, 2).toString(10);

  let response = {
    biner: biner,
    result: {
      dec: dec,
      oktal: oktal,
      hexa: hexa,
    },
  };
  res.json(response);
});
app.get('/dec/:dec', (req, res) => {
  let dec = Number(req.params.dec);
  let biner = dec.toString(2);
  let oktal = dec.toString(8);
  let hexa = dec.toString(16);

  let response = {
    dec: dec,
    result: {
      biner: biner,
      oktal: oktal,
      hexa: hexa,
    },
  };
  res.json(response);
});
app.get('/oktal/:oktal', (req, res) => {
  let oktal = Number(req.params.oktal);
  let dec = parseInt(oktal, 8);
  let biner = parseInt(oktal, 8).toString(2);
  let hexa = parseInt(oktal, 8).toString(16);

  let response = {
    oktal: oktal,
    result: {
      biner: biner,
      dec: dec,
      hexa: hexa,
    },
  };
  res.json(response);
});
app.get('/hexa/:hexa', (req, res) => {
  let hexa = Number(req.params.hexa);
  let dec = parseInt(hexa, 16);
  let oktal = parseInt(hexa, 16).toString(8);
  let biner = parseInt(hexa, 16).toString(2);

  let response = {
    hexa: hexa,
    result: {
      biner: biner,
      dec: dec,
      oktal: oktal,
    },
  };
  res.json(response);
});
app.listen(8000, () => {
  console.log('Server run on port 8000');
});
