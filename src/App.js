import './App.css';
import './font.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import { makeStyles } from '@material-ui/core/styles'


//Pages
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Projects from './pages/Projects'
import Socials from './pages/Socials'
import Contact from './pages/Contact'
import ProjectPage from './pages/ProjectPage'

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'


const font =  "'Montserrat', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Timeline' component={Timeline} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Socials' component={Socials} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/:id' component={ProjectPage} />
        </Switch>
        <Footer />
      </Router>  
      </MuiThemeProvider>
    </div>
  );
}

export default App;
