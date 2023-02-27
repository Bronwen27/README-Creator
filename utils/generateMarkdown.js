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

  You can contribute to this project via [Contributor Covenant](https://www.contributor-covenant.org/)

  ## Tests


  ## Questions

  If you have
`;
}

module.exports = generateMarkdown;
