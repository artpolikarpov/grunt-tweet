# grunt-tweet

Tweet from Grunt task.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven’t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a `[Gruntfile.js](http://gruntjs.com/sample-gruntfile)` as well as install and use Grunt plugins. Once you’re familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tweet --save-dev
```

After that it may be enabled inside your `Gruntfile.js` with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tweet');
```

## The “tweet” task

In your project’s `Gruntfile.js`, add a section named `tweet` to the data object passed into `grunt.initConfig()`:

```js
grunt.initConfig({
  tweet: {
    options: {
      // OAuth credentials, required
      consumer_key: '...',
      consumer_secret: '...',
      access_token: '...',
      access_token_secret: '...'
    },
    release: {
      // All is optional here
      options: {
        crop: true // Crops tweet if it’s too long
      },
      text: 'The 0.0.1 release',
      url: 'https://github.com/owner/repo/releases/tag/0.0.1'
    }
  }
});
```

### OAuth credentials

Create [an Twitter App](https://dev.twitter.com/apps/new) and get OAuth credentials (if you haven’t already). Be careful, these tokens are like passwords so you should guard them carefully.

The best practice is to store credentials in separate gitignored-file, `tweet.json` for example:

```json
{
  "consumer_key": "voLyIigS0FHaX6XDIA5zA",
  "consumer_secret": "sdiacB4CaMzeYDuLQE4zq9LdJrjjWrP7toqI77Fwk",
  "access_token": "3698193540-1iOOCcL60k7PA9RNq8mQtr9EAYwCwlHGh9IO3P8",
  "access_token_secret": "DeIdfCh7rCuHCU01AgHJGVHL3KfYYMDhMY7gks3I9s"
}
```

…and then to read it in `Gruntfile.js` like so:

```js
grunt.initConfig({
  tweet: {
    options: grunt.file.readJSON('tweet.json'),
    release: { /**/ }
  }
})
```

## Release History
### 0.0.4, Oct 8 2013
Update Readme.md. Minor development minors.
### 0.0.3, Oct 8 2013
Add root `Gruntfile.js` for development and testing.
### 0.0.2, Oct 8 2013
Better log. Minor development things.
### 0.0.1, Oct 8 2013
Initial commit.
