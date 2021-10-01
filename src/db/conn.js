const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/stud",{
	UseNewUrlParser:true,
	useUnifiedTopology:true
}).then(()=>{
	console.log("connection sucessful")
})
.catch((error)=>{
	console.log(error)
})

const studSchema = new mongoose.Schema({
	name: {
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true,
	},
	adderss:{
		type:String,
		required:true,
	},
	gender:{
		type:String,
		required:true,
	}
});

const studemodel = new mongoose.model("studentdata",studSchema );
module.exports = studemodel ;
