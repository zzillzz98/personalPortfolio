import React from 'react'

//Material UI Imports
import { Box, Button, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';



//Other Imports
import Banner from './../assets/banner.png'
import ProfilePic from './../assets/profilePic.png'
import Programmer from './../assets/programmer-amico.svg'
import Developer from './../assets/developer-amico.svg'
import FrontEnd from './../assets/front-end.svg'
import BackEnd from './../assets/back-end.svg'
import OtherSkill from './../assets/other-skills.svg'


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(5),
        fontWeight: "bold",
        textAlign: 'center',
        color: "#00887A"
    },
    titleFooter: {
        textAlign: 'center',
        marginBottom: theme.spacing(5),
    },
    paper: {
        backgroundColor: "#ffffff"
    },
    media: {
        height: 300,
        backgroundColor: "#77A6F7",
    },
    card: {
        backgroundColor: "#77A6F7",
        marginBottom: theme.spacing(5),
    },
    cardText: {
        textAlign: 'center',
        color: "white",
        fontWeight: "bold",
    },
    text: {
        textAlign: 'center',
    },
    illustration1: {
        height: 400,
        textAlign: "center"
    },
    description1: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    skillsTitle: {
        color: "#00887A",
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(12)
    },
    heading: {
        color: "#00887A",
        textAlign: "center",
        fontWeight: "bold"
    },
    cardSkills: {
        width: "300vh"
    },
    cardSkillMedia: {
        height: 250,
        //width:300,
        textAlign: "center",
        marginBottom: theme.spacing(4),
        backgroundSize: "contain"

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
        marginTop: theme.spacing(5),
        textAlign: "center",
        marginBottom: theme.spacing(2),

    }

}));

//...........Text animation code.................//
var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
};

//...............................................//

const Home = () => {
    const classes = useStyles();

    const demoText = {
        text: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed doeiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim adminim veniam, quis nostrudexercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderitin voluptate velit esse cillum doloreeu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident"
    }

    const scrollTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }

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
                    alignItems="center"
                >
                    <div style={{ height: '30vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
                        <Grid item>

                            <Typography variant="h4" className={classes.title}>An Aspiring Front-End Web Developer</Typography>
                            <Typography className={classes.titleFooter}>I{'  '}
                                <span
                                    class="txt-rotate"
                                    data-period="1000"
                                    style={{}}
                                    data-rotate='["Design and code beautifully simple things", "Love what I do"]'></span>
                            </Typography>

                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <div className={classes.paper}>
                        <Card className={classes.card} variant='outlined'>
                            <CardMedia
                                className={classes.media}
                                image={ProfilePic}
                                alt="Banner"
                                title="Banner"
                            />
                            <CardContent>
                                <Typography className={classes.cardText}>Hi! I'm Zill-e. Nice to meet you.</Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid
                    item
                    container
                >
                    <Grid item xs={1} />

                    <Grid
                        item
                        container
                        xs={10}
                        justify="center"
                    >

                        <Grid item xs={12} sm={6}>
                            <div className={classes.illustration1}>
                                <img src={Programmer} className={classes.illustration1} alt="programmer pic" />
                            </div>
                            <div className={classes.text}>
                                <a href="https://storyset.com/technology">Illustration by Freepik Storyset</a>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.description1} >
                            <Typography align="center" className={classes.text}>{demoText.text}</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.description1} >
                            <Typography align="center" className={classes.text}>{demoText.text}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.illustration1}>
                                <img src={Developer} className={classes.illustration1} alt="programmer pic" />
                            </div>
                            <div className={classes.text}>
                                <a href="https://storyset.com/work">Illustration by Freepik Storyset</a>
                            </div>
                        </Grid>

                        <Grid item xs={12}>

                            <Typography
                                className={classes.skillsTitle}
                                variant="h4"
                            >
                                Skills
                            </Typography>

                        </Grid>

                        <Grid item container justify="center" xs={12} sm={4}>
                            <Card className={classes.cardSkills}>
                                <CardHeader
                                    title="Back End Development"
                                    className={classes.heading}
                                />
                                <CardMedia
                                    title="Back End Illustrator"
                                    alt="Back End Illustrator"
                                    image={BackEnd}
                                    className={classes.cardSkillMedia}
                                />
                                <CardContent>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item container justify="center" xs={12} sm={4}>
                            <Card className={classes.cardSkills}>
                                <CardHeader
                                    title="Front End Development"
                                    className={classes.heading}
                                />
                                <CardMedia
                                    title="Front End Illustrator"
                                    alt="Front End Illustrator"
                                    image={FrontEnd}
                                    className={classes.cardSkillMedia}
                                />
                                <CardContent>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item container justify="center" xs={12} sm={4}>
                            <Card className={classes.cardSkills}>
                                <CardHeader
                                    title="Other Skills"
                                    className={classes.heading}
                                />
                                <CardMedia
                                    title="Other Skills"
                                    alt="Other Skills"
                                    image={OtherSkill}
                                    className={classes.cardSkillMedia}
                                />
                                <CardContent>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className={classes.text}>item</Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
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

                    <Grid item xs={1} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;