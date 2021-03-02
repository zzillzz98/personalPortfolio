import React from 'react'

//Material UI Imports
import { Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';


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
        marginBottom : theme.spacing(2),
    },
    messageField: {

    }
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

const Contact = () => {
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
                        <Grid item xs={12} sm={6} container>
                            <Grid item xs ={12}>
                                <Typography className={classes.heading}>Name</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField id="outlined-basic"  variant="outlined" className={classes.textField}/>
                            </Grid>
                            <Grid item xs ={12}>
                                <Typography className={classes.heading}>Email</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField id="outlined-basic"  variant="outlined" className={classes.textField}/>
                            </Grid>
                            <Grid item xs ={12}>
                                <Typography className={classes.heading}>Phone Number</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField id="outlined-basic"  variant="outlined" className={classes.textField}/>
                            </Grid>
                            <Grid item xs ={12}>
                                <Typography className={classes.heading}>Message</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <CssTextField id="outlined-multiline-static" multiline variant="outlined" className={classes.textField}/>
                            </Grid>
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

export default Contact;