const express=require('express');
const { createTODO, deleteTODO, updateTODO,listTODO } = require('../models/todo');
const router=express.Router();

router.post('/',async(req,res)=>{
const {title, description}=req.body;
    const todo=await createTODO(title,description);
    res.send(todo);
});
router.delete('/:id',async(req,res)=>{
    const _id=req.params.id;
    const resp=await deleteTODO(_id);
    res.send(resp);
});
router.put('/:id',async(req,res)=>{
    const _id=req.params.id;
    const {title, description}=req.body;
    const resp=await updateTODO(_id,title, description);
    res.send(resp);
});

router.get("/", async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // Default values if not sent
    page = parseInt(page);
    limit = parseInt(limit);

    const skip = (page - 1) * limit;

    try {
        const { todos, totalCount } = await listTODO(skip, limit);
        res.json({
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalCount,
            todos
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
});

module.exports=router;

