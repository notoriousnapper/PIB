var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var projectSchema = new mongoose.Schema({
    name: String,
    about: String,

    thumbnail_img: String, // thumbnail project photo
    // partsImg: String,
    carouselFiles: [],
   
    views: Number,
    likes: Number,
    downloads: Number,

    author: String, // for now, add data association later
    team: [],
    authorImg: String,

    /*comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]*/ //for later
});
projectSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Project', projectSchema);