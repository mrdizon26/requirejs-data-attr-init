define(["jquery"], function(jQuery) {
        

		// Private module list - The module names are added to this array.
        var moduleList = [],
        	objectList = [];

        return {

        	init: function() {

        		// run the moduleList array 
        		for(var i = 0; i<moduleList.length; i++) {

        			// Get the dom elements that match a moduleList name and run their init function
        			var moduleElement = $('[data-'+moduleList[i]+']');

        			if(moduleElement.length > 0) {
        				objectList[i].init();
        				objectList[i].getVersion();
        			}
        		}
        	},

        	register: function(name, obj) {

        		// These are kept in sync to keep it simple (separate arrays)
        		moduleList.push(name);
        		objectList.push(obj)
        	},

        	getModules: function() {
        		return moduleList;
        	}
        }
    }
);