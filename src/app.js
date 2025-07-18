const express = require('express'); // importing express

const app = express(); // returns an application object app

app.use(
  "/user",
  (req,res,next)=>{
    console.log("Route Handler 1");
    // next();
    // res.send("Response 1");
    next();
  },
  (req,res,next)=>{
    console.log("Route Handler 2");
    // res.send("Response 2");
    next();
  },
  (req,res)=>{
    console.log("Route handler 3");
    res.send("Response 3");
  }
)


app.listen(3000,()=>{
    console.log("Servcer is successfully running on port 3000....");
})