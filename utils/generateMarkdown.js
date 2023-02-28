// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## User Story

  ${data.userStory}

  ## Description 

  ${data.description}

  ## Table Of Contents:

  * [User Story](#userStory)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Deployed Link](#deployedLink)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Deployed Link:

  ${data.deployedLink}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contribute 

  

  ## Tests


  ## Questions

  Thank you for your interest in this project. If you have any questions reguarding this project, please contact me at ${data.email}

  If you are interested in viewing more of my work, check out my github page at: ${data.githubName}
`;
}

module.exports = generateMarkdown;
