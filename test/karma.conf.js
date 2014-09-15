module.exports = function (config) {
  config.set({
    basePath: '../',
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'angular-uri-templates.js',
      'test/**/*.test.js'
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'angular-uri-templates.js' : 'coverage'
    },
    reporters: ['coverage', 'dots'],
    coverageReporter: {
      reporters: [
        {
          type: 'html',
          dir: 'coverage'
        },
        {
          type: 'text-summary'
        }
      ]
    }
  });
};
