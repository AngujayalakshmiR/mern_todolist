const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
   title:String,
   description:String, 
},{
    timestamps:true
});
const todoModel=mongoose.model('todo',todoSchema)
async function createTODO(title,description){
    const todo= await todoModel.create({
        title,
        description,
    });
    return todo;
}
async function deleteTODO(_id){
    const deleteResp=await todoModel.deleteOne({_id});
    return deleteResp;
}
async function updateTODO(_id,title,description){
    const updated=await todoModel.updateOne({
        _id
    },{
        title,
        description
    });
    return updated;
}
async function listTODO(skip, limit) {
    const todos = await todoModel.find()
        .sort({ createdAt: -1 }) // Latest first (optional)
        .skip(skip)
        .limit(limit);

    const totalCount = await todoModel.countDocuments();
    return { todos, totalCount };
}


module.exports={
    createTODO,
    deleteTODO,
    updateTODO,
    listTODO
};