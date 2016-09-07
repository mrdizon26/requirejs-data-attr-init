# RequireJS + data-attr initialiser

testing sourcetree

Setup contains two main things:

* jQuery CDN fallback
* Module initialiser for data-attributes

The data attributes initialiser works by loading the ND(Module) object and the modules inside of main. Each individual module has NDModule as a dependency which before returning its own object, will run the NDModule.register() method. The register method takes two parameters being the name and the object reference.

It is assumed that in the NDModule private arrays storing the moduleList and objectList they are kept in sync, if not add some error handling.
