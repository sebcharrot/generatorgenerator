(function() { 
    
    angular
        .module('mainApp')
        .service('ggEventService', ggEventService);

    /**
     * Main function
     */
    function ggEventService($q) {

        var refreshCallbacks = [];

        this.onRefresh = function(callback) {
            if (refreshCallbacks) {
                refreshCallbacks.push(callback);
            }
        };

        this.refresh = function(data) {
            for (var i = 0; i < refreshCallbacks.length; i++) {
                refreshCallbacks[i]();
            }
        }
    }

}());