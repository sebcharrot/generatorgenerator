(function() { 
    angular
        .module('mainApp')
        .component('ggField', {
            bindings: {
                config: "=",
                events: "=",
                field: "="
            },
            templateUrl: 'templates/gg-field.html',
            controller: ggField          
        });

    /**
     * Main function
     */
    function ggField(ggListService, ggEventService) {
        var ctrl = this;

        // Retrieve list of lists
        ctrl.lists = ggListService.getLists();

        // Update your value
        ctrl.updateValue = function() {
            if (ctrl.field.type === "List") {
                if (ctrl.field.list) {
                    ggListService.getRandomEntry(ctrl.field.list.name)
                        .then(function(value) {
                            ctrl.field.value = value;
                        });
                }
            }
        };

        // Listen for prompts to update yourself
        ggEventService.onRefresh(ctrl.updateValue);
    }
}());