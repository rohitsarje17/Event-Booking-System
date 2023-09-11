import Admin from "../models/Admin";

export const addAdmin = async (req,res,next) => {
    const {email,password} = req.body;
    if( !email && email.trim()==="" && !password && password.trim()==="")
    {
         return req.status(422).json({message:"Invalid Inputs !"});
    }

    let existingAdmin;
   
    try {
        existingAdmin=await Admin.findOne({email});
    } catch (error) {
        return console.log(error);
        
    }

    if(existingAdmin){
        return res.status(400).json({message:"Admin already Exists!"});
    }

    let admin;

    try{
        admin = new Admin({email,password});
        admin=await admin.save(); 
    }
    catch(err){
        return console.log(err);
    }
    if(!admin){
        return res.status(500).json({message:"Something went wrong !"});
    }

        return res.status(201).json({admin});
};