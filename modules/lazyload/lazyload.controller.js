/* eslint-disable no-underscore-dangle */
export default class lazyLoadController {
    /* @ngInject */

    constructor($ocLazyLoad, $scope, $templateCache) {
        this.lazyLoad = $ocLazyLoad;
        this.$scope = $scope;
        this.$templateCache = $templateCache;
    }

    $onInit() {
        switch (this.$scope.moduleName) {
            case 'a':
                import('../a/').then((loginModule) => {
                    return this.lazyLoad.load({
                        rerun: true,
                        name: loginModule.default.name
                    });
                })
                .then((x) => {
                    this.getTemplates(); // Uncomment this line to load the templates manually
                    this.$scope.active = this.$scope.moduleName;
                    this.$scope.$digest();
                    return null;
                })
                .catch((e) => {
                    console.log('error :', e);
                });
                break;
            default:
                return null;
        }
        return null;
    }

    /*
     Apparently there is a bug with ocLazyLoad, dynamic imports and templateCache.
     Although runBlocks that should put templates into the template Cache are created,
     they don't run. So this is an ugly hack to manually go over the missing templates and put them into the cache
     */
    getTemplates() {
        const startingBlock = this.$templateCache.info().size;
        const endBlock = window.angular.module('ng')._runBlocks.length;
        const runBlocks = window.angular.module('ng')._runBlocks.slice(startingBlock, endBlock);
        const cacheBlock = {
            put: (url, template) => {
                console.log(url);
                this.$templateCache.put(url, template);
            }
        };
        runBlocks.forEach((runBlock) => {
            runBlock[1](cacheBlock);
        });
    }
}
