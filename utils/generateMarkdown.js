function generateMarkdown(userInputObj) {
  return `

# **${userInputObj.title}**

## Github Account: ${userInputObj.username}

## Email: ${userInputObj.email}

![Github Profile Picture](${userInputObj.githubIcon})

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

## Contributing

 ${userInputObj.contribution}

## Tests

 ${userInputObj.tests}


 ## Badges

![badge](https://img.shields.io/badge/ReadMeGen-v1.0-ff69b4)
`;
}

module.exports = generateMarkdown;
