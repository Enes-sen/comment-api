const Comment = require("../models/comment.js");

const getAll = async (req,res) =>{
    try {
        const comments = await Comment.find({});

        res.json({
            success:true,
            status:200,
            comments
        });
        
    } catch (err) {
        console.log("err:",err.message);
        res.status(err.status).json({
            success:false,
            status:err.status,
            message:err.message

        });
    }
};

const AddOne = async (req,res)=>{
    const info = req.body;

    try {
        if(!info.writername){
            return res.json({
                success:false,
                status:404,
                message :"kullanıcı ismi gerklidir"
                

            });
        }
        if(info){
            const newComment = await Comment.create({
                ...info
            });
            if(newComment){
                return res.json({
                    success:true,
                    status:201,
                    comment:newComment,
                    message :"Yorum Eklendi"
                    

                });
            }
        }
        
    } catch (err) {
        console.log("err:",err.message);
        res.status(err.status).json({
            success:false,
            status:err.status,
            message:err.message
        });
    }
}

const DeleteOne = async (req,res)=>{
    const id = req.params.id;

    try {
        if(id){
            const cOmment = await Comment.findByIdAndDelete({_id:id});
            if(cOmment){
                res.json({
                    success:true,
                    status:200,
                    message :"Yorum kaldırıldı"
                })
            }  
        }
        
    } catch (err) {
        console.log("err:",err.message);
        res.status(err.status).json({
            success:false,
            message:err.message
        });
    }
}

module.exports = {
    getAll,
    AddOne,
    DeleteOne
};
