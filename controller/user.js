const {User} = require("../model/user");


exports.getAllUsers = async (req,res)=>{
    try {
        const users =  await User.findAll();
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getUserById = async (req,res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).json({message : "User fetched" ,  user : user})
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createUser =  async (req,res)=>{
    console.log(req.body)
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({message : "User created"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)   
    }
}

exports.updateUser = async (req,res)=>{
    const {id} = req.params
    try {
        const updateCount = await User.update(
            req.body,
            {
                where : {id}
            }
        );
        res.status(202).json({message : "User updated"});
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteUser = async (req,res)=>{
    const {id} = req.params;
    try {
        const deleteCount = await User.destroy({where : {id}});
        res.status(200).json({message : "User deleted"});
    } catch (error) {
        res.status(500).json(error)
    }
}