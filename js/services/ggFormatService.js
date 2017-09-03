(function() { 
    
    angular
        .module('mainApp')
        .service('ggFormatService', ggFormatService);

    /**
     * Main function
     */
    function ggFormatService($q) {

        /**
         * Retrieve a preview string
         */ 
        this.getPreview = function(fields) {
            var preview = "-";
            
            if (fields && fields.length > 0) {
                preview = fields
                    .map(this.getValue)
                    .join(" ");
            }

            return preview;
        }

        /**
         * Given a field, get the display value
         */ 
        this.getValue = function(field) {
            var returnString = "-";

            switch(field.type) {
                case "Text":
                case "List":
                    returnString = field.value;
                    break;
                default:
                    returnString = field.name;
                    break;
            }

            return (returnString) ? returnString : "-";
        }
    }

}());