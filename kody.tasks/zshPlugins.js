/**
  * set fish shell - set fish shell as default shell
  * @license MIT
  * @author jh3y
*/
const options = {
  name: 'zsh plugins',
  description: 'install zsh plugins',
  exec: function(resolve, reject, shell, log, config) {
    const zshPlugins = config.zshPlugins
    if(zshPlugins.length) {
      log.info('Cloning zsh plugins')
      shell.mkdir('-p',config.ZSH_PLUGIN_DIRECTORY)
      shell.cd(config.ZSH_PLUGIN_DIRECTORY)
      try {
        for(const plugin of zshPlugins) {
          if(typeof plugin === 'object') {
            shell.exec(`git clone ${plugin.mods} ${plugin.url}`)
          } else {
            shell.exec(`git clone ${plugin}`)
          }

        }
      } catch(err) {  reject(err) }
    } else {
      log.warning('No zsh plugins defined')
    }
    resolve();
  }
};

exports.options = options;
