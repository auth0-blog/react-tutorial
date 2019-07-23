import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {initialize, silentAuth} from './Auth';
import Dashboard from './Dashboard/Dashboard';
import NavBar from './NavBar/NavBar';
import Config from './Config/Config';
import Callback from './Callback';
import ExpenseReport from './Expenses/ExpenseReport';
import ExpenseReports from './Expenses/ExpenseReports';
import InvoiceReport from './Invoices/InvoiceReport';
import InvoiceReports from './Invoices/InvoiceReports';
import VacationRequest from './Vacations/VacationRequest';
import VacationRequests from './Vacations/VacationRequests';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      checkingSession: true,
      config: false,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/config') {
      this.setState({loading: false, config: true});
      return;
    }

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
        {!this.state.config && <NavBar/>}
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/expenses' component={ExpenseReports}/>
        <Route exact path='/expenses/new-report' component={ExpenseReport}/>
        <Route exact path='/invoices' component={InvoiceReports}/>
        <Route exact path='/invoices/new-report' component={InvoiceReport}/>
        <Route exact path='/vacations' component={VacationRequests}/>
        <Route exact path='/vacations/new-request' component={VacationRequest}/>
        <Route exact path='/callback' component={Callback}/>
        <Route exact path='/config' component={Config}/>
      </div>
    );
  }
}

export default withRouter(App);
