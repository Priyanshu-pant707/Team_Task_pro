// task related controller logic will be here


const taskModel=require("../models/taskModel");



const createTask = async(req,res)=>{
    const task=await taskModel.create(req.body);
    res.status(201).json(task);

}


const getTask = async (req,res)=>{

    const tasks=await taskModel.find().populate("assignedTo","username email");
    res.status(200).json(tasks);
}


module.exports={createTask,getTask};