import React from 'react'

//Materia UI Imports
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//Other imports
import GitHub from './../assets/github.png'
import LinkedIn from './../assets/linkedIn.png'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(5),
        fontWeight: "bold",
        textAlign: 'center',
        color: "#00887A"
    },
    socialHeading: {
        color: "#00887A",
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(4)
    },
    img: {
        width: "250px",
        textAlign: "center"
    },
    grid: {
        marginBottom: theme.spacing(4)
    }
}));

const Socials = () => {
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
                    alignItems="center"
                    justify="center"
                >
                    <div style={{ height: '30vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                        <Grid item>
                            <Typography variant="h3" className={classes.title}>
                                Socials
                            </Typography>
                        </Grid>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.grid}
                >

                    <Grid item xs={1} />

                    <Grid item xs={10} container justify="center">
                        <Grid item xs={12} sm={6} container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4" className={classes.socialHeading}>
                                    <a style={{textDecoration: "none"}} href="https://www.linkedin.com/in/zillerahim/" className={classes.socialHeading}>LinkedIn</a>
                                </Typography>

                            </Grid>
                            <Grid item>
                                <a href="https://www.linkedin.com/in/zillerahim/"><img src={LinkedIn} className={classes.img} alt="LinkedIn logo"  /></a>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} container direction="column" justify="center" alignItems="center">
                            <Grid item>
                                <Typography variant="h4" className={classes.socialHeading}>
                                <a style={{textDecoration: "none"}} href="https://github.com/rahimz98" className={classes.socialHeading}>GitHub</a>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <a href="https://github.com/rahimz98"><img src={GitHub} className={classes.img} alt="GitHub logo" /></a>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={1} />

                </Grid>

            </Grid>
        </div>
    )
}

export default Socials;