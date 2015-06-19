Package.describe({
  name: 'q42:wait-for-image',
  version: '0.0.2',
  summary: 'A block helper to wait with rendering content until an image has been loaded',
  git: 'https://github.com/Q42/meteor-wait-for-image',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('reactive-var');
  api.use('templating');
  api.use('ui');
  api.use('spacebars');
  api.use('blaze');
  api.addFiles('wait-for-image.html');
  api.addFiles('wait-for-image.js', ['client']);
});
