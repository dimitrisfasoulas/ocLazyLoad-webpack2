import template from './lazyload.tpl.html';
const mrwLazyLoad = () => {
    return {
        restrict: 'A',
        controller: 'lazyLoadController as lazyLoadController',
        scope: {
            moduleName: '@'
        },
        templateUrl: template
    };
};

export default mrwLazyLoad;
