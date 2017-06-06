var chalk = require('chalk');

module.exports.render = function() {
    
    console.log(chalk.yellow.bold('Welcome to OrganicJS.'));
    console.log(chalk.yellow.bold('To create your new project, type command:'));
    console.log(chalk.green.bold('organic new your_project_name'));
    
};
