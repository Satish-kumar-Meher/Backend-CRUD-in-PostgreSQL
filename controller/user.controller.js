import prisma from "../DB/db.config.js";

export const createUser = async (req,res) => {
    const {name,email,password} = req.body

    const findUser = await prisma.user.findUnique({
        where : {
            email : email
        }
    })

    if(findUser) {
        return res.json({status:400,message:"User exist",success:false})
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password,
        }
    })

    return res.json({
        status:200,
        data:newUser,
        message : "user created",
        success:true
    })
}

export const updateUser = async (req,res) => {
    const userId = req.params.userId
    const {name,email,password} = req.body

    await prisma.user.update({
        where : {
            id : Number(userId)
        },
        data:{
            name,
            email,
            password
        }
    })

    return res.json({status:200,
        message : "User upadated succesfully"
    })
}

export const  fetchUsers = async (req,res) => {
    const users = await prisma.user.findMany({
        include : {
            post :true, // --> its return all post data
        }  
        
        
        // include : {
        //     post :{
        //         select:{
        //             title:true,
        //             comment_count:true
        //         } // --> its give the selected post data of the post model
        //     }
        // }

        // select : {
        //     _count:{
        //         select:{
        //             post:true,
        //             comment:true
        //         }  // --> its only give the post count and comment count
        //     }
        // }

    })
    return res.json({status:200,data:users,success:true})
}

export const showUser = async (req,res) => {
    const userId = req.params.id
    const user = await prisma.user.findFirst({
        where : {
            id: Number(userId)
        }
    })

    return res.json({status:200,data:user,success:true})
}

export const deleteUser = async (req,res) => {
    const userId = req.params.id
    await prisma.user.delete({
        where :{
            id : Number(userId)
        }
    })

    return res.json({
        status:200,
        message:"user deleted succesfully",
        success:true
    })
}