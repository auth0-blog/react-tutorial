import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getInvoicesAccessToken} from '../Auth';

class InvoiceReports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoiceReports: null,
    };
  }

  async componentDidMount() {
    const accessToken = await getInvoicesAccessToken();

    const response = await axios.get('http://localhost:3001/invoices', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    const invoiceReports = response.data;
    this.setState({
      invoiceReports,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link to="/invoices/new-report">
              <button className="btn btn-primary">+ New Invoice Report</button>
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
              {this.state.invoiceReports === null && (
                <tr>
                  <td colSpan={2}>Loading reports...</td>
                </tr>
              )}
              {
                this.state.invoiceReports && this.state.invoiceReports.map(invoiceReport => (
                  <tr key={invoiceReport._id}>
                    <td>{invoiceReport.title}</td>
                    <td>{invoiceReport.amount}</td>
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

export default InvoiceReports;
