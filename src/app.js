const express = require('express'); // importing express

const app = express(); // returns an application object app

// Route handlers

app.use("/test",(req,res)=>{
    res.send("Hello from the server");
})

app.get("/user",(req,res)=>{
    res.send({ firstname : "Anisha", lastName : "Lathwal" })
})
app.post("/user",(req,res)=>{
    // save data to the database
    res.send("Data successfully saved to the database")
})
app.delete("/user",(req,res)=>{
    // save data to the database
    res.send("Deleted successfully")
})

// app.use("/hello",(req,res)=>{
//     res.send("Hello hello hello");
// })

// app.use("/",(req,res)=>{
//     res.send("Hello from the dashboard");
// })

app.listen(3000,()=>{
    console.log("Servcer is successfully running on port 3000....");
})