// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your github username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter github username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address you would like associated with this README.md document (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project? (Required)',
    validate: projectNameInput => {
      if (projectNameInput) {
        return true;
      } else {
        console.log("Please enter a project name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter your project's description!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installInstructions',
    message: 'Please describe instructions on how to install your project (Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter installation instructions for your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please input your usage instructions for your project (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter usage instructions for your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please enter credits for your project (Required)',
    validate: creditsInput => {
      if (creditsInput) {
        return true;
      } else {
        console.log('Please enter credits for your project!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose the appropriate license(s) for your project',
    // may add more choices for licenses once I know more about them
    choices: ['MIT', 'gpl-3.0', 'eupl-1.1', 'cc', 'afl-3.0']
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Please enter contribution for your project (Required)',
    validate: contributionsInput => {
      if (contributionsInput) {
        return true;
      } else {
        console.log('Please enter contribution guidelines for your project!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmFeatures',
    message: 'Would you like to enter some information from your project for a "Features" section?',
    default: true
  },
  {
    type: 'input',
    name: 'features',
    message: 'Provide some information about the features of your project:',
    when: ({ confirmFeatures }) => {
      if (confirmFeatures) {
        return true;
      } else {
        console.log("Please enter information about the features of your project!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter information about how to test your project (Required)',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please enter testing information for your project!');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(() => {
      console.log('questions answered!')
    })
 
}

// Function call to initialize app
init();
