//1. CRUD API in node js Mongodb 
//2. Patterns in Javascript
//1 2 3 4 5
//1 2 3 4 
//1 2 3
//1 2 
//1

//3.reverse string in Javascript with out using reverse() function ("Hello")




//1.CRUD API

const express = require("express");
const studemodel = require("./db/conn");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/students", async(req,res)=>{
	try{
		const user = new studemodel(req.body);
		const createuser = await user.save();
		res.status(201).send(createuser)
	}catch(error){
		console.log(error)
		res.send(error)
	}
})
app.get("/students",async(req,res)=>{
	try{
		const studentdata = await studemodel.find();
		res.send(studentdata)
	}catch(error){
		console.log(error)
		res.send(error)
	}
})
app.get('/students/:id',async(req,res)=>{
	try {
		const _id = req.params.id;
		const result = await studemodel.findById(_id);
		if(!result){
			res.send()
		}else{
			res.send(result)
		}	
	} catch (error) {
		res.send(error)
	}
})
app.patch("/students/:id",async(req,res)=>{
	try{
		const _id = req.params.id;
		const updatestudent = await studemodel.findByIdAndUpdate(_id,req.body,{
			new : true
		});
		res.send(updatestudent)
	}catch(error){
		res.send(error)
	}
})

app.delete("/students/:id",async(req,res)=>{
	try{
		const deletestudent = await studemodel.findByIdAndDelete(req.params.id);
		if(!deletestudent){
			return res.send()
		}
		res.send(deletestudent)
	}catch(error){
		res.send(error)
	}
})
app.listen(port,()=>{
	console.log(`server is running on port ${port}`);
})
