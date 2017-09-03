(function() { 
    angular
        .module('mainApp')
        .component('ggGeneratedString', {
            bindings: {
                config: "="
            },
            templateUrl: 'templates/gg-generated-string.html',
            controller: ggGeneratedString          
        });

    /**
     * Main function
     */
    function ggGeneratedString(ggFormatService, ggEventService) {
        var ctrl = this;

        // Retrieve a generated string
        ctrl.getGeneratedString = function() {
            return ggFormatService.getPreview(ctrl.config.fields);
        };

        // Refresh the preview values for all fields
        ctrl.refreshGeneratedString = function() {
            ggEventService.refresh();
        };
    }
}());