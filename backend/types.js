 const Zod = require('zod');

  const createTodo= Zod.object({
    tittle:Zod.string(),
     description :Zod.string(),
  })

   const updateTodo = Zod.object({
    id:Zod.string(),
   });

    module.exports={
        createTodo,
        updateTodo
    }