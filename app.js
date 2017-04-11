import lazyloadModule from './modules/lazyload/';
import oclazyload from 'oclazyload';
const app = angular.module('testapp', ['oc.lazyLoad', 'testapp.lazyLoad']);

app.config(['$ocLazyLoadProvider',
    function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            events: true
        });
    }]);
