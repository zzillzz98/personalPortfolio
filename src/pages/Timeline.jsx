import React from 'react'
import MetaTags from 'react-meta-tags'

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
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
    heading: {
        color: "#00887A",
        fontWeight: "bold",
    },
    paper: {
        padding: '6px 16px',
        backgroundColor: "#D3E3FC"
    },
    date: {
        textAlign: "center",
        marginTop : theme.spacing(2),
    },
    finalHeading: {
        color: "#00887A",
        fontWeight: "bold",
        textAlign: "center",
    },
    finalText: {
        textAlign: "center",
    },
    button: {
        textTransform: 'none',
        backgroundColor: "#00887A",
        fontSize: '20px',
        textAlign: 'center',
        color: "white",
        "&:hover" : {
            backgroundColor: "#FFCCBC",
            color: "white",
        }
    },
    buttonGrid: {
        marginTop: theme.spacing(2),
        textAlign: "center",
        marginBottom: theme.spacing(4),

    }
}));

const TimelinePage = () => {
    const classes = useStyles();

    const timeLineText = {
        Freelancer: "Contracted by Green Fields Country Club, worked on creating a website for their company as well as an internal booking system for admins to use to check in and out guest. The websites were created using React.js for the front end with Node.js for the backend and using a MongoDB for the NoSQL Database.",

        Internship: "A four-week long internship at a Software development company located in Lahore, Pakistan. I was working closely with one of the Product Manager’s at Intagleo while he was leading his team on creating a product for a client. I learnt about how a fast-paced Agile work environment looks like and functions on a daily basis. Also helped with a product for their internal employee check in-check out system.",

        UMSUIntl: "The Cultural and Social Vice President of UMSU international. In charge of and Coordinating the university’s biggest social events, with budgets between $40,000 AUD to $80,000 AUD alongside representing and running UMSU international. In charge of a team of 11 office bearers.",

        Tutor: "Hosting online classes for GCE O and A level Computer Science as well as GCE O level Mathematics for almost a year under my supervisor. Thought various kinds of students, who were about to enter there GCE O/A level examinations in the following months.",

        Uni: "Enrolled into the Bachelor of Science at the University of Melbourne, Majoring in Computing and Software System."
    }

    const scrollTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }

    return (
        <div className={classes.root}>
            <MetaTags>
                <title>Zill-e-Rahim | Experience</title>
                <meta name="description" content="A overarking timeline of Zill-e's work experience and education" />
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
                        <Typography className={classes.title} variant="h3">Timeline</Typography>
                    </div>
                </Grid>
                <Grid item>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography>Nov 2020 - Feb 2021</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" className={classes.heading}>
                                        Freelancer at Greenfields Country Club
                                    </Typography>
                                    <Typography>
                                        {timeLineText.Freelancer}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography>
                                    Jan 2020 - Feb 2020
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" className={classes.heading}>
                                        Internship at Intagleo Systems 
                                    </Typography>
                                    <Typography>
                                        {timeLineText.Internship}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography>
                                    June 2019 - Aug 2020
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" className={classes.heading}>
                                        UMSU International Executive Member (Vice President)
                                    </Typography>
                                    <Typography>
                                        {timeLineText.UMSUIntl}
                                    </Typography>                                    
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography>
                                    June 2019 - Nov 2019
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" className={classes.heading}>
                                        Online Tutor at The Leads 
                                    </Typography>
                                    <Typography>
                                        {timeLineText.Tutor}
                                    </Typography>                                    
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        <Typography className={classes.date}>
                            March 2018
                        </Typography>
                        <Paper className={classes.paper}>
                            <Typography variant="h6" className={classes.finalHeading}>
                                Joined University of Melbourne
                            </Typography>
                            <Typography className={classes.finalText}>
                                {timeLineText.Uni}
                            </Typography>                                    
                       </Paper>



                    </Timeline>
                </Grid>
                <Grid item xs={12} className={classes.buttonGrid}>
                    <Button
                        className={classes.button}
                        onClick={scrollTop}
                        variant="contained"
                        >
                            Scroll Up
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default TimelinePage;