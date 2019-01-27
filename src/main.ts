import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import * as Backend from "i18next-xhr-backend";
import * as Bluebird from 'bluebird';
// As default, use the browser's language
let selectedLanguage = navigator.languages[0] || navigator.language;


// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName("aurelia-i18n"), instance => {
      instance.i18next.use(Backend);
      return instance.setup({
        backend: {
          loadPath: "./locales/{{lng}}/{{ns}}.json"
        },
        lng: selectedLanguage,
        attributes: ["t", "i18n"],
        fallbackLng: "de-DE",
        debug: true
      });
    });
   
  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  return aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
