// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import SuccessStory from './components/SuccessStory/SuccessStory';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div className="App">
        
      <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>   
          <Route path="/success">
            <SuccessStory />
          </Route>  
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
