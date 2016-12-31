'use strict'

/*
|--------------------------------------------------------------------------
| Services Configuration
|--------------------------------------------------------------------------
|
| This is general purpose file to define configuration for multiple services.
| The below config is for the ally provider. Make sure to save it inside
| config/services.js file.
|
| Happy Coding :)
|
*/

const Env = use('Env')

module.exports = {
  ally: {
    /*
    |--------------------------------------------------------------------------
    | Facebook Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the facebook developers
    | console. https://developers.facebook.com/apps
    |
    */
    facebook: {
      clientId: Env.get('FB_CLIENT_ID'),
      clientSecret: Env.get('FB_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/auth/facebook/callback`
    },

    /*
     |--------------------------------------------------------------------------
     | Twitter Configuration
     |--------------------------------------------------------------------------
     |
     | You can access your application credentials from the twitter developers
     | console. https://apps.twitter.com
     |
     */
    twitter: {
      clientId: Env.get('TWITTER_CLIENT_ID'),
      clientSecret: Env.get('TWITTER_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/auth/twitter/callback`
    },
    /*
    |--------------------------------------------------------------------------
    | Google Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the google developers
    | console. https://console.developers.google.com
    |
    */
    google: {
      clientId: Env.get('GOOGLE_CLIENT_ID'),
      clientSecret: Env.get('GOOGLE_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/auth/google/callback`
    },

    /*
    |--------------------------------------------------------------------------
    | Github Configuration
    |--------------------------------------------------------------------------
    |
    | You can access your application credentials from the github developers
    | console. https://github.com/settings/developers
    |
    */
    github: {
      clientId: Env.get('GITHUB_CLIENT_ID'),
      clientSecret: Env.get('GITHUB_CLIENT_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/auth/github/callback`
    },

    /*
     |--------------------------------------------------------------------------
     | Linkedin Configuration
     |--------------------------------------------------------------------------
     |
     | You can access your application credentials from the linkedin developers
     | console. https://developer.linkedin.com/
     |
     */
    linkedin: {
      clientId: Env.get('LINKEDIN_ID'),
      clientSecret: Env.get('LINKEDIN_SECRET'),
      redirectUri: `${Env.get('APP_URL')}/auth/linkedin/callback`
    }
  }
}