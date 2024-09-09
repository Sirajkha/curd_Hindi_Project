const { json } = require("express");
const User = require("../modals/userModal.js")

exports.home= (req,res) =>{
    res.send('Hello World');
}

exports.createUser = async(req,res) =>{
    //extract info
    try{
        const {name,email} = req.body

        if(!name || !email){
            throw new Error("Name and Email are required")
        }
        const userExists = User.findOne({email})
        if (userExists) {
            throw new Error("User already exists") 
        }
        const user = await User.create({
            name,
            email
        })
        res.status(201).json({
            success:true,
            message:"User created Successfully",
            user
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message,
        })
        
    }
}

exports.getUsers = async(req,res) => {
    try{
        const users = await User.find({})
        if(!users){
            throw new Error("User is not defind") 
        }
        res.status(200).json({
            success: true,
            message:"Got all users",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}


exports.editUser = async(req,res) =>{
    try{
        const user = await user.findByIdAndUpdate(req.params.id.body)
        res.status(200).json({
            success:true,
            message:"User updated Successfully"
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:"error user not updated"
        })
    }
}

exports.deleteUser = async(req,res) => {
    try{
       const userId = req.params.id
       await User.findByIdAndDelete(userId)
       res.status(200).json({
        success:true,
        message:"User deleted successfully"
       })
    }catch (error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message, 
        })    
    }
}