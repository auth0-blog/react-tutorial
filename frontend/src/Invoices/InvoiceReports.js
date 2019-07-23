import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {getInvoicesAccessToken, getInvoicesConsent} from '../Auth';
import {getAPIUrl} from '../Config';

class InvoiceReports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      invoiceReports: null,
      consentNeeded: false,
    };
  }

  async fetchInvoices(accessToken) {
    const response = await axios.get(`${getAPIUrl()}/invoices`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    const invoiceReports = response.data;
    this.setState({
      invoiceReports,
      consentNeeded: false,
    });
  }

  async authorizeApplication() {
    try {
      const accessToken = await getInvoicesConsent();
      await this.fetchInvoices(accessToken);
    } catch (err) {
      alert('Error while trying to fetch invoices. Check logs.');
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const accessToken = await getInvoicesAccessToken();
      await this.fetchInvoices(accessToken);
    } catch (err) {
      if (err.error === 'consent_required') {
        this.setState({
          consentNeeded: true,
        });
        return;
      }
      alert('Error while trying to fetch invoices. Check logs.');
      console.log(err);
    }
  }

  render() {
    if (this.state.consentNeeded) return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>To be able to consume your invoices, this application needs your express consent.</p>
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
