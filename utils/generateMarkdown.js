// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  const [option] = license
  if (!option) {
    return '';
  } else if (option === 'EPL-1.0') {
    return `EPL%201.0-red.svg)`;
  } else if (option === 'CC0-1.0') {
    return `CC0%201.0-lightgrey.svg)`;
  } else if (option === 'MIT') {
    return `MIT.0-lightgrey.svg)`;
  } else if (option === 'apache-2.0') {
    return `Apache%202.0-blue.svg)`;
  } else if (option === 'ISC') {
    return `ISC-blue.svg)`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  const [option] = license
  if (!option) {
    return '';
  }  else if (option === 'EPL-1.0') {
    return `https://opensource.org/licenses/EPL-1.0`;
  } else if (option === 'CC0-1.0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`;
  } else if (option === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (option === 'apache-2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (option === 'ISC') {
    return `https://opensource.org/licenses/ISC`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `The license used for this project was ${license}. The link to more information about this license can be found at: `;
}


// const checkLicense = (license) => {
//   if (Array.isArray(license)) {
//     return renderLicenseLink(license)
//     renderLicenseSection(license)
//     renderLicenseBadge(license)
//    }
// }



// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `
  # ${readmeData.projectName}

  ## Description
  
  ${readmeData.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
  
  ## Installation
  ${readmeData.installation}

  ## Usage
  ${readmeData.usage}

  ## Credits
  ${readmeData.credits}
  
  ## License
  ![License](https://img.shields.io/badge/License-${renderLicenseBadge(readmeData.license)}\
  ${renderLicenseSection(readmeData.license)}
  ${renderLicenseLink(readmeData.license)}
  
  ## Contribution
  ${readmeData.contributions}

  ## Tests
  ${readmeData.tests}

  ## Contact
  
  My GitHub username is ${readmeData.github}. The link to this project is https://${readmeData.github}.github.io/${readmeData.projectName}
  and the link to this project's repository is https://github.com/${readmeData.github}/${readmeData.projectName}.
  If you would like to contact me for any questions/concerns, please email me at ${readmeData.email}. 

  ## ©️2021 ${readmeData.github}
`;
}





module.exports = generateMarkdown;
