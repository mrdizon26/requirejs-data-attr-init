define(["jquery", "modules/ND"], function(jQuery, NDModules) {
        

        var Search,
        	NDSearch;


        Search = function() {

        	var name = "search",
        		version = 0.1;

    		return {
    			init: function() {
	        		console.log('running '+ name + ' module');
	        	},

	        	getName: function() {
        			return name;
	        	},

	        	getVersion: function() {

	        		return version;
	        	}
    		};

        };

        // Create a new instance of Search to use. 
        NDSearch = new Search();

        // Register the module name and object (to be used as a reference), this will be called from within the NDModule initialiser.
		NDModules.register(NDSearch.getName(), NDSearch);
        return NDSearch;

    }
);