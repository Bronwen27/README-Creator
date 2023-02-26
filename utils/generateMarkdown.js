// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## User Story

  ${data.userStory}

  ## Description 

  ${data.description}

  ## Usage

  ${data.usage}

  ## Installation

  ${data.installation}

  ### Deployed Link:

  ${data.deployedLink}

  ### License

  This project is licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
