const User = require("../Models/userModel");
const getAllUser = async(req, res) => {
    let users;

    try{
        users = await User.find();
        if(!users)
        {
            return res.status(404).json({message:"No data found"});
        }
        if(users)
        {
            return res.status(200).send(users);
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};

const getUserById = async(req, res) => {
    const id = req.params.id
    let user;

    try{
        user = await User.findById({_id:id});
        if(!user)
        {
            return res.status(404).json({message:"No user found"});
        }
        if(user)
        {
            return res.status(200).send(user);
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};

const addUser = async (req, res) => {
    const {name, email, age} = req.body;

    try{
        let newUser = await User.create({name, email, age});
        
        if(newUser)
        {
            return res.status(200).json({nmessage:"User created"});
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};

const updateUserById = async (req, res) => {
    
    const id = req.params.id;
    const {name, email, age} = req.body;

    try{
        const updateUser = await User.findByIdAndUpdate({_id:id}, req.body, {new:true});
        if(!updateUser)
        {
            return res.status(404).json({message:"No user found"});
        }
        if(updateUser)
        {
            return res.status(200).json({message:"User is updated"});
        }
    }
    catch(err){
        return res.status(400).json({message: err.message});
    }
};

const deleteUserById = async(req, res) => {
    const id = req.params.id;

    try{
        const deleteUser = await User.findByIdAndDelete({_id:id})
        if(!deleteUser)
        {
            return res.status(404).json({message:"No user found with that id"});
        }
        if(deleteUser)
        {
            return res.status(200).send({message:"User is deleted successfully"});
        }
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

module.exports = { getAllUser, getUserById, addUser, updateUserById, deleteUserById };