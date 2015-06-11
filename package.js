Package.describe({
  name: 'angular:angular-server',
  version: '1.4.0',
  // Brief, one-line summary of the package.
  summary: 'Get AngularJS on the server side!',
  // URL to the Git repository containing the source code for this package.
  git: 'http://gihub.com/netanelgilad/meteor-angular-server',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('angular-server-polyfill.js', 'server');
  api.addFiles('angular.js', 'server');
  api.addFiles('angular-export.js', 'server');

  api.export('angular', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:angular-server');
  api.addFiles('angular-server-tests.js');
});
