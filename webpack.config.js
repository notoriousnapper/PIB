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
        './app/components/Category.js',
        './app/components/SearchComponent.js',
        './app/components/Projects.js',
        './app/components/ProjectListing.js',
        './app/components/ProjectSearchList.js',
        './app/components/Home.js',
        './app/components/Main.js',
        './app/components/About.js',
        './app/components/Contact.js',
        './app/components/Proj.js',
        /* Submission components */
        './app/components/Add.js',
        './app/components/CommentForm.js',
        './app/components/Input.js',
        /* Basic UI Components */
        './app/components/TextComponent.js',
        './app/components/ImageComponent.js',
        './app/components/Frame.js',
        './app/components/Bar.js',
        './app/components/Step.js',
        './app/components/StepAdd.js',
        './app/components/DetailBox.js',
        './app/components/IntroBox.js',
        './app/components/Pad.js',
        './app/components/Login.js',
        './app/components/SignUp.js',
        './app/components/Profile.js'
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
