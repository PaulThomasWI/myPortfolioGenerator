const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const profileDataArgs = process.argv.slice(2);
// const [myName, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(myName, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        },
    ]);
}

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Project name (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Project Description (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please describe your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Project GitHub link (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub link (Required).');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?'
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);

        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
}

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
;