/**
  * OSX defaults - set system wide OSX defaults
  * @license MIT
  * @author jh3y
*/
const options = {
  name: 'macos',
  description: 'sets system wide macos defaults',
  exec: function(resolve, reject, shell, log, config) {
    const scriptPath = config.osxDefaultScriptPath;
    if (scriptPath) {
      shell.exec(`sh ./${scriptPath}`);
      log.success('macos defaults set');
    } else
      log.error('macos defaults script not found');
    resolve();
  }
};

exports.options = options;
