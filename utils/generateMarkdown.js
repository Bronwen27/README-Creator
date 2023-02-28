// function to add license badges
function renderLicenseBadge(license) {
  const licenses = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause": "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Unlicensed": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  };
  return licenses[license];
}

// export the renderLicenseBadge function for use in other modules
module.exports = renderLicenseBadge;

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

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

 ${renderLicenseBadge(data.license)}

  ## Contribute 

  ${data.contribute}

  ## Tests

 ${data.tests}

  ## Questions

  Thank you for your interest in this project. If you have any questions regarding this project, please contact me at ${data.email}

  If you are interested in viewing more of my work, check out my github page at: ${data.githubName}
`;
}

module.exports = generateMarkdown;
