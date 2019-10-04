const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.use(express.static( __dirname + "/public_html"));
app.get('/', function (req, res) {
    res.send('Soy el index')
  });
app.listen(port, () => {
    console.log(`Server en el puerto ${port}`);
});
