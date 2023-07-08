const mongoose = require("mongoose");
const schema = mongoose.Schema;
const comment = new schema({
    writername:{
        type:String,
        required:["bu alanı doldurmak gereklidir",true],
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports  = mongoose.model("Comment", comment);
