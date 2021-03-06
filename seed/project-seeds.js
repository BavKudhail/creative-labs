const { Project } = require("../models");

const projectData = [
  // example project data
  {
    title: "NFT Art Project",
    description:
      "I am a 3D artist looking to partner up with a designer and developer to work on launching a new exciting NFT Art project!",
    data_created: "",
    developers_needed: 1,
    designers_needed: 2,
    artist_needed: 1,
  },
  {
    title: "Blockchain Website",
    description:
      "I am a designer and have designed a UI for an awesome site that will serve the blockchain commuminity! Looking for developers to join me on the journey",
    data_created: "",
    developers_needed: 3,
    designers_needed: 1,
    artist_needed: 1,
  },
  {
    title: "App to take you to Mars",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    data_created: "",
    developers_needed: 5,
    designers_needed: 1,
    artist_needed: 1,
  },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
