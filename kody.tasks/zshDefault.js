/**
  * set fish shell - set fish shell as default shell
  * @license MIT
  * @author jh3y
*/
const options = {
  name: 'zsh',
  description: 'set zsh shell as default shell',
  exec: function(resolve, reject, shell, log, config) {
    const scriptPath = config.zshDefaultScriptPath;
    if (scriptPath) {
      shell.exec(`sh ./${scriptPath}`);
      log.success('zsh shell set as default');
    } else
      log.error('zsh shell script not found');
    resolve();
  }
};

exports.options = options;
