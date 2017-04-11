import template from './a.tpl.html';
const mrwLazyLoad = () => {
    return {
        restrict: 'A',
        scope: {
            moduleName: '@'
        },
        templateUrl: template
    };
};

export default mrwLazyLoad;
