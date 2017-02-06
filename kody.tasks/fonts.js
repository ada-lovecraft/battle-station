/**
  * set up fonts from cask
  * @license MIT
  * @author jh3y
*/
const options = {
  name: 'fonts',
  description: 'Install Developer Fonts',
  exec: function(resolve, reject, shell, log, config) {
    const brewInstalled = shell.which('brew') !== null,
      fonts = config.caskFonts;
    if (brewInstalled && fonts.length > 0) {
      shell.exec('brew tap caskroom/fonts');
      for (const font of fonts)
        shell.exec(`brew cask install font-${font}`);
      log.success('fonts installed');
    } else
      log.warn(`brew-cask not installed. Either brew not installed
        or no casks defined in kody.json`);
    resolve();
  }
};

exports.options = options;
