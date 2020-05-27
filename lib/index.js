/**
 * Module dependencies.
 */
var chalk = require('chalk');
var commands = require('./commands');
var welcomeView = require('./views/welcome');

/**
 * Command map.
 */
var CMD_MAP = {
	'app': commands.app,
	'component': commands.component
};

/**
 * Function: getCommandHandler
 * Returns the appropriate command handler.
 *
 * @param {args} The arguments array.
 */
function getCommandHandler(args) {
	var cmd = args[0];

	if (!cmd in CMD_MAP) {
		console.error(chalk.red.bold('Err: The command is not supported.'));
		console.error(chalk.red.bold('Type "organic-cli help" for available commands.'));
		console.error(chalk.yellow.bold('Consult docs here:'));
		console.error(chalk.blue.bold('https://organicjs.github.io/site/docs/'));
		process.exit(1);
	} else {
		return new CMD_MAP[cmd](args.slice(1));
	}
}

/**
 * Function: initCLI
 * Initializes the command line request.
 *
 * @param {args} The arguments array with first two element stripped off.
 */
function initCLI(args) {

	if (args.length === 0) {
		welcomeView.render();
		return;
	}

	getCommandHandler(args).run();

}

/**
 * Initialize CLI script handling passing it only the relevant arguments.
 */
initCLI(process.argv.slice(2));