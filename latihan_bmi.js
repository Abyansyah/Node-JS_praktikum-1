const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/bmi', (req,res) => {
    let berat = Number(req.body.berat);
    let tinggi = Number(req.body.tinggi);
    
    let bmi = berat / (tinggi * tinggi);

    let status = '';
    if (bmi < 18.5) {
        status = 'kekurangan berat badan'; 
    }else if (bmi >= 18.5 && bmi <=24.9){
        status = 'Normal(ideal)';
    }else if (bmi >= 25.0 && bmi <= 29.9){
        status = 'Kelebihan berat badan';    
    }else if (bmi >= 30.0){
        status = 'kegemukan (Obesitas)';
    }

    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status
    };
    res.json(response);
});

app.listen(8000, () => {
    console.log('Server run on port 8000');
});