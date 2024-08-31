/**
 * require de tai thu vien vao chuong trinh
 * const: hang so
 * express(): goi ra doi tuong de ho tro xay dung website
 */
const express = require('express');
const app = express();
const port = 8000;//port run website


//dinh nghia tuyen duong de goi duoc function: '/'
//around function: function an
//app.get: thuc hien function khi duoc GET den
//HTTP - GET
app.get('/home', (req, res) => {
    //In ra man hinh trinh duyet chu 'Hello World !'
    //Thuc chat la gui file HTMl cho trin duyet
  res.send('Hello World !')
});

//Lang nghe su kien tren port
//127.0.0.1:port - localhost
app.listen(port, () => {
  console.log(`Demo NodeJS app listening on port ${port}`)
});