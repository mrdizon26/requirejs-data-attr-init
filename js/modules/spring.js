define(["jquery", "modules/ND"], function(jQuery, NDModules) {

		// Public object to return
        var spring = {
        	name: "spring",
        	version: 2.1,
        	init: function() {

        		console.log('running '+ this.name + ' module');
        	},
        	getVersion: function() {

        		console.log(this.name + ' version is: ' + this.version);
        	}
        };

		// Register the module name and object (to be used as a reference), this will be called from within the NDModule initialiser.
        NDModules.register(spring.name, spring);
        return spring;

    }
);