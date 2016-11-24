module.exports = function(config){
  var opalPath;
  if(process.env.TRAVIS){
    python_version = process.env.TRAVIS_PYTHON_VERSION;
    opalPath = '/home/travis/virtualenv/python' + python_version + '/src/opal';
  }
  else{
    opalPath = '../../opal';
  }
  var karmaDefaults = require(opalPath + '/config/karma_defaults.js');
  var baseDir = '../' + __dirname;
  var coverageFiles = [
    __dirname+'/../wardround/static/js/wardround/*.js',
    __dirname+'/../wardround/static/js/wardround/controllers/*.js',
    __dirname+'/../wardround/static/js/wardround/services/*.js'
  ];
    var includedFiles = [
      __dirname+'/../wardround/static/js/wardround/*.js',
      __dirname+'/../wardround/static/js/wardround/controllers/*.js',
      __dirname+'/../wardround/static/js/wardround/services/*.js',
      __dirname+'/../wardround/static/js/test/*.js',
  ];

  var defaultConfig = karmaDefaults(includedFiles, baseDir, coverageFiles);
  config.set(defaultConfig);
};
