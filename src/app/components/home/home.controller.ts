module huniApp {
  'use strict';
  class HomeController {
    data: string;
    $rootScope: ng.IRootScopeService;
    constructor($rootScope: ng.IRootScopeService) {
      this.data = 'Huni project';
    }
  }
  angular.module('huniApp').controller('HomeController', HomeController);
}
