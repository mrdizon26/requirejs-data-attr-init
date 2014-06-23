define(["jquery", "modules/ND"], function(jQuery, NDModules) {

        var Mike,
            NDMike;

        Mike = function() {

            var name = "mike",
                version = 9.99;

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
        NDMike = new Mike();

        // Register the module name and object (to be used as a reference), this will be called from within the NDModule initialiser.
        NDModules.register(NDMike.getName(), NDMike);
        return NDMike;

    }
);