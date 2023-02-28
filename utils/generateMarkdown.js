// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}

  ## Table Of Contents:

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contribute 

  

  ## Tests


  ## Questions

  Thank you for your interest in this project. If you have any questions regarding this project, please contact me at ${data.email}

  If you are interested in viewing more of my work, check out my github page at: ${data.githubName}
`;
}

module.exports = generateMarkdown;
