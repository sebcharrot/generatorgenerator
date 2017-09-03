(function() { 
    
    angular
        .module('mainApp')
        .service('ggListService', ggListService);

    /**
     * Main function
     */
    function ggListService($q) {

        const lists = [
            { name: "Activities", group: "" },
            { name: "Animals", group: "" },
            { name: "Chemical Elements", group: "" },
            { name: "Colors", group: "" },
            { name: "Countries", group: "" },
            { name: "Emotions", group: "" },
            { name: "Fantasy Creatures", group: "" },
            { name: "Greek Gods", group: "" },
            { name: "Locations", group: "" },
            { name: "Materials", group: "" },
            { name: "Nouns", group: "" },

            { name: "Titles", group: "People" },
            { name: "First Names", group: "People" },
            { name: "Last Names", group: "People" },
            
            { name: "Technologies", group: "Hackathons" },
            { name: "Topics", group: "Hackathons" }            
        ];

        this.getLists = function() {
            return lists;
        };

        this.getList = function(listName) {
            if (!listName) {
                return undefined;
            }

            var fileName = "lists/" + listName + ".json";
            return $.getJSON(fileName);
        };

        this.getRandomEntry = function(listName) {
            if (listName) {
                var deferred = $q.defer();

                this.getList(listName)
                    .then(function(items) {
                        if (items.length > 0) {
                            var randomNum = Math.floor(Math.random(items.length-1) * items.length);
                            value = items[randomNum];
                            deferred.resolve(value);
                        }      
                    });

                return deferred.promise;
            }
        }
    }

}());