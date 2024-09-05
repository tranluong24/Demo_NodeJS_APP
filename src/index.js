/**
 * require de tai thu vien vao chuong trinh
 * const: hang so
 * express(): goi ra doi tuong de ho tro xay dung website
 */
const path = require("path");
const express = require("express");
const app = express();
const port = 8000; //port run website

//morgan
const morgan = require("morgan");
app.use(morgan("combined"));

//Tempate engine
const exphbs = require("express-handlebars");

app.use(express.static(path.join(__dirname, 'public')));

app.engine(".hbs", exphbs.engine({//Cau hinh cho handlebars
  extname: '.hbs'
})); //luu y: exphbs.engine()

app.set("view engine", ".hbs");

//Neu thay doi cau truc thu muc thi can khai bao duong dan moi cho views
app.set("views", path.join(__dirname, "resources/views"));

//dinh nghia tuyen duong de goi duoc function: '/'
//around function: function an
//app.get: thuc hien function khi duoc GET den
//HTTP - GET
app.get("/home", (req, res) => {
  //In ra man hinh trinh duyet chu 'Hello World !'
  //Thuc chat la gui file HTMl cho trinh duyet
  // res.send('Hello World !')
  //-----------------------------Template Engines
  //Khong the code toan bo trang web xong dua vao ham send(``)
  //--> phai dung Template engines; -> ho tro viet cac file html hieu qua, gon gang
  // return res.send(`
  //   <h1 style="color:red; font-size: 40px; "> Hello World !</h1>
  //   `);
  res.render("home");
});

app.get("/tintuc", (req, res) => {
  res.render("news");
});

//Lang nghe su kien tren port
//127.0.0.1:port - localhost
app.listen(port, () => {
  console.log(`Demo NodeJS app listening on port ${port}`);
});
