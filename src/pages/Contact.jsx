import React from 'react'
import MetaTags from 'react-meta-tags';

//Material UI Imports
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';




//EmailJS import
import emailjs from 'emailjs-com';

//Other imports
import ContactPic from './../assets/contact.svg'


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
    },
    textField: {
        marginBottom: theme.spacing(2),
        
    },
    button: {
        textTransform: 'none',
        backgroundColor: "#00887A",
        fontSize: '20px',
        textAlign: 'center',
        color: "white",
        "&:hover": {
            backgroundColor: "#FFCCBC",
            color: "white",
        },
        //minWidth: "300px",
        //maxWidth: "300px",
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: "#D3E3FC",
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: "#D3E3FC",
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#77A6F7",
            },
            '&:hover fieldset': {
                borderColor: "#D3E3FC",
            },
            '&.Mui-focused fieldset': {
                borderColor: "#D3E3FC",
            },
        },
        
    },
    
})(TextField);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Contact = () => {
    const classes = useStyles();
    const serviceID = "contact_service";
    const templateID = "contact_form";
    const userID = "user_jHj5XjTii7LRNZwdI6Jig";
    const [open,setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
                handleOpen();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <MetaTags>
                <title>Zill-e-Rahim | Contact</title>
                <meta name="description" content="Contact Zill-e-Rahim for employment or project collaboration" />
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
                        <Typography className={classes.title} variant="h3">Contact</Typography>
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
                        <Grid item xs={12} sm={6} container justify="center">
                            <form className="contact-form" onSubmit={sendEmail}>
                                <Grid item xs={12}>
                                    <Typography className={classes.heading}>Name</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField id="outlined-basic" name="user_name" variant="outlined" className={classes.textField} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.heading}>Email</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField id="outlined-basic" name="user_email" variant="outlined" className={classes.textField} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.heading}>Phone Number</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField id="outlined-basic" variant="outlined" className={classes.textField} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={classes.heading}>Message</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField id="outlined-basic"  variant="outlined" name="message" className={classes.textField} />
                                </Grid>
                                <Grid item xs={12} container justify="center">
                                    <Grid item>
                                        <Button className={classes.button} type="submit" value="Send">Send</Button>
                                        <Dialog
                                            open={open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-slide-title"
                                        >
                                            <DialogTitle id="alert-dialog-slide-title">{"Thank you for contacting me. I will Get Back to you as soon as I can ^_^"}</DialogTitle>

                                        </Dialog>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <img src={ContactPic} />
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>

            </Grid>
        </div>
    )
}

export default Contact;