import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
  getDomain,
  getClientId,
  getCallbackUrl,
  getExpenseAPIAudience,
  getInvoiceAPIAudience,
  getVacationAPIAudience,
  getConnection,
  getAPIUrl,
  setDomain,
  setClientId,
  setCallbackUrl,
  setExpenseAPIAudience,
  setInvoiceAPIAudience,
  setVacationAPIAudience,
  setConnection,
  setAPIUrl,
} from '../Config';

function ConfigField({title, description, fieldName, callback, value}) {
  return (
    <div className="form-group">
      <label htmlFor={fieldName}>{title}:</label>
      <input
        type="text"
        id={fieldName}
        onChange={(e) => {callback(fieldName, e.target.value)}}
        className="form-control"
        placeholder={description}
        value={value}
      />
    </div>
  );
}

class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: getDomain(),
      connection: getConnection(),
      clientId: getClientId(),
      callbackUrl: getCallbackUrl(),
      expenseAPI: getExpenseAPIAudience(),
      invoiceAPI: getInvoiceAPIAudience(),
      vacationAPI: getVacationAPIAudience(),
      apiURL: getAPIUrl(),
    };

    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    switch (field) {
      case 'domain':
        setDomain(value);
        break;
      case 'clientId':
        setClientId(value);
        break;
      case 'callbackUrl':
        setCallbackUrl(value);
        break;
      case 'expenseAPI':
        setExpenseAPIAudience(value);
        break;
      case 'invoiceAPI':
        setInvoiceAPIAudience(value);
        break;
      case 'vacationAPI':
        setVacationAPIAudience(value);
        break;
      case 'connection':
        setConnection(value);
        break;
      case 'apiURL':
        setAPIUrl(value);
        break;
      default: throw new Error('??');
    }

    this.setState({
      [field]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-header">New Expense Report</div>
              <div className="card-body text-left">
                <ConfigField
                  title="Auth0 Domain"
                  description="Your Auth0 tenant domain."
                  fieldName="domain"
                  callback={this.updateField}
                  value={this.state.domain}
                />
                <ConfigField
                  title="Auth0 Client ID"
                  description="Your Auth0 client ID."
                  fieldName="clientId"
                  callback={this.updateField}
                  value={this.state.clientId}
                />
                <ConfigField
                  title="Auth0 Callback URL"
                  description="Callback URL of the application."
                  fieldName="callbackUrl"
                  callback={this.updateField}
                  value={this.state.callbackUrl}
                />
                <ConfigField
                  title="Expense API Audience"
                  description="Audience for the Expense API."
                  fieldName="expenseAPI"
                  callback={this.updateField}
                  value={this.state.expenseAPI}
                />
                <ConfigField
                  title="Invoice API Audience"
                  description="Audience for the Invoice API."
                  fieldName="invoiceAPI"
                  callback={this.updateField}
                  value={this.state.invoiceAPI}
                />
                <ConfigField
                  title="Vacation API Audience"
                  description="Audience for the Vacation API."
                  fieldName="vacationAPI"
                  callback={this.updateField}
                  value={this.state.vacationAPI}
                />
                <ConfigField
                  title="Custom Database Connection"
                  description="Name of the custom database connection."
                  fieldName="connection"
                  callback={this.updateField}
                  value={this.state.connection}
                />
                <ConfigField
                  title="API URL"
                  description="API URL."
                  fieldName="apiURL"
                  callback={this.updateField}
                  value={this.state.apiURL}
                />
                <button className="btn btn-primary" onClick={() => {window.location.href = '/'}}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Config);
