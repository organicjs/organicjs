var chalk = require('chalk');

module.exports.render = function() {
	
	console.log(chalk.blue('--------------------------------------------------'));
	console.log(chalk.green('Component files created.'));
	console.log(chalk.green('Now just follow these steps: \n'));
	console.log('1- Change your config/development.js file');
	console.log('2- Run command: node index.js');
	console.log('3- Visit your localhost');
	console.log(chalk.blue('--------------------------------------------------'));

};