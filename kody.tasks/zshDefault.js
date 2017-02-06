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
      const zshPlugins = config.zshPlugins
      if(zshPlugins.length) {
        log.info('Cloning zsh plugins')
        shell.exec(`mkdir -p ${config.GIT_PROJECTS_FOLDER}`)
        try {
          for(const plugin in zshPlugins) {
            const name = plugin.matches(/\/(.*)\.git/)
            shell.exec(`git clone ${plugin} ${config.GIT_PROJECTS_FOLDER}/${name}`)
          }
        } catch(err) => reject(err)
      }


    } else {
      log.error('zsh shell script not found');
    }
    resolve();
  }
};

exports.options = options;
