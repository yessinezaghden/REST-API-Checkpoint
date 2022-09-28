const express = require ("express");
const connect = require("./config/connectDB");
const user = require("./models/user");
require('dotenv').config({ path: './config/.env' })

const app = express();
connect();
app.use(express.json())
const PORT = process.env.PORT || 5000;
app.post('/add',async(req,res)=>{
    const{fullName,email,phone}= req.body
    try {
        const newUser = new user({
            fullName,
            email,
            phone,
        });
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        console.log(error)
        
    }
});
app.get('/get', async(req,res)=>{
   const users = await user.find();
   res.send(users)
})
app.get('/get/:id', async(req,res)=>{
    const users = await user.findById(req.params.id);
    res.send(users)
 })
 app.put('/put/:id',async(req,res)=>{
    try {
        const edditedUser = await user.findByIdAndUpdate(req.params.id , {...req.body});
        res.send(edditedUser)
    } catch (error) {
        console.log(error)
        
    }
    
 })
  app.delete('/delete/:id', async(req,res)=>{
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    res.send(deletedUser)
  })


app.listen(PORT, err=>err?console.log("error"):console.log(`something is running on port ${PORT}`))
