const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get('/celcius/:number', (req, res) => {
//   const { number } = req.params;

//   let reamur = (4 * number) / 5;
//   let kelvin = number + 273;
//   let fahrenheit = (9 * number) / 5 + 32;

//   const response = {
//     reamur,
//     kelvin,
//     fahrenheit,
//   };
//   res.json({  data: response, message: 'Perubahan suhu' });
// });

app.get('/celcius/:number', (req, res) => {
  let number = Number(req.params.number);
  let reamur = 4/5 * number;
  let kelvin = number + 273;
  let fahrenheit = (9/5) * number + 32;

  const response = {
    celcius : number,
    result : {
      reamur : reamur,
      fahrenheit : fahrenheit,
      kelvin : kelvin
    }
  };
  res.json(response);

});
app.get('/reamur/:number', (req, res) => {
  let number = Number(req.params.number);
  let celcius = 5/4 * number;
  let kelvin = 5/4 * number + 273;
  let fahrenheit = (9/4) * number + 32;

  const response = {
    reamur : number,
    result : {
      celcius : celcius,
      fahrenheit : fahrenheit,
      kelvin : kelvin
    }
  };
  res.json(response);

});
app.get('/fahrenheit/:number', (req, res) => {
  let number = Number(req.params.number);
  let reamur = 4/9 * (number -32);
  let kelvin = 5/9 * (number -32) + 273;
  let celcius = 5/9 * (number - 32);

  const response = {
    fahrenheit : number,
    result : {
      reamur : reamur,
      celcius : celcius,
      kelvin : kelvin
    }
  };
  res.json(response);

});
app.get('/kelvin/:number', (req, res) => {
  let number = Number(req.params.number);
  let reamur = 4/5 * (number - 273);
  let celcius = number - 273;
  let fahrenheit = 9/5 * (number - 273) + 32;

  const response = {
    kelvin : number,
    result : {
      celcius : celcius,
      reamur : reamur,
      fahrenheit : fahrenheit,
    }
  };
  res.json(response);

});

app.listen(8000, () => {
  console.log('Server run on port 8000');
});
