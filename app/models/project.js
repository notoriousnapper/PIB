var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var projectSchema = new mongoose.Schema({
    name: String,
    about: String,
    tags: [],
    thumbnail_img: String, // thumbnail project photo    
    imgArray: [String],
    pdfFiles: [String], // PDF files
    views: Number,
    likes: Number,
    downloads: Number,
    author: String, // for now, add data association later
    team: String,

    // Will be removed going to the new site
    url: String, // OLD
    authorImg: String // OLD
    /*comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]*/ //for later
});
projectSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Project', projectSchema);