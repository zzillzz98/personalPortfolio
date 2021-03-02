import React from 'react'

//Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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

    return (
        <div>
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
                    <Grid
                        item xs={10}
                        container
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                Test
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                Test
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>

            </Grid>
        </div>
    )
}

export default Projects;