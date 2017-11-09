const i18n = require('i18n');
const cookieParser = require('cookie-parser');
const log = require('debug')('r2:i18n');

module.exports = function I18N(app, conf) {
  const getConfig = conf || app.config('i18n');
  if (!getConfig) {
    return log('i18n config not found!');
  }

  const {
    locales = ['en'],
    defaultLocale = 'en',
    directory = `${process.cwd()}/config/locales`,
    cookie = 'locale',
    objectNotation = true,
  } = getConfig;

  i18n.configure({
    locales,
    defaultLocale,
    directory,
    cookie,
    objectNotation,
  });

  app.use(cookieParser());
  app.use(i18n.init);
};
