const express= require('express');
const todoRouter=require('./routes/todo');
const app=express();
const port=3000;


app.use(express.json());
app.use('/todo',todoRouter)
app.listen(port,()=>{
    console.log(`Hello ${port}`);
})