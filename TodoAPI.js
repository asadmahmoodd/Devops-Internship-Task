const express=require("express");
const app=express();
const port=3108;
app.use(express.json());

let tasks_list=[];
let id=1;



app.post('/tasks',(req,res)=>{
    
    const task={
        id:id,
        title:req.body.title,
        done:false
    };
    tasks_list.push(task);
    id++;
    res.json(task);

});


app.get('/',(req,res)=>{

    res.send("To view Tasks Visit <a href=http://localhost:3108/tasks>localhost:3108/tasks</a>");
});


app.get('/tasks',(req,res)=>{

    res.json(tasks_list);
});



app.patch('/tasks/:id',(req,res)=>{

    const task=tasks_list.find(t=>(t.id==req.params.id));

    if(!task)
    {
        res.status(404).send("ID not found");
        return;
    }
    else
    {
        task.done=true;
        res.json(task);
        return;
    }

    
});



app.delete('/tasks/:id',(req,res)=>{

    const index=tasks_list.findIndex(t=>(t.id==req.params.id));

    if(index!=-1)
    {
       
        tasks_list.splice(index,1);
        res.send("deleted succesfully");
        return;
    }
    else
    {
        res.status(404).send("Not Found");
        return;
    }

});

app.listen(port,()=>{
    console.log(`Server started on port:${port}`);
});
