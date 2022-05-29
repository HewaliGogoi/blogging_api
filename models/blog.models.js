const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    id : {type : Number, required: true},
    title : {type: String, required: true},
    description : {type: String, required: true},
    label : [{type: String, required : false}],
    author : {type: String, required: true},
    likes : {type:Number, required : false}
},
{
    timestamps : true
}
);

module.exports = mongoose.model('addblog', blogSchema);