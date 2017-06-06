/**
 * Module dependencies.
 */
var chalk = require('chalk');
var recursiveCopy = require('recursive-copy');
var newComponentView = require('../views/new-component');


/**
 * Export object.
 */
module.exports = NewComponent;

/**
 * Constructor: NewComponent
 *
 * Defines responsibilities for creating a new component.
 *
 * @param {args} The arguments array.
 */
function NewComponent(args) {
	this.componentName = args[0];
}

/**
 * Method: run()
 *
 * @param {cb} The callback.
 */
NewComponent.prototype.run = function() {
	
	var self = this;
	var sourceDirectoryPath = __dirname + "/../../templates/component";
	var targetDirectoryPath = process.cwd() + "/components/" + self.componentName;
	var copyOptions = {dot: true, overwrite: true};
	
	recursiveCopy(sourceDirectoryPath, targetDirectoryPath, copyOptions)
	
	.on(recursiveCopy.events.COPY_FILE_START, function(copyOperation) {
        console.info(chalk.yellow('Copying file ' + copyOperation.src + '...'));
    })
    
	.on(recursiveCopy.events.COPY_FILE_COMPLETE, function(copyOperation) {
        console.info(chalk.green('Copied to ' + copyOperation.dest));
    })
    
	.on(recursiveCopy.events.ERROR, function(error, copyOperation) {
        console.error(chalk.red('Unable to copy ' + copyOperation.dest));
    })
    
	.then(function(results) {
		console.info(chalk.green(results.length + ' file(s) copied'));
		newComponentView.render();
    })
    
	.catch(function(error) {
        return console.error(chalk.red('Copy failed: ' + error));
    });
	
};