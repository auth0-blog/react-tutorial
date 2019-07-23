import React from 'react';
import {Link} from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <Link to="/vacations">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Planning a Vacation? Ask here!</div>
              <div className="card-body">
                <h4 className="card-title">
                  + Vacations
                </h4>
                <p className="card-text">For employees only.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <Link to="/expenses">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Submit your expenses here.</div>
              <div className="card-body">
                <h4 className="card-title">
                  + Expenses
                </h4>
                <p className="card-text">Employees & contractors.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <Link to="/invoices">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Send your invoices here.</div>
              <div className="card-body">
                <h4 className="card-title">
                  + Invoices
                </h4>
                <p className="card-text">For contractors only.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <Link to="/config">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Change the app config.</div>
              <div className="card-body">
                <h4 className="card-title">
                  + Config
                </h4>
                <p className="card-text">Useful for testing.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
