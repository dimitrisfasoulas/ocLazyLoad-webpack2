import angular from 'angular';

const lazyLoadModule = angular.module('testapp.lazyLoad', []);

import lazyLoadController from './lazyload.controller';
import lazyLoadDirective from './lazyload.directive';

lazyLoadModule.controller('lazyLoadController', lazyLoadController);
lazyLoadModule.directive('lazyLoad', lazyLoadDirective);

export default lazyLoadModule;
