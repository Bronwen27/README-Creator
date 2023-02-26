// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## User Story

  ${data.userStory}

  ## Description 

  ${data.description}

  ## Usage

  ${data.usage}

  ## Commands

  ${data.commands}

  ### Deployed Link:

  ${data.deployedLink}

  ### License

  This project is licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
