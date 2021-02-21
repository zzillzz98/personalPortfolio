import React from 'react'

//Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: "#FFCCBC",
      textAlign: "center"
    },
    text: {
        color: "#00887A"
    }
  }));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Zill-e-Rahim
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
  }


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1" className={classes.text}>This Website was made using <a className={classes.text} href="https://reactjs.org/">React.js</a> + <a className={classes.text} href="https://material-ui.com/">Material UI</a></Typography>
                <Copyright />
            </Container>
        </footer>
    )
}

export default Footer;