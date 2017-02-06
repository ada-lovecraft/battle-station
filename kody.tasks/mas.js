/**
  * mas - install apps from mac app store
  * @license MIT
  * @author 8-uh
*/
const options = {
    name: 'mas',
    description: 'Install apps from Mac App Store',
    exec: function(resolve, reject, shell, log, config) {
      const masInstalled = shell.which('mas') !== null,
        apps = config.masInstalls;
      if (!masInstalled) {
        log.info('installing mas');
        shell.exec(`brew install mas`);
        log.success('mas installed');
      } else
        log.warn('mas was already installed');
      if (apps.length > 0) {
        apps.forEach(app => {
          log.info(`Installing: ${app.name}`)
          shell.exec(`mas install ${app.id}`);
        })

        log.success('mas apps installed');
      }
      resolve();
    }
  };

exports.options = options;
