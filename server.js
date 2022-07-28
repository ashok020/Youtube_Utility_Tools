const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

main().catch((err) => console.log(err));

async function main()
{
  app.listen(port, (err) => {
    if (err) throw err;
    console.log("Listening on " + port);
  });

//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({extended: false}));

  app.use(express.static(__dirname + "/public"));
  app.set("view engine", "ejs");

  app.get("/",async(req,res)=>{

    res.render('index.ejs',{
    
    });

  });

}