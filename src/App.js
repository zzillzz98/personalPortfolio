import logo from './logo.svg';
import './App.css';
import './font.css'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

//Pages
import TempHome from './pages/tempHome'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Projects from './pages/Projects'
import Socials from './pages/Socials'
import Contact from './pages/Contact'

//Components
import NavBar from './components/NavBar'


const font =  "'Montserrat', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "none"
    }
  }
});

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Timeline' component={Timeline} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Socials' component={Socials} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </Router>  
      </MuiThemeProvider>
    </div>
  );
}

export default App;
