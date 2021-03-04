import React from 'react';
import history from './../history'

//Material UI imports
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: "#00887A",
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
    },
}));

const ProjectTitle = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Grid
                item xs={12}
                container
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} sm={6} >
                    <img src={props.Illustration} onClick={() => {history.push(`/${props.projectId}`)}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" className={classes.heading}>{props.Title}</Typography>
                    <Typography>{props.Summary}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectTitle;