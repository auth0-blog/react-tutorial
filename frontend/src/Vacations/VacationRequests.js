import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getVacationsAccessToken} from "../Auth";

class VacationRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacationRequests: null,
    };
  }

  async componentDidMount() {
    const accessToken = await getVacationsAccessToken();

    const response = await axios.get('http://localhost:3001/vacations', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    const vacationRequests = response.data;
    this.setState({
      vacationRequests,
    });
  }

  render() {
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
                <th>Days off</th>
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
