const express=require('express');
const { createTODO } = require('../models/todo');
const router=express.Router();
router.post('/',async(req,res)=>{
    console.log({body:req.body});
const {title, description}=req.body;
    const todo=await createTODO(title,description);
    res.send(todo);
});
module.exports=router;

