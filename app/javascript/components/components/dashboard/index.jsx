import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bool, arrayOf, shape} from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import {fetchDashboard} from '../../api/';
import SpinnerLoader from '../loader';
const mapStateToProps = state => {
  return {
    dashboardList: state.dashboard.dashboardList,
    loading: state.dashboard.loading
  };
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    fetchDashboard();
  }

  render() {
    const {loading, dashboardList} = this.props;
    if (loading) return <SpinnerLoader />;
    return (
      <div className="container">
        <h1>Записи</h1>
        <div className="cards-wrapper">
          {dashboardList.map((record, key) => {
            const { procedure, procedure_date, name, phone_number, inst, price } = record;
            return (
              <Card key={key} className='card-styles'>
                <Card.Header>{procedure_date}</Card.Header>
                <Card.Body>
                  <Card.Title>{procedure}</Card.Title>
                  <table>
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td className='first-tr-styles'>Ім'я:</td>
                        <td>{name}</td>
                      </tr>
                      <tr>
                        <td className='first-tr-styles'>Номер тф:</td>
                        <td>{phone_number}</td>
                      </tr>
                      <tr>
                        <td className='first-tr-styles'>Ціна:</td>
                        <td>{price}</td>
                      </tr>
                      <tr>
                        <td className='first-tr-styles'>Instagram:</td>
                        <td><a href={inst}>{inst.replace('https://www.instagram.com/', '').replace('/','')}</a></td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            );
          })}
        </div>

      </div>
    );
  }
}
Dashboard.propTypes = {
  loading: bool.isRequired,
  dashboardList: arrayOf(shape({})).isRequired,
};
export default connect(mapStateToProps)(Dashboard);