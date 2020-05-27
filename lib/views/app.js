var chalk = require('chalk');

module.exports.render = function() {
	
	console.log(chalk.blue('--------------------------------------------------'));
	console.log(chalk.green('Project files created.'));
	console.log(chalk.green('Now just follow these steps: \n'));
	console.log('1- cd into your new project folder');
	console.log('2- npm install');
	console.log('3- create component: organic-cli component your-component-name');
	console.log(chalk.blue('--------------------------------------------------'));
	
};
