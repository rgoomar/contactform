Package.describe({
  name: 'rgoomar:contactform',
  summary: 'Simple drop-in contact form with validation',
  version: '0.0.1',
  git: 'https://github.com/rgoomar/contactform'
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0");

    api.use([
      'jquery',
      'coffeescript',
      'less',
      'chrismbeckett:fontawesome4',
      'mizzao:bootstrap-3',
      'rgoomar:bootstrap-validator'
    ], 'client');

    api.use('email', 'server');

    api.addFiles([
      'client/contact.coffee',
      'client/contact.html',
      'client/contact.less'
    ], 'client');

    api.addFiles([
      'contactForm.coffee',
      'contactConfig.coffee'
    ], 'server');
});
