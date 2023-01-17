const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/matriks', (req,res) => {
    let matrixA = [
        [1,2],
        [4,3]
    ];
    let matrixB = [
        [5,4],
        [7,9]
    ];
    
    let hasil = new Array()
    let i
    let j
    for(i=0; i<2;i++){
        for(j=0; j<2; j++){
            hasil.push(matrixA[i][j]+matrixB[i][j])
        }
    }

    let response = {
        matrix_A : matrixA,
        matrix_B : matrixB,
        result : {
            hasil : hasil
        }
    }
    res.json(response)
})
app.listen(8000, () => {
    console.log('Server run on port 8000');
});