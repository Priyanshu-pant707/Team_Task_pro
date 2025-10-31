const mongoose= require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String ,
        enum : ["pending","in-progress","completed"],
        default :"pending"
    },

},{timestamps:true});


const taskModel= mongoose.model("Task",taskSchema);

module.exports=taskModel;