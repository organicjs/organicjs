var chalk = require('chalk');

module.exports.render = function () {
    console.log(chalk.yellow.bold('------------------------------------------------'));
    console.log(chalk.yellow.bold('Thanks for using OrganicJS'));
    console.log(chalk.yellow.bold('------------------------------------------------'));
    console.log(chalk.black.bold('To create your new app:'));
    console.log(chalk.green.bold('organic-cli app your_project_name'));
};
