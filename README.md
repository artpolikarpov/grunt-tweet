# grunt-tweet

Tweet from Grunt task.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven’t used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you’re familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tweet --save-dev
```

After that it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tweet');
```

## The "tweet" task

### Overview
In your project’s Gruntfile, add a section named `tweet` to the data object passed into `grunt.initConfig()`:

```js
grunt.initConfig({
  tweet: {
    options: {
      // OAuth credentials
      consumer_key: '...',
      consumer_secret: '...',
      access_token: '...',
      access_token_secret: '...'
    },
    release: {
      options: {
        crop: true // Crop tweet if it’s too long
      },
      text: 'The 0.0.1 release',
      url: 'https://github.com/owner/repo/releases/tag/0.0.1'
    },
  },
})
```

Create [an Twitter App](https://dev.twitter.com/apps/new) and get OAuth credentials (if you haven’t already). Be careful, these tokens are like passwords so you should guard them carefully.

Best practice is to store credentials in separate gitignored-file, `tweet.json` for example:

```json
{
  "consumer_key": "voLyIigS0FHaX6XDIA5zA",
  "consumer_secret": "sdiacB4CaMzeYDuLQE4zq9LdJrjjWrP7toqI77Fwk",
  "access_token": "3698193540-1iOOCcL60k7PA9RNq8mQtr9EAYwCwlHGh9IO3P8",
  "access_token_secret": "DeIdfCh7rCuHCU01AgHJGVHL3KfYYMDhMY7gks3I9s"
}
```

…and to read it in `Gruntfile.json` like so:

```js
grunt.initConfig({
  tweet: {
    options: grunt.file.readJSON('tweet.json')
  },
  release: {}
})
```

## Release History
### 0.0.3, Oct 8 2013
Add root `Gruntfile.js` for development and testing.
### 0.0.2, Oct 8 2013
Better log. Minor development things.
### 0.0.1, Oct 8 2013
Initial commit.
