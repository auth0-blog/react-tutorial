import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getExpensesAccessToken} from '../Auth';
import axios from 'axios';

class ExpenseReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      title: '',
      amount: '',
    };
  }

  updateAmount(value) {
    this.setState({
      amount: value,
    });
  }

  updateTitle(value) {
    this.setState({
      title: value,
    });
  }

  async submit() {
    this.setState({
      disabled: true,
    });

    const accessToken = await getExpensesAccessToken();

    await axios.post('http://localhost:3001/expenses', {
      title: this.state.title,
      amount: this.state.amount,
    }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    this.props.history.push('/expenses');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New Expense Report</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateTitle(e.target.value)}}
                    className="form-control"
                    placeholder="Give your report a title."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Amount:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateAmount(e.target.value)}}
                    className="form-control"
                    placeholder="How much did you spend?"
                  />
                </div>
                <button
                  disabled={this.state.disabled}
                  className="btn btn-primary"
                  onClick={() => {this.submit()}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ExpenseReport);
