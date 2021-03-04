import React from 'react';
import { useParams } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

//other imports
import ProjectsInfo from './../API/ProjectsInfo';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(5),
        fontWeight: "bold",
        textAlign: 'center',
        color: "#00887A"
    },
    heading: {
        color: "#00887A",
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
    },
    miniHeading: {
        textAlign: "center",
        color: "#00887A",
        margin: theme.spacing(2),
    },
    list: {
        textAlign: "center",
    },
    github: {
        color: "#00887A",
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(12)
    },
    link: {
        color: "#00887A"
    }
}));

const ProjectPage = () => {
    const { id } = useParams();
    const classes = useStyles();
    const Project = ProjectsInfo[id];

    return (
        <div>
            <MetaTags>
                <title>Zill-e-Rahim | {Project.Title}</title>
                <meta name="description" content={`${Project.Summary}`} />
            </MetaTags>
            <Grid container direction="column">
                <Grid item container justify="center">
                    <div style={{ height: '30vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                        <Typography className={classes.title} variant="h3">{Project.Title}</Typography>
                    </div>
                </Grid>
                <Grid item container>
                    <Grid item xs={1} />
                    
                    <Grid item container xs={10}>
                        <Grid item xs={12}>
                            <Typography className={classes.heading} variant="h5">Project Description</Typography>
                            <Typography>{Project.Summary}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} container justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" className={classes.miniHeading}>Tech Stack Used</Typography>
                            </Grid>
                            {Project.TechStack.map(item => 
                                <Grid item xs={12}>
                                    <Typography className={classes.list}>
                                        {item}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6} container justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" className={classes.miniHeading}>Skills Gained</Typography>
                            </Grid>
                            {Project.SkillsGained.map(item => 
                                <Grid item xs={12}>
                                    <Typography className={classes.list}>
                                        {item}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.github}><Link className={classes.link} href={Project.GitHub}>Link to the GitHub Repository</Link></Typography>
                        </Grid>
                        
                    </Grid>

                    <Grid item xs={1} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectPage;