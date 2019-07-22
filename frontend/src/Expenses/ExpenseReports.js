import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getExpensesAccessToken, getExpensesConsent} from '../Auth';

class ExpenseReports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenseReports: null,
      consentNeeded: false,
    };
  }

  async fetchExpenses(accessToken) {
    const response = await axios.get('http://localhost:3001/expenses', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    const expenseReports = response.data;
    this.setState({
      expenseReports,
    });
  }

  async authorizeApplication() {
    try {
      const accessToken = await getExpensesConsent();
      await this.fetchExpenses(accessToken);
    } catch (err) {
      alert('Error while trying to fetch expenses. Check logs.');
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const accessToken = await getExpensesAccessToken();
      await this.fetchExpenses(accessToken);
    } catch (err) {
      if (err.error === 'consent_required') {
        this.setState({
          consentNeeded: true,
        });
        return;
      }
      alert('Error while trying to fetch expenses. Check logs.');
      console.log(err);
    }
  }

  render() {
    if (this.state.consentNeeded) return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>To be able to consume your expenses, this application needs your express consent.</p>
            <button className="btn btn-primary" onClick={async () => (await this.authorizeApplication())}>
              Authorize application
            </button>
          </div>
        </div>
      </div>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to="/expenses/new-report">
              <button className="btn btn-primary">+ New Expense Report</button>
            </Link>
          </div>
          <div className="col-12" style={{marginTop: '20px'}}>
            <table className="table">
              <thead className="thead-dark">
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              {this.state.expenseReports === null && (
                <tr>
                  <td colSpan={2}>Loading reports...</td>
                </tr>
              )}
              {
                this.state.expenseReports && this.state.expenseReports.map(expenseReport => (
                  <tr key={expenseReport._id}>
                    <td>{expenseReport.title}</td>
                    <td>{expenseReport.amount}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpenseReports;
