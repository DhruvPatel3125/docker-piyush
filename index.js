const express = require("express")
const PORT = process.env.PORT ? +process.env.PORT:8000;
const app = express();

app.get("/",(req,res)=>{
    return res.json({
        status:"Success",
        message:"Hello from express",
    })
})
//new 

app.listen(PORT,()=> console.log(`Server start on PORT ${PORT}`));
//odkofed