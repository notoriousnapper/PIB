module.exports.set = function(app) {
const cloudinary =require('cloudinary');
cloudinary.config({
  cloud_name: 'djmk9vktk',
  api_key: '649235919964296',
  api_secret: '04wF_PSoRxl86XunCSeTuMV6TeI'
});

const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
   // copy your routes listed in your app.js directly into here
}
