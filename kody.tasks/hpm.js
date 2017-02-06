/**
  * npm installs - installs desired global modules
  * @license MIT
  * @author jh3y
*/
const PROPS   = {
    ERROR_MSG: 'hpm is not installed',
  },
  options = {
    name: 'hpm',
    description: 'Install hyper plugins',
    exec: function(resolve, reject, shell, log, config) {
      const hpmWhich = shell.exec('which hpm', {silent: true});
      if (hpmWhich.output.trim() !== '') {
        const plugins = config.hyperPlugins;
        for (const plugin of plugins) {
          log.info(`Installing Hyper Plugin: ${plugin}`);
          shell.exec(`hpm install ${plugin}`);
        }
      } else {
        log.error(PROPS.ERROR_MSG);
        reject()
      }
      resolve();
    }
  };

exports.options = options;
