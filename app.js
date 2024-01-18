const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3100;



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("node_modules"));


app.get("/", function(req, res) {  
      res.render("index");  
    });





    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    
      