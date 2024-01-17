const express= require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
  const app = express();
  app.use(express.json());

  app.get('/todo' ,  async(req,res)=>{
     const todos=await todo.find({});
     res.json({
        todos
     })

  })
  app.post('/todos' ,  async(req,res)=>{
    const  createPayload= req.body;
    const parsedPayload=   createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
         res.status(411).json({message: "you sent the wrong items."})
         return;
    }
    //put db here
    await todo.create({
      title:createPayload.title,
      description:createPayload.description,
      completed:false,
    })
       res.json({message: "created successfully"});
  })
  app.put('complete' ,  async (req,res)=>{
    const updatePayload= req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success) {
      res.status(411).json({message: "you sent the wrong items."})
      return;
 }
 await todo.update({
  _id:req.body.id
 }, {
  completed:true
 })
 res.json( {msg:" todo updated"})

})


  app.listen(3000 , console.log('server listening on 3000'));

  