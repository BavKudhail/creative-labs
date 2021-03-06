# Creator Labs

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://creativelabs-app.herokuapp.com/)

## Description
Creative Labs is a platform for developers, designers and artists to network and collaborate within the new creator economy. We are living in a very exciting time when it comes to technology, as creative people we often have a lot of ideas for projects we would like to execute, however, can lack certain skillsets in order to bring our ideas into fruition. Our goal was to create an app where a creative, whether that be designer, developer, or artist could post an idea of a project that they would like to build.

They could then state what skill-set they required and how many individuals needed. In addition to this functionality, we wanted to integrate features of a social network. Such as a private 1-1 chat for the creatives. As well as chat rooms for each project idea.
In order to fuel our ambition, we had to overcome a variety of obstacles which led us to become familiar with existing and new technologies.

## Contributors
* Bav Kudhail
* Nadine Mohsen
* Emily Mckibben

## Concept
Do you have a brilliant idea?
Are you a developer in need of some 3D models? A designer that can't code? A 3D artist that needs some help with design?
Creator Labs is a space for all creatives to come together to share their skills in order to build new and exciting projects.

![screenshot of landing page](/public/images/Landing.JPG)

## User Story
```md
AS A creative with an excellent idea,
I WANT to find others creators with skills to complement my own
SO THAT I can build my project successfully

AS A creative with looking to get their creative juices flowing,
I WANT to find projects that I can join and network with other creators
SO THAT I can build awesome things
```


### Key Features
* Users can create their own projects
* Users can join others projects to form a team
* Users have group chat messaging
* Users have private chat messaging
* Users have a personal profile page


## Table of Contents
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed Application](#deployed-application)
- [Questions](#questions)

## Technologies Used

- HTML
- CSS
- Javascript
- jQuery
- Dotenv
- Nodemon
- Express
- Node.js
- Handlebars.js
- Express-session
- Moment
- Mysql2
- Sequelize
- AWS S3
- Socket.io

## Screenshots

### Dashboard

![screenshot of dashboard page](/public/images/Dashboard-gif.gif)

### Project Chat

![screenshot of project page](/public/images/Project%20Page.JPG)

### Chatbox

![screenshot of project chat](/public/images/Chat.gif)

### User Profile

![screenshot of project chat](/public/images/Profile.gif)

## Figma Design
Each screen was designed on figma making the development process easier.
![image](https://user-images.githubusercontent.com/93915846/172047648-1efccc8b-2ff0-4778-90b4-0ce398ccf7e2.png)



## Installation

Clone the repository to your local machine.

```
git clone https://github.com/bavkudhail/creative-labs
cd creative-labs
```

Install the required dependencies

```
npm i
source schema.sql
node server.js
npm run seed
```

You must then place a .env file in the root directory in order to connect to your MySql database as well as information to your AWS bucket. An example has been placed within the root directory of this repository.

## Usage

To use the application on heroku click the link under Deployed Application.
Alternatively, to use this on your local machine. Enter ` node server.js` in the terminal. A link to `localhost:3001` will appear in the terminal. Click this link and the project will open in your browser.

## Deployed Application

The deployed application is available here:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://creativelabs-app.herokuapp.com/)

## Questions

If you have any questions about this project please feel free to get in touch with myself via email or the project team below.

- [Bav Kudhail](https://github.com/BavKudhail)
- [Nadine Mohsen](https://github.com/nadinemohsen)
- [Emily McKibben](https://github.com/empipio)
