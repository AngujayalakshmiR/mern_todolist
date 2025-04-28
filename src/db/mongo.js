const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "obE0qhaPetjqkNjL"
const DATABASE_NAME = '';
const CONNECTION_URI = `mongodb+srv://<angujayalakshmi2005>:<obE0qhaPetjqkNjL>@todo.ngqmi59.mongodb.net/?retryWrites=true&w=majority&appName=todo`
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'angujayalakshmi2005',
        pass: PASSWORD
    });
}

main().then(() => {
    console.log(`Connected`);
    const commentsSchema = new mongoose.Schema({
        name: String,
        email: String,
        text: String,
        date: String
      });
    const commentsModel = mongoose.model('comments', commentsSchema);
    commentsModel.findOne({}).then(console.log)
    // mongoose.connection.listCollections().then(console.log)
})

main().then(()=>{
    console.log(`Mongo Connected`);
}).catch(console.log);



