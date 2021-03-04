//Images import
import project1 from './../assets/project1.svg';
import project2 from './../assets/Project2.svg';
import project3 from './../assets/project3.svg';

const Projects = {
    projectOne : {
        projectId: "projectOne",
        Title: "Memento",
        Summary: "This was my third project and second team based project. I was the main Front End Developer as well as the Lead UX/UI designer for the whole website. The clients, assigned to us, wanted us to build a E-portfolio website where users can Register, Log-In and upload their projects. Other users should also be able to view projects users have uploaded and have set to public.",
        Date: "Nov 2020",
        TechStack: ["ReactJS","Material UI","NodeJS","Express","Firebase","Heroku","Github","AdobeXD"],
        SkillsGained: ["Front End Development","React","React-Redux","Website Design","Agile Work environment","Team management","API usage"],
        GitHub : "https://github.com/rahimz98/incognito_front_end",
        Illustration: project1,
        IllustrationAttribute:'<a href="https://storyset.com/web">Illustration by Freepik Storyset</a>',
    },
    projectTwo: {
        projectId: "projectTwo",
        Title: "Roommee",
        Summary: "This was my second pro and first team based project. I learned how to use NodeJS as well as a NoSQL Database, MongoDB. The team made an application where users can put in their preferences in housemates and the websites will use the a custom algorithm to match you with other users with similar preferences. I was in charge of the database modelling for the backend + Design and wire-frames for the Front end",
        Date: "May 2020",
        TechStack: ["ReactJS","Material UI","NodeJS","Express","MongoDB","Heroku","Github","Figma"],
        SkillsGained: ["Back End Development","NodeJS + Express","Database Management","Wire-framing","Git Version Control"],
        GitHub: "https://github.com/ElmoSamudra/Roommee-Front-End",
        Illustration: project2,
        IllustrationAttribute:'<a href="https://storyset.com/social-media">Illustration by Freepik Storyset</a>',
    },
    projectThree: {
        projectId: "projectThree",
        Title: "Poke-dex",
        Summary: "This was my first personal project using ReactJS where I created a visual Pokemon database using the a public API. The API consist everything about all the Pokemon released by the Pokemon company. This project was mainly used for me to learn how to use React and connect the front end to an API",
        Date: "April 2020",
        TechStack: ["ReactJS","Material UI"],
        SkillsGained : ["ReactJS","Web Development","Git Repositories"],
        GitHub : "https://github.com/rahimz98/pokedex_project",
        Illustration: project3,
        IllustrationAttribute:'<a href="https://storyset.com/data">Illustration by Freepik Storyset</a>',
    }
}

export default Projects;
