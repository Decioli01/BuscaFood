const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(router);

//conts porta = process.env.PORT || 3333;
const porta = 3333;



//define a porta do servidor - definir de acordo com a oferecida pelo
app.listen(porta, () => {
    console.log('Servidor iniciado na porta: ' + porta);
});

app.get('/', (request, response) => {
    response.send("Hello World");
})