/**
 * Module dependencies.
 */
var fs = require('fs');
var chalk = require('chalk');
var recursiveCopy = require('recursive-copy');
var newProjectView = require('../views/new-project');

/**
 * Export object.
 */
module.exports = NewCommand;

/**
 * Constructor: NewCommand
 *
 * Defines responsibilities for creating a new project.
 *
 * @param {args} The arguments array.
 */
function NewCommand(args) {
	this.projectName = args[0];
}

/**
 * Method: run()
 */
NewCommand.prototype.run = function() {
	
	var self = this;
	var sourceDirectoryPath = __dirname + '/../../templates/base';
	var targetDirectoryPath = process.cwd() + '/' + self.projectName;
	var packageJsonFilePath = targetDirectoryPath + '/package.json';
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
		// find and replace [APP_NAME] in package.json file
		fs.readFile(packageJsonFilePath, function(err, content) {
			if (err) {
				console.error(chalk.red('Could\'nt find package.json file.'));
				return;
            }
			
			content = content.toString().replace('[APP_NAME]', self.projectName);
			
			fs.writeFile(packageJsonFilePath, content, function() {
				console.info(chalk.green(results.length + ' file(s) copied'));
				newProjectView.render();
			});
		});
		
    })
    
	.catch(function(error) {
        return console.error(chalk.red('Copy failed: ' + error));
    });
	
};