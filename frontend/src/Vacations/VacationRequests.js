import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getVacationsAccessToken, getVacationsConsent} from '../Auth';
import {getAPIUrl} from '../Config';

class VacationRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacationRequests: null,
      consentNeeded: false,
    };
  }

  async fetchVacations(accessToken) {
    const response = await axios.get(`${getAPIUrl()}/vacations`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    const vacationRequests = response.data;
    this.setState({
      vacationRequests,
      consentNeeded: false,
    });
  }

  async authorizeApplication() {
    try {
      const accessToken = await getVacationsConsent();
      await this.fetchVacations(accessToken);
    } catch (err) {
      alert('Error while trying to fetch vacations. Check logs.');
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const accessToken = await getVacationsAccessToken();
      await this.fetchVacations(accessToken);
    } catch (err) {
      if (err.error === 'consent_required') {
        this.setState({
          consentNeeded: true,
        });
        return;
      }
      alert('Error while trying to fetch vacations. Check logs.');
      console.log(err);
    }
  }

  render() {
    if (this.state.consentNeeded) return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>To be able to consume your vacations, this application needs your express consent.</p>
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
            <Link to="/vacations/new-request">
              <button className="btn btn-primary">+ New Vacation Request</button>
            </Link>
          </div>
          <div className="col-12" style={{marginTop: '20px'}}>
            <table className="table">
              <thead className="thead-dark">
              <tr>
                <th>Description</th>
                <th>Days Off</th>
              </tr>
              </thead>
              <tbody>
              {this.state.vacationRequests === null && (
                <tr>
                  <td colSpan={2}>Loading requests...</td>
                </tr>
              )}
              {
                this.state.vacationRequests && this.state.vacationRequests.map(vacationRequest => (
                  <tr key={vacationRequest._id}>
                    <td>{vacationRequest.title}</td>
                    <td>{vacationRequest.days}</td>
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

export default VacationRequests;
