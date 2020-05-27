var chalk = require('chalk');

module.exports.render = function() {
	
	console.log(chalk.blue('--------------------------------------------------'));
	console.log(chalk.yellow.bold('Component files created.'));
	console.log(chalk.blue('--------------------------------------------------'));
	console.log(chalk.green.bold('To begin running your app: \n'));
	console.log('1- Register your component in config/development.js file');
	console.log('2- Run command: node index.js');
	console.log('3- Visit your localhost');
	console.log(chalk.blue('--------------------------------------------------'));

};