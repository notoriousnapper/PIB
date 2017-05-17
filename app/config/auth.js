// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    // 'facebookAuth' : {
    //     'clientID'      : '1594162250880584', // your App ID
    //     'clientSecret'  : '717b93b44fbdf3ec7dd77679dcd62040', // your App Secret
    //     'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    // },
    
    // NOTE: clientID is in dev-mode = can only test using my facebook.
    'facebookAuth' : {
        'clientID'      : '815420335275124', // your App ID
        'clientSecret'  : '6cf0ba8b84f34499714e5d498106b621', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
