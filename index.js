// const express = require("express");
import  express  from "express";
import router from "./routes/index.js";
const app = express();


//Definir el puerto
const port = process.env.Port || 4000

//Hbailitar pug
app.set('view engine', 'pug')

app.use("/", router)


app.listen(port, () =>{
    console.log(`El servidor esta online en el puerto  ${port}`)

})