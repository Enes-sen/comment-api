const express = require("express");
const router = express.Router();
const comment = require("./comment");
router.get("/",(req,res)=>{
    res.json({
        success:true,
        status:200,
        message:"api main layer"
    });
});
router.use("/comment",comment);



module.exports = router;
