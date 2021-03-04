import React from 'react';
import MetaTags from 'react-meta-tags';


//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

//Other imports
import ProjectsInfo from './../API/ProjectsInfo.jsx';
import ProjectTitle from './../components/Project.jsx';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(5),
        fontWeight: "bold",
        textAlign: 'center',
        color: "#00887A"
    },
}));

const Projects = () => {
    const classes = useStyles();
    
    const projectsInfo = () => Object.keys(ProjectsInfo).map(key => 
            <ProjectTitle projectId={ProjectsInfo[key].projectId} Title={ProjectsInfo[key].Title} Summary={ProjectsInfo[key].Summary}  Illustration={ProjectsInfo[key].Illustration}/>
        )

    return (
        <div>
            <MetaTags>
                <title>Zill-e-Rahim Projects | Skills | Experience</title>
                <meta name="description" content="Essential skills that Zill-e has aquired over the years and the projects that show these skills" />
            </MetaTags>
            <Grid
                container
                direction="column"
            >
                <Grid
                    item
                    container
                    justify="center"

                >
                    <div style={{ height: '30vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                        <Typography className={classes.title} variant="h3">Projects + Skill Set</Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                >
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        {
                            projectsInfo()
                        }
                        
                        </Grid>
                    <Grid item xs={1} />
                </Grid>

            </Grid>
        </div>
    )
}

export default Projects;