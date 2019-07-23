import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getVacationsAccessToken} from '../Auth';
import {getAPIUrl} from '../Config';
import axios from 'axios';

class VacationRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      title: '',
      days: '',
    };
  }

  updateDays(value) {
    this.setState({
      days: value,
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

    const accessToken = await getVacationsAccessToken();

    await axios.post(`${getAPIUrl()}/vacations`, {
      title: this.state.title,
      days: this.state.days,
    }, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    this.props.history.push('/vacations');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New Vacation Request</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateTitle(e.target.value)}}
                    className="form-control"
                    placeholder="Give your request a title."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Days off:</label>
                  <input
                    disabled={this.state.disabled}
                    type="text"
                    onBlur={(e) => {this.updateDays(e.target.value)}}
                    className="form-control"
                    placeholder="How many days off do you need?"
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

export default withRouter(VacationRequest);
