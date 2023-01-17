const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/kalkulator/:number1/:number2', (req,res) => {
    let number1 = Number(req.params.number1);
    let number2 = Number(req.params.number2);

    let jumlahan = number1 + number2;
    let ngurang = number1 - number2;
    let kalia = number1 * number2;
    let bagi = number1 / number2;

    const response = {
        number_1 : number1,
        number_2 : number2,
        result : {
            penjumlahan : jumlahan,
            pengurangan : ngurang,
            perkalian : kalia,
            pembagian : bagi,
        },
    };
    res.json(response);
});

app.listen(8000, () => {
    console.log('Server run on port 8000');
});