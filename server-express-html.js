const express = require('express')
const app = express()

app.use(express.static( __dirname + "/public_html")); 
app.listen(3000);

console.log("Server en el puerto 3000");
