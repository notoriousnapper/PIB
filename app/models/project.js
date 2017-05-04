var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    name: String,
    about: String,

    url: String, // thumbnail project photo
    partsImg: String,
    carouselFiles: [],
   
    views: Number,
    likes: Number,
    downloads: Number,

    author: String, // for now, add data association later
    team: [],
    authorImg: String,

    // not displayed
    materials: [],
    text: String,
    instructions: String,
    skills: [],
    links: [],
    mainurl: String,
    steps: []

    /*comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]*/ //for later
});

module.exports = mongoose.model('Project', projectSchema);