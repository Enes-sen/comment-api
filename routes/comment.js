const express = require("express");
const router = express.Router();
const {
    getAll,
    AddOne,
    DeleteOne
} = require("../controlers/comment.js");


router.get("/", getAll);
router.post("/addOne", AddOne);
router.delete("/deleteOne/:id", DeleteOne);


module.exports = router;
