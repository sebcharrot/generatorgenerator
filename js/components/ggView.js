(function() { 
    
    angular
        .module('mainApp')
        .component('ggView', {
            templateUrl: 'templates/gg-view.html',
            controller: ggView
        });

    /**
     * Main Function
     */
    function ggView($routeParams) {
        var ctrl = this;
        
        try {
            ctrl.config = JSON.parse(atob($routeParams.data));
        } catch(exception) {
            ctrl.config = {
                name: "New Generator",
                fields: [],
                showLabels: false
            };
        }
    }

}());