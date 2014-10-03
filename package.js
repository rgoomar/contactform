Package.describe({
  name: 'rgoomar:contactform',
  summary: 'Simple drop-in contact form with validation',
  version: '0.0.5',
  git: 'https://github.com/rgoomar/contactform.git'
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0");

    api.use([
      'templating',
      'jquery',
      'coffeescript',
      'underscore',
      'less',
      'session',
      'chrismbeckett:fontawesome4@4.2.1',
      'mizzao:bootstrap-3@3.2.0_1',
      'rgoomar:bootstrap-validator@0.5.2'
    ], 'client');

    api.use(['email'], 'server');

    api.addFiles([
      'server/contactConfig.js',
      'server/contactForm.js'
    ], 'server');

    api.addFiles([
      'client/contact.less',
      'client/contact.html',
      'client/contact.coffee'
    ], 'client');

    api.export([
      'contactFormConfig'
    ], 'server');

});
