var chalk = require('chalk');

module.exports.render = function() {
    
    console.log(chalk.yellow.bold('Welcome to OrganicJS.'));
    console.log(chalk.yellow.bold('To create your new app, type command:'));
    console.log(chalk.green.bold('organic-cli app your_project_name'));
    
};
