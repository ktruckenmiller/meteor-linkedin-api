Package.describe({
  name: 'ktruckenmiller:linkedin-api',
  summary: ' Meteor wrapper for the linkedin api.',
  version: '1.0.0',
  git: 'https://github.com/ktruckenmiller/meteor-linkedin-api'
});

Npm.depends({'node-linkedin': '0.5.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('ktruckenmiller:linkedin-api.js', 'server');
  api.export('Linkedin');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ktruckenmiller:linkedin-api');
  api.addFiles('ktruckenmiller:linkedin-api-tests.js');
});
