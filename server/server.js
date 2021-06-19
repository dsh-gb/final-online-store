const express = require('express');
const fs = require('fs');
const app = express();
const cart = require('./cartRouter');// наш модуль обработчик всех запросов корзины

app.use(express.json()); // используем json ответы от сервера
app.use('/', express.static('public')); // при открытие главной страницы запускаем index.html можно было указать 'public/index.html'
app.use('/api/cart', cart); // при запросе по адрессу api/cart запускаем cart

// обработка запроса по адресу api/products
app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));
