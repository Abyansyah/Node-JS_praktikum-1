const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/nen/:number', (req, res) => {
    let number = Number(req.params.number);
    let status = '';
    
    if (number %2 == 0) {
        status = 'Bilangan ' + [number] + ' Genap'
    } else {
        status = 'Bilangan ' + [number] + ' Ganjil'
    }
  
    const response = {
      angka : number,
      result : {
        Message : status
      }
    };
    res.json(response);
  
  });
  app.listen(8000, () => {
    console.log('Server run on port 8000');
  });
  