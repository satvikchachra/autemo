import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Landing from './components/Landing/Landing';
import LevelScreen from './components/LevelScreen/LevelScreen';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: '100%' }}>
        <div className="ToolbarSideDrawer">
          <Toolbar show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>

        <main className="Main" style={{ height: '100%' }}>
          <Switch>
            <Switch>
              <Route path="/levels" exact component={LevelScreen}></Route>
              <Route path="/level1" exact>Level1</Route>
              <Route path="/level2" exact>Level2</Route>
              <Route path="/level3" exact>Level3</Route>
              <Route path="/upload" exact>Upload</Route>
              <Route path="/camera" exact>Camera</Route>
              <Route path="/credits" exact>Credits</Route>
              <Route path="/" component={Landing}></Route>
            </Switch >
          </Switch >
        </main>
      </div >
    );

  }
}

export default App;
