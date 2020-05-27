var chalk = require('chalk');

module.exports.render = function () {
    console.log(chalk.yellow.bold('------------------------------------------------'));
    console.log(chalk.yellow.bold('Thanks for using OrganicJS'));
    console.log(chalk.yellow.bold('------------------------------------------------'));
    console.log(chalk.black.bold('To create your new app:'));
    console.log(chalk.green.bold('organic-cli app your_project_name\n'));
    console.log(chalk.black.bold('To create a new app component:'));
    console.log(chalk.green.bold('organic-cli component your_component_name\n'));
    console.error(chalk.yellow.bold('Consult docs here:'));
    console.error(chalk.blue.bold('https://organicjs.github.io/site/docs/'));
};
