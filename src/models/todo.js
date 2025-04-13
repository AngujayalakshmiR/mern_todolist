async function createTODO(title,description){
    return{
        title,
        description,
        _id:1
    }
}
module.exports={
    createTODO
};