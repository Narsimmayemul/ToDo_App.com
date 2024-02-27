
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())

const {connection , Todo_Model} = require("./db.cjs")

app.get("/" , async (req , res)=>{
    try {
        const data = await Todo_Model.find();
        res.status(200).send(data);
        console.log('data recived')
    } catch (error) {
        console.log('this error from get function ' + error)
    }
})

app.post("/" , async (req , res)=>{
    try {
        const data = await Todo_Model.create(req.body);
        res.send(data);
        console.log('data posted'+ data);
        
    } catch (error) {
        console.log('this error from post fun' + error)
    }
})

app.put("/:id" , async(req , res)=>{
    try {
    // const id = req.params.id;
    const data = req.body;
    
    const update = await Todo_Model.findById(req.params.id);
    update.id = data.id || update.id;
    update.name = data.name || update.name;
    update.time = data.time || update.time;
    update.work = data.work || update.work;

    const updated_Todo = await update.save();
    res.status(200).send(updated_Todo);
    console.log('data updated');
} catch (error) {
 console.log(error + 'this error from put fun')       
}
})

app.delete("/:id" , async(req , res)=>{
    try {
        const data = await Todo_Model.findByIdAndDelete(req.params.id);
        res.status(200).send(data);
        console.log('data deleted');
    } catch (error) {
        console.log(error + 'this error from delete fun')
    }
})

app.listen(3000 , ()=>{
    try {
        console.log('connection established');
    } catch (error) {
        console.log(error + "this error from connection")
    }
})