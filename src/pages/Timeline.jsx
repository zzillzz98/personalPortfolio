import React from 'react'

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import { TimelineDot } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#77A6F7",
    },
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
}));

const TimelinePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
                        <Typography className={classes.title} variant="h3">Timeline</Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Timeline align="alternate">
                    <Typography className={classes.socialHeading}>Hello</Typography>                        
                        <TimelineItem >
                            
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography>Eat</Typography>
                            </TimelineContent>
                            
                        </TimelineItem>
                        <Typography className={classes.socialHeading}>Hello</Typography>
                        

                    </Timeline>
                </Grid>
            </Grid>
        </div>
    )
}

export default TimelinePage;