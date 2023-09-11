import User from "../models/User";


export const allUsers= async (req,res,next) => {
    let users;
    try{
        users=await User.find();
    }
    catch(err){
        return console.log(err);
    }
    if(!users){
        return res.status(500).json({message:"Error occured"});
    }

        return res.status(200).json({users});

};

export const signUp = async (req,res,next) => {
    const {name,email,password} = req.body;
    if(!name && name.trim() ==="" && !email && email.trim()==="" && !password && password.trim()==="")
    {
        return req.status(422).json({message:"Something went wrong !"});
    }
    
    let existingUser;
   
    try {
        existingUser=await User.findOne({email});
    } catch (error) {
        return console.log(error);
    }

    if(existingUser){
        return res.status(400).json({message:"User with this email id already exists"});
    }

    let user;
    try{
        user = new User({name,email,password});
        user=await user.save(); 
    }
    catch(err){
        return console.log(err);
    }
    if(!user){
        return res.status(500).json({message:"Something went wrong !"});
    }

        return res.status(201).json({user});
};

export const updateUser = async (req,res,next) => {
    const id=req.params.id;
    const {name,email,password} = req.body;
    if(!name && name.trim() ==="" && !email && email.trim()==="" && !password && password.trim()==="")
    {
        return req.status(422).json({message:"Invalid Input !"});
    }
    let user;
    try {
        user = await User.findByIdAndUpdate(id,{name,email,password});
    } catch (err) {
        return console.log(err);
    }

    if(!user){
        return res.status(500).json({message:"Something went wrong !"});
    }

        return res.status(201).json({message:"Credentials Updates!"});
};

export const deleteUser = async (req,res,next) => {
    const id=req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        return console.log(err);
    }

    if(!user){
        return res.status(500).json({message:"Something went wrong !"});
    }

        return res.status(201).json({message:"Deleted Successfully !"});
};

// export const login = async (req,res,next) => {
//     const {email,password} = req.body;
//     if( !email && email.trim()==="" && !password && password.trim()==="")
//     {
//         return req.status(422).json({message:"Something went wrong !"});
//     }

//     try {
//         existingUser = await User.findOne({email});
        

//     } catch (error) {
//         return console.log(error);
        
//     }
// };

