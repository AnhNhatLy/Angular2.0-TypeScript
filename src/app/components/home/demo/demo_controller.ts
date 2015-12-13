module huniApp {
    'use strict';
    class DemoController {
      data: string;
      $rootScope: ng.IRootScopeService;
      constructor($rootScope: ng.IRootScopeService) {
        this.data = 'Huni project';
        this.$rootScope = $rootScope;
      }
      clickEvent() {
        this.$rootScope.demo();
      }
    }
    angular.module('huniApp').controller('huniApp.DemoController', DemoController);
}
