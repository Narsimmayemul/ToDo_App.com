const mongoose = require('mongoose');
const connection = mongoose.connect(`mongodb+srv://narsimma123:yemul123@cluster0.mpwqvph.mongodb.net/Practice`);

const Todo_Schema = mongoose.Schema({
    id:{type :Number , required:true},
    name:{type :String , required:true},
    time:{type :Number , required:true},
    work:{type :String , required:true}
})

const Todo_Model = mongoose.model("Todo" , Todo_Schema)

module.exports = {connection , Todo_Model}
