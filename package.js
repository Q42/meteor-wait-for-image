Package.describe({
  name: 'q42:wait-for-image',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('q42:wait-for-image');
  api.addFiles('wait-for-image-tests.js');
});
