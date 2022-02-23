import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import LoginPage from "./pages/LoginPage";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blog_post/:id" component={BlogPost}/>
            <Route path="/blog_post_categorised/:id" component={BlogCategory}/>
            <Route path="/login" component={LoginPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
