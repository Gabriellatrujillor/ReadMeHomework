function generateMarkdown(userInputObj) {
  return `
# Github Account: ${userInputObj.username}

# Email: ${userInputObj.email}


![Github Profile Picture](${userInputObj.githubIcon})

# **${userInputObj.title}**

## *Description*

${userInputObj.description}

## *Table of Contents*

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## *Installation*

 ${userInputObj.installation}


## *Usage*

 ${userInputObj.usage}

## *Credits*

 ${userInputObj.credits}

## *License*

 ${userInputObj.license}


---
## Badges

![badge](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing

 ${userInputObj.contribution}

## Tests

 ${userInputObj.tests}

`;
}

module.exports = generateMarkdown;
