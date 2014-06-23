define(["jquery", "modules/ND"], function(jQuery, NDModules) {

        var Spring,
        	NDSpring;

        Spring = function() {

        	var name = "spring",
        		version = 3.1;

    		return {
    			init: function(element, options) {
	        		console.log('running '+ name + ' module');

	        		// Probably need to merge this with a settings object.
	        		this.options = options;

	        		// Run and setup this module.
	        		this.changeColour(element);

	        		if(this.options.clickable) {
	        			this.addClickEvent(element);	
	        		}
	        	},

	        	getName: function() {
        			return name;
	        	},

	        	getVersion: function() {

	        		return version;
	        	},

	        	changeColour: function(element) {

	        		var self = this;
	        		
	        		console.log(this.options)

	        		$(element).css({
	        			"color": self.options.color
	        		});
	        	},

	        	addClickEvent: function(element) {

	        		element.on("click", function(){

	        			alert('Clickable option was passed in');
	        		})

	        	}
    		};

        };

        // Create a new instance of Search to use. 
        NDSpring = new Spring();

        // Register the module name and object (to be used as a reference), this will be called from within the NDModule initialiser.
		NDModules.register(NDSpring.getName(), NDSpring);
        return NDSpring;

    }
);