import angular from 'angular';

const aModule = angular.module('testapp.aModule', []);

import aDirective from './a.directive';

aModule.directive('testappA', aDirective);

export default aModule;
