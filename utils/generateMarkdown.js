require('./SectionData.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (!license){
    return "";
  }else{

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README from an array of SectionData objects
function generateMarkdown(data) {
  return `# ${data.Title}\n
  \n
  # Description\n
    ${data.Description}\n
    \n
  ## Table of Contents\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Collaborators](#collaborators)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  \n
  # Installation\n
  ${data.Installation}\n
  \n
  # Usage \n
  ${data.Usage}\n
  \n
  # License \n
  ${data.License}\n
  \n
  # Collaborators\n
  ${data.Credits}\n
  \n
  # Contributing\n
  ${data.Contributing}\n
  \n
  # Tests\n
  ${data.Testing}\n
  \n

  # Questions\n
  [Github](${data.GitHub})\n
  [Email](mailto:${data.Email})
  \n

  `;
}

//would like to implement a modular system that generates any given section with title and everything, but for this that would be overkill. 
//The user might as well simply type up the entire readme themselves
function genSingleSection(){

}

module.exports = generateMarkdown;
