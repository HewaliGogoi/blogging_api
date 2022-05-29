const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {type: String, required: true},
    description : {type: String, required: true},
    label : [{type: String, required : false}],
    author : {type: String, required: true},
},
{
    timestamps : true
}
);

module.exports = mongoose.model('addblog', blogSchema);