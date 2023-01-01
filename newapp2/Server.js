var express= require("express");
var path = require("path");
var app=express();
var product=require("./product.json");
var staticFolder=express.static(path.join(__dirname,"public"));

app.use(staticFolder)

app.get('/',(req, res)=>
              { res.sendFile("index.html");}
)

app.get('/product',(req, res)=>
                           { res.send(product);}
)

app.listen(3000);
console.log("port is running on 3000");