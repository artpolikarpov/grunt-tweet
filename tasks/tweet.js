/*
 * grunt-tweet
 * https://github.com/artpolikarpopov/grunt-tweet
 *
 * Copyright (c) 2013 Artem Polikarpov
 * Licensed under the MIT license.
 */

'use strict';

var Twit = require('twit');

module.exports = function (grunt) {
  grunt.registerMultiTask('tweet', 'Tweet from Grunt task.', function () {
    var done = this.async(),
        data = this.data,
        options = this.options({
          // defaults
          crop: false
        }),
        T = new Twit({
          consumer_key: options.consumer_key,
          consumer_secret: options.consumer_secret,
          access_token: options.access_token,
          access_token_secret: options.access_token_secret
        }),
        status = [],
        l = 140,
        ll;

    function postATweet() {
      if (data.url) {
        ll = (ll || data.url.length) +  2;
        l -= ll + 2;
        status.unshift(data.url);
      }

      if (data.text) {
        if (data.text.length > l && options.crop) {
          data.text = data.text.slice(0, l - 3).trim().replace(/.$/, '') + '...';
        }

        if (data.url) {
          data.text = data.text.replace(/([^.])\.$/, '$1');
        }

        status.unshift(data.text);
      }

      status = status.join(': ');

      T.post('statuses/update', {status: status}, function (err, reply) {
        if (err) {
          done(new Error(err));
        } else {
          // Success message.
          grunt.log.ok('Tweet “' + reply.text + '” has been sent.');
          done();
        }
      });
    }

    if (data.url) {
      T.get('help/configuration', {}, function (err, reply) {
        ll = reply && reply.short_url_length_https;
        postATweet();
      });
    } else {
      postATweet();
    }

  });

};
