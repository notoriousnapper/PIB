var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname +'/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

/* Configurations */
/* Three items */
// 1. Where to Start
// 2. What to transform into what
// 3. Where to put the transformed code
module.exports = {
        entry:[
          './app/index.js',
        './app/scripts/TestAPI.js',
        './app/config/routes.js',

        './app/components/Main.js',
        './app/components/Contact.js',

        './app/components/aboutpage/About.js',
        './app/components/homepage/Home.js',

        './app/components/content/Content.js',

        './app/components/projectlistings/SearchBar.js',
        './app/components/projectlistings/ProjectListing.js',
        './app/components/projectlistings/ProjectSearchList.js',
        './app/components/projectlistings/Projects.js',
        './app/components/projectlistings/Category.js',

        './app/components/projectpage/Proj.js',
        /* Submission components */
        './app/components/addpage/Add.js',
        './app/components/addpage/Step.js',
        './app/components/addpage/StepAdd.js',
        './app/components/CommentForm.js',
        './app/components/Input.js',
        /* Basic UI Components */
        './app/components/custom/TextComponent.js',
        './app/components/custom/ImageComponent.js',
        './app/components/custom/Carousel.js',
        './app/components/custom/LabelCarousel.js',
        './app/components/custom/Detail.js',
        './app/components/custom/Footer.js',


        './app/components/Frame.js',
        './app/components/Bar.js',
        './app/components/projectpage/DetailBox.js',
        './app/components/projectpage/Scroll.js',
        './app/components/IntroBox.js',
        './app/components/Pad.js',

        './app/components/userpage/Login.js',
        './app/components/userpage/SignUp.js',
        './app/components/userpage/Profile.js'
        ],
        module: {
            /* Transformations go here */
            /* The regexp says, get all .js files and put it into one file */
            loaders: [
              {test: /\.js$|.jpe?g$|\.gif$|\.png/, exclude: /node_modules/, loader: "babel-loader"}

            ]
        },
        output: {
          filename: "bundle.js",
          path: __dirname + '/dist'
        },
        plugins: [HTMLWebpackPluginConfig,
                new CopyWebpackPlugin([
                    {from: 'public',
                     to: 'public' }
                ])
        ],
        node: {
                  fs: "empty"
        }

};
