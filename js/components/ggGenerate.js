(function() { 
    
    angular
        .module('mainApp')
        .component('ggGenerate', {
            templateUrl: 'templates/gg-generate.html',
            controller: ggGenerate
        });

    /**
     * Main Function
     */
    function ggGenerate($window, $routeParams, $location, ggFormatService, ggEventService) {
        var ctrl = this;
        ctrl.mode = $location.path().substr(1);
        ctrl.events = {};

        try {
            
            // Retrieve existing config
            ctrl.config = JSON.parse(atob($routeParams.config));

        } catch(exception) {

            // Build new config
            ctrl.config = {
                name: "New Generator",
                fields: [],
                showLabels: false
            };
            
        }

        // Save config
        ctrl.save = function() {
            var string = JSON.stringify(ctrl.config);
            string = btoa(string);
            $window.location.assign('#/view?config=' + string);
        };

        // Edit config
        ctrl.edit = function() {
            var string = JSON.stringify(ctrl.config);
            string = btoa(string);
            $window.location.assign('#/edit?config=' + string);
        };

        // Add a new field
        ctrl.addField = function(type) {
            type = type ? type : "List";
            var id = ctrl.config.fields.length;

            ctrl.config.fields.push({
                id: id,
                name: "Field " + id,
                orderId: id,
                type: type
            })
        };

        // Move field up (so sort index down)
        ctrl.events.up = function(id) {

            if (id < 1) {
                return;
            }

            var from = id;
            var to = (id > 0) ? id-1 : id;
            
            moveField(from, to);
        };

        // Move field down (so sort index up)
        ctrl.events.down = function(id) {
            
            if (id > ctrl.config.fields.length) {
                return;
            }

            var from = id;
            var to = (id < ctrl.config.fields.length) ? id+1 : id;
            
            moveField(from, to);
        };

        // Remove a field
        ctrl.events.remove = function(id) {
            
            if (id < 0 || id > ctrl.config.fields.length) {
                return;
            }

            ctrl.config.fields.splice(id, 1);

            // Update all ids
            for (var i = 0; i < ctrl.config.fields.length; i++) {
                ctrl.config.fields[i].id = i;
            }
        };

        function moveField(from, to) {
            ctrl.config.fields[from].id = to;
            ctrl.config.fields[to].id = from;
            ctrl.config.fields.splice(to, 0, ctrl.config.fields.splice(from, 1)[0]);
        }

        // Run once - on startup
        if (ctrl.mode === 'edit' && ctrl.config.fields.length === 0) {
            // Populate some data
            ctrl.addField();
        }
    }

}());