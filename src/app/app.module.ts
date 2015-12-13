module huniApp {
  'use strict';

  angular.module('huniApp', [
      'ngNewRouter'
  ])
  .config(/* @ngInject */($compileProvider: ng.ICompileProvider, $componentLoaderProvider: any) => {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);
    // set templates path
    $componentLoaderProvider.setTemplateMapping(name => `app/components/${name}/${name}.html`);
  });

  // @huniApp.controller()
  export class AppController {
    /* @ngInject */
    constructor($router: any) {
      $router.config([
        { path: '/home', component: 'home' },
        { path: '/', redirectTo: '/home' }
      ]);
    }
  }

  angular.module('huniApp').controller('AppController', AppController);
}