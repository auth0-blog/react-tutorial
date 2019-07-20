import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {initialize, silentAuth} from './Auth';
import Dashboard from './Dashboard/Dashboard';
import NavBar from './NavBar/NavBar';
import Question from './Question/Question';
import Callback from './Callback';
import NewQuestion from './NewQuestion/NewQuestion';
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      checkingSession: true,
    }
  }

  async componentDidMount() {
    await initialize();
    this.setState({loading: false});

    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession: false});
      return;
    }
    try {
      await silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question'
                      component={NewQuestion}
                      checkingSession={this.state.checkingSession} />
      </div>
    );
  }
}

export default withRouter(App);
