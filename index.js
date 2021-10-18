// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



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
    name: 'installation',
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
    message: 'Please choose the appropriate license for your project (Required)',
    // may add more choices for licenses once I know more about them
    choices: ['MIT', 'ISC', 'EPL-1.0', 'CC0-1.0', 'apache-2.0']
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
    type: 'input',
    name: 'features',
    message: 'Provide some information about the features of your project: (Required)',
    validate: featuresInput => {
      if (featuresInput) {
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
const writeFile = readmeData => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', readmeData, err => {
      // if there's an error, reject the promise and send the error to the Promise's '.catch' method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execture the resolve function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the '.then()' method
      resolve({
        ok: true,
        message: 'README.md file created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    // .then(() => {
    //   console.log('Thank you for answering these questions! Creating your project\'s README now!')
    //   return readmeData;
    // })
    .then (readmeData => {
      return generateMarkdown(readmeData)
    })
    .then (readmeData => {
      return writeFile(readmeData)
    })
    .catch(err => {
      console.log(err);
    });
    
   
 
}

// Function call to initialize app
init();
